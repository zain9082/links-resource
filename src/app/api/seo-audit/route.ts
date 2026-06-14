import { NextResponse } from "next/server";
import { runSeoAudit } from "@/lib/seo-audit/analyze";
import { normalizeUrl } from "@/lib/seo-audit/utils";
import type { SeoAuditError, SeoAuditResult } from "@/lib/seo-audit/types";

type AuditRequestBody = {
  url?: string;
  fullName?: string;
  workEmail?: string;
  company?: string;
  targetCompany?: string;
  purpose?: string;
};

const CACHE_TTL_MS = 120_000;
const auditCache = new Map<string, { expires: number; result: SeoAuditResult }>();

type AuditLead = {
  fullName: string;
  workEmail: string;
  company: string;
  targetCompany: string;
  purpose: string;
};

function getCachedAudit(url: string): SeoAuditResult | null {
  const hit = auditCache.get(url);
  if (!hit) return null;
  if (Date.now() > hit.expires) {
    auditCache.delete(url);
    return null;
  }
  return hit.result;
}

function setCachedAudit(url: string, result: SeoAuditResult) {
  auditCache.set(url, { result, expires: Date.now() + CACHE_TTL_MS });
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as AuditRequestBody;
    const url = body.url?.trim();
    const lead: AuditLead = {
      fullName: body.fullName?.trim() ?? "",
      workEmail: body.workEmail?.trim() ?? "",
      company: body.company?.trim() ?? "",
      targetCompany: body.targetCompany?.trim() ?? "",
      purpose: body.purpose?.trim() ?? "",
    };

    if (!url) {
      return NextResponse.json(
        { error: "invalid_url", message: "Please enter a website URL." } satisfies SeoAuditError,
        { status: 400 }
      );
    }

    if (
      !lead.fullName ||
      !lead.workEmail ||
      !lead.company ||
      !lead.targetCompany ||
      !lead.purpose
    ) {
      return NextResponse.json(
        {
          error: "invalid_form",
          message: "Please complete all fields before running the audit.",
        } satisfies SeoAuditError,
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.workEmail)) {
      return NextResponse.json(
        { error: "invalid_email", message: "Please enter a valid work email." } satisfies SeoAuditError,
        { status: 400 }
      );
    }

    const normalizedUrl = normalizeUrl(url);
    const cached = getCachedAudit(normalizedUrl);
    if (cached) {
      return NextResponse.json({ ...cached, lead });
    }

    const result = await runSeoAudit(url, lead);
    setCachedAudit(normalizedUrl, result);
    return NextResponse.json(result);
  } catch (err) {
    const message =
      err instanceof Error
        ? err.message
        : "The site may be unreachable. Check the URL and try again.";

    return NextResponse.json(
      { error: "audit_failed", message } satisfies SeoAuditError,
      { status: 422 }
    );
  }
}
