"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  Briefcase,
  Building2,
  Globe,
  Loader2,
  Mail,
  Search,
  Target,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { seoAuditContent } from "@/lib/data";
import {
  isSeoAuditError,
  type SeoAuditResponse,
  type SeoAuditResult,
} from "@/lib/seo-audit/types";

const SeoAuditReport = dynamic(
  () =>
    import("@/components/seo-audit/seo-audit-report").then((mod) => ({
      default: mod.SeoAuditReport,
    })),
  {
    loading: () => (
      <div className="flex min-h-[200px] items-center justify-center">
        <Loader2 className="size-8 animate-spin text-purple-2" />
      </div>
    ),
    ssr: false,
  }
);

type Step = "input" | "loading" | "results" | "error";

type AuditForm = {
  url: string;
  fullName: string;
  workEmail: string;
  company: string;
  targetCompany: string;
  purpose: string;
};

const emptyForm: AuditForm = {
  url: "",
  fullName: "",
  workEmail: "",
  company: "",
  targetCompany: "",
  purpose: "",
};

type SeoAuditFlowProps = {
  onStepChange?: (step: Step) => void;
};

export function SeoAuditFlow({ onStepChange }: SeoAuditFlowProps) {
  const [step, setStep] = useState<Step>("input");
  const [form, setForm] = useState<AuditForm>(emptyForm);
  const [result, setResult] = useState<SeoAuditResult | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  function setFlowStep(next: Step) {
    setStep(next);
    onStepChange?.(next);
  }

  function updateField<K extends keyof AuditForm>(key: K, value: AuditForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  const isFormValid =
    form.url.trim() &&
    form.fullName.trim() &&
    form.workEmail.trim() &&
    form.company.trim() &&
    form.targetCompany.trim() &&
    form.purpose.trim();

  async function runAudit() {
    if (!isFormValid) return;

    setFlowStep("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/seo-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json()) as SeoAuditResponse;

      if (!res.ok || isSeoAuditError(data)) {
        setErrorMessage(
          isSeoAuditError(data)
            ? data.message
            : "The site may be unreachable. Check the URL and try again."
        );
        setFlowStep("error");
        return;
      }

      setResult(data);
      setFlowStep("results");
    } catch {
      setErrorMessage(
        "The site may be unreachable, or the audit could not complete. Please try again."
      );
      setFlowStep("error");
    }
  }

  function reset() {
    setFlowStep("input");
    setResult(null);
    setErrorMessage("");
  }

  return (
    <AnimatePresence mode="wait">
      {step === "input" && (
        <motion.div
          key="input"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="space-y-3"
        >
          <div className="mb-2 flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-xl bg-gradient-purple glow-shadow">
              <Search className="size-5 text-white" />
            </span>
            <div>
              <p className="text-base font-semibold text-white">
                {seoAuditContent.formTitle}
              </p>
              <p className="text-xs text-muted">{seoAuditContent.formSubtitle}</p>
            </div>
          </div>

          <Field
            icon={Globe}
            value={form.url}
            onChange={(v) => updateField("url", v)}
            placeholder="Website URL (e.g. linksresource.com)"
          />
          <Field
            icon={User}
            value={form.fullName}
            onChange={(v) => updateField("fullName", v)}
            placeholder="Full name"
          />
          <Field
            icon={Mail}
            value={form.workEmail}
            onChange={(v) => updateField("workEmail", v)}
            placeholder="Work email"
            type="email"
          />
          <Field
            icon={Building2}
            value={form.company}
            onChange={(v) => updateField("company", v)}
            placeholder="Company"
          />
          <Field
            icon={Target}
            value={form.targetCompany}
            onChange={(v) => updateField("targetCompany", v)}
            placeholder="Target company"
          />
          <Field
            icon={Briefcase}
            value={form.purpose}
            onChange={(v) => updateField("purpose", v)}
            placeholder="Purpose (e.g. improve organic traffic)"
          />

          <Button
            type="button"
            variant="audit"
            size="lg"
            className="mt-2 w-full"
            disabled={!isFormValid}
            onClick={() => void runAudit()}
          >
            Run Free SEO Audit
            <ArrowRight className="size-4" />
          </Button>
        </motion.div>
      )}

      {step === "loading" && (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex min-h-[240px] flex-col items-center justify-center gap-4 py-8 text-center"
        >
          <span className="grid size-16 place-items-center rounded-2xl bg-gradient-purple/20">
            <Loader2 className="size-8 animate-spin text-purple-2" />
          </span>
          <div>
            <p className="text-lg font-semibold text-white">Analyzing your site…</p>
            <p className="mt-1 text-sm text-muted">Running on-page, local, and technical checks</p>
          </div>
        </motion.div>
      )}

      {step === "error" && (
        <motion.div
          key="error"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl bg-gradient-blue p-8 text-center"
        >
          <span className="grid size-16 place-items-center rounded-full bg-white/10">
            <AlertTriangle className="size-8 text-amber-300" />
          </span>
          <h3 className="mt-5 text-2xl font-bold text-white">
            We couldn&apos;t finish the audit
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-100">
            {errorMessage}
          </p>
          <Button
            type="button"
            variant="audit"
            size="lg"
            className="mt-8"
            onClick={() => setFlowStep("input")}
          >
            Try again
          </Button>
        </motion.div>
      )}

      {step === "results" && result && (
        <motion.div
          key="results"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <SeoAuditReport result={result} onRunAnother={reset} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  icon: Icon,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="relative">
      <Icon className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" />
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="pl-11"
      />
    </div>
  );
}
