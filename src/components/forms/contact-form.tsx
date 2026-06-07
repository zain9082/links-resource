"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const goals = [
  "SEO + GEO Services",
  "Link Building Services",
  "White Label / Link Building",
  "Web Design",
  "Other",
];

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    toast.success("Thanks! We'll be in touch shortly.");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="glass glow-border space-y-4 rounded-2xl p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Input name="name" placeholder="Your name" required />
        <Input name="email" type="email" placeholder="Email address" required />
      </div>
      <Input name="website" placeholder="Website URL (optional)" />
      <select
        name="goal"
        defaultValue=""
        required
        className="h-11 w-full rounded-xl glass px-4 text-sm text-white outline-none focus:ring-2 focus:ring-purple/30"
      >
        <option value="" disabled className="bg-bg-800">
          How can we help?
        </option>
        {goals.map((g) => (
          <option key={g} value={g} className="bg-bg-800">
            {g}
          </option>
        ))}
      </select>
      <textarea
        name="message"
        rows={5}
        placeholder="Tell us about your project…"
        required
        className="w-full rounded-xl glass p-4 text-sm text-white placeholder:text-muted/70 outline-none focus:ring-2 focus:ring-purple/30"
      />
      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        {loading && <Loader2 className="size-4 animate-spin" />}
        Send Message
      </Button>
    </form>
  );
}
