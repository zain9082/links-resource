import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CaseStudy } from "@/lib/types";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="glass-strong glow-border grid gap-8 rounded-3xl p-8 lg:grid-cols-2 lg:p-10">
      <div>
        <Badge variant="purple">{study.category}</Badge>
        <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">{study.title}</h3>

        <div className="mt-8 grid grid-cols-2 gap-4">
          {study.metrics.map((m) => (
            <div key={m.label} className="overflow-hidden rounded-xl border border-white/10">
              <div className="bg-gradient-pink px-4 py-3 text-center text-xl font-bold text-white sm:text-2xl">
                {m.value}
              </div>
              <div className="bg-white/5 px-4 py-2 text-center text-xs font-medium text-purple-2 sm:text-sm">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <Button asChild className="mt-8">
          <Link href="/contact">Read Case Study</Link>
        </Button>
      </div>

      <div className="glass relative overflow-hidden rounded-2xl p-3">
        <div className="mb-3 flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-pink" />
          <span className="size-2.5 rounded-full bg-yellow-400" />
          <span className="size-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2 text-xs text-muted">Analytics Dashboard</span>
        </div>
        <div className="relative h-[320px] overflow-hidden rounded-xl">
          <Image
            src="/images/analytics-dashboard.png"
            alt="Analytics dashboard preview"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
