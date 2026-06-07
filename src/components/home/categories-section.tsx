import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { cn } from "@/lib/utils";

const grad: Record<string, string> = {
  purple: "bg-gradient-purple",
  blue: "bg-gradient-blue",
  pink: "bg-gradient-pink",
};

export function CategoriesSection() {
  return (
    <section className="container-wide py-24">
      <SectionHeading
        eyebrow="Browse by category"
        title={
          <>
            Everything you need, <span className="text-gradient">organized</span>
          </>
        }
        subtitle="Explore curated resources across SEO, link building, content, development, design and AI."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c, i) => (
          <Reveal key={c.slug} delay={i}>
            <Link
              href={`/categories/${c.slug}`}
              className="group glass glow-border relative flex h-full flex-col rounded-2xl p-6 transition-transform hover:-translate-y-1.5"
            >
              <div
                className={cn(
                  "grid size-12 place-items-center rounded-xl text-white glow-shadow",
                  grad[c.gradient]
                )}
              >
                <Icon name={c.icon} className="size-6" />
              </div>
              <h3 className="mt-5 flex items-center gap-1.5 text-lg font-semibold text-white">
                {c.name}
                <ArrowUpRight className="size-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-purple-2" />
              </h3>
              <p className="mt-2 text-sm text-muted">{c.description}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
