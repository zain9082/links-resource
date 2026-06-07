import { Check } from "lucide-react";
import { whyChooseUs } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function WhyChoose() {
  return (
    <section className="container-wide py-24">
      <SectionHeading
        eyebrow="Why brands choose Links Resource"
        title={
          <>
            Skip In-House Hiring.{" "}
            <span className="text-gradient">Get Results Faster</span>
          </>
        }
        subtitle="A dedicated link-building team focused on authority, rankings, and long-term growth."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {whyChooseUs.map((item, i) => (
          <Reveal key={item.index} delay={i}>
            <div className="glass glow-border h-full rounded-2xl p-7">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-gradient">
                  {item.index}
                </span>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 text-sm text-muted">{item.description}</p>
              <ul className="mt-5 space-y-2">
                {item.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2.5 text-sm text-slate-200"
                  >
                    <span className="grid size-5 place-items-center rounded-full bg-purple/20">
                      <Check className="size-3 text-purple-2" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
