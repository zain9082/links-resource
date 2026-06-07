import { NextRequest } from "next/server";
import { resources, categories } from "@/lib/data";

export const runtime = "nodejs";

type ChatMessage = { role: "user" | "assistant"; content: string };

/**
 * Streaming AI chat endpoint.
 *
 * By default this uses a local, deterministic "recommendation engine" so the
 * assistant works with zero configuration. To enable a real LLM, set
 * OPENAI_API_KEY (or wire ANTHROPIC_API_KEY) and replace `generateReply`
 * with a streamed provider call — the response shape stays identical.
 */
const STOP = new Set([
  "the", "a", "an", "for", "to", "me", "show", "find", "recommend", "best",
  "good", "some", "any", "tools", "tool", "resources", "resource", "please",
  "i", "want", "need", "looking", "and", "or", "of", "in", "on", "with",
]);

function generateReply(message: string): string {
  const q = message.toLowerCase();
  const words = q
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP.has(w));

  const matched = resources
    .map((r) => {
      const haystack = `${r.title} ${r.tagline} ${r.description} ${r.category.replace(
        "-",
        " "
      )} ${r.tags.join(" ")}`.toLowerCase();
      let score = 0;
      for (const w of words) {
        if (r.title.toLowerCase().includes(w)) score += 3;
        else if (r.category.replace("-", " ").includes(w)) score += 2;
        else if (r.tags.some((t) => t.includes(w))) score += 2;
        else if (haystack.includes(w)) score += 1;
      }
      return { r, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || b.r.views - a.r.views)
    .slice(0, 3)
    .map((x) => x.r);

  if (/categor/i.test(q)) {
    return `We organize everything into ${categories.length} categories: ${categories
      .map((c) => c.name)
      .join(
        ", "
      )}. Tell me what you're working on and I'll point you to the right one.`;
  }

  if (matched.length === 0) {
    const featured = resources.filter((r) => r.featured).slice(0, 3);
    return `I couldn't find an exact match, but here are some popular picks you might like: ${featured
      .map((r) => `**${r.title}** — ${r.tagline}`)
      .join(
        " · "
      )}. Try searching for "SEO", "link building", "content" or "AI tools".`;
  }

  return `Based on what you asked, I'd recommend: ${matched
    .map((r) => `**${r.title}** (${r.pricing}) — ${r.tagline}`)
    .join(
      " · "
    )}. Want me to open any of these or suggest related resources?`;
}

export async function POST(req: NextRequest) {
  let messages: ChatMessage[] = [];
  try {
    const body = await req.json();
    messages = body.messages ?? [];
  } catch {
    return new Response("Invalid request", { status: 400 });
  }

  const last = [...messages].reverse().find((m) => m.role === "user");
  const reply = generateReply(last?.content ?? "");
  const tokens = reply.split(/(\s+)/);

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      for (const token of tokens) {
        controller.enqueue(encoder.encode(token));
        await new Promise((r) => setTimeout(r, 18));
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}
