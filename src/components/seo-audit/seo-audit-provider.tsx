"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Sparkles, X } from "lucide-react";
import { SeoAuditFlow } from "@/components/seo-audit/seo-audit-flow";
import { seoAuditContent } from "@/lib/data";
import { cn } from "@/lib/utils";

type AuditStep = "input" | "loading" | "results" | "error";

type SeoAuditContextValue = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const SeoAuditContext = createContext<SeoAuditContextValue | null>(null);

export function SeoAuditProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [session, setSession] = useState(0);
  const [flowStep, setFlowStep] = useState<AuditStep>("input");

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => {
    setOpen(false);
    setFlowStep("input");
    setSession((value) => value + 1);
  }, []);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, closeModal]);

  const isWide = flowStep === "input";

  return (
    <SeoAuditContext.Provider value={{ open, openModal, closeModal }}>
      {children}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[100] flex items-end justify-center p-2 sm:items-center sm:p-4"
              >
                <button
                  type="button"
                  aria-label="Close SEO audit popup"
                  onClick={closeModal}
                  className="absolute inset-0 bg-bg-900/75 backdrop-blur-md"
                />

                <motion.div
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="seo-audit-title"
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 16, scale: 0.98 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "relative z-10 flex max-h-[94vh] w-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-bg-800/95 shadow-2xl backdrop-blur-xl",
                    isWide ? "max-w-[min(1180px,96vw)]" : "max-w-[min(1200px,96vw)]"
                  )}
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-purple/20 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-20 -left-16 size-56 rounded-full bg-blue/15 blur-3xl" />

                  <button
                    type="button"
                    aria-label="Close"
                    onClick={closeModal}
                    className="absolute right-4 top-4 z-20 grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-muted transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <X className="size-5" />
                  </button>

                  <div className="scrollbar-none flex-1 overflow-y-auto overflow-x-hidden overscroll-contain">
                    <div
                      className={cn(
                        "relative grid gap-6 p-5 sm:p-7 lg:gap-8 lg:p-9",
                        flowStep === "input" ? "lg:grid-cols-5" : "grid-cols-1"
                      )}
                    >
                      {flowStep === "input" && (
                        <div className="lg:col-span-2">
                          <span className="inline-flex items-center gap-2 rounded-full border border-purple/30 bg-purple/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-purple-2">
                            <Sparkles className="size-3.5" />
                            {seoAuditContent.badge}
                          </span>
                          <h2
                            id="seo-audit-title"
                            className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl"
                          >
                            {seoAuditContent.title}
                          </h2>
                          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                            {seoAuditContent.description}
                          </p>
                          <ul className="mt-6 space-y-3">
                            {seoAuditContent.benefits.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 text-sm text-slate-200"
                              >
                                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gradient-purple">
                                  <Check className="size-3.5 text-white" strokeWidth={3} />
                                </span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div
                        className={cn(
                          "rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6",
                          flowStep === "input" && "lg:col-span-3"
                        )}
                      >
                        <SeoAuditFlow key={session} onStepChange={setFlowStep} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </SeoAuditContext.Provider>
  );
}

export function useSeoAuditModal() {
  const ctx = useContext(SeoAuditContext);
  if (!ctx) {
    throw new Error("useSeoAuditModal must be used within SeoAuditProvider");
  }
  return ctx;
}
