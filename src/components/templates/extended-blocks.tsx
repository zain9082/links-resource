import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { ExtendedPageBlock, PageBlock } from "../../../content/pages/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PublicationsTable } from "@/components/link-building/publications-table";
import { publicationSites } from "@/lib/publications";

const extendedTypes = new Set<ExtendedPageBlock["type"]>([
  "pricingTable", "packageCards", "comparisonTable", "publicationTable", "stats",
  "caseStudyHighlight", "testimonials", "logos", "localProof", "industryProblems",
  "resellerProcess", "deliverablesList", "timeline", "ctaBanner",
]);

export function isExtendedBlock(block: PageBlock): block is ExtendedPageBlock {
  return extendedTypes.has(block.type as ExtendedPageBlock["type"]);
}

function DataTable({ columns, rows }: { columns: string[]; rows: string[][] }) {
  return <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
    <table className="min-w-[640px] w-full text-left text-sm">
      <thead className="border-b border-white/10 bg-white/[0.04]"><tr>{columns.map((column) => <th className="px-5 py-4 font-semibold text-white" key={column}>{column}</th>)}</tr></thead>
      <tbody>{rows.map((row, rowIndex) => <tr className="border-b border-white/10 last:border-0" key={rowIndex}>{columns.map((_, columnIndex) => <td className="px-5 py-4 text-muted" key={columnIndex}>{row[columnIndex] ?? ""}</td>)}</tr>)}</tbody>
    </table>
  </div>;
}

export function ExtendedBlock({ block, index }: { block: ExtendedPageBlock; index: number }) {
  const heading = block.heading ? <h2 className="max-w-3xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">{block.heading}</h2> : null;
  const body = <p className="mt-4 max-w-3xl break-words leading-relaxed text-muted">{block.body}</p>;
  const wrap = (content: React.ReactNode) => <section className="container-wide py-10 sm:py-14" id={`section-${index}`}>{heading}{body}{content}</section>;

  if (block.type === "pricingTable" || block.type === "comparisonTable") return wrap(<DataTable columns={block.columns} rows={block.rows} />);
  if (block.type === "publicationTable") return wrap(<div className="mt-8"><PublicationsTable sites={publicationSites.slice(0, block.limit ?? 8)} compact /></div>);
  if (block.type === "packageCards") return wrap(<div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{block.packages.map((item) => <Card className="flex min-w-0 flex-col p-7" key={item.name}><Badge variant="purple" className="w-fit">Package</Badge><h3 className="mt-5 text-xl font-semibold text-white">{item.name}</h3>{item.price && <p className="mt-3 text-2xl font-bold text-gradient">{item.price}</p>}<p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.description}</p><ul className="mt-5 space-y-2 text-sm text-muted">{item.features.map((feature) => <li className="flex gap-2" key={feature}><Check className="mt-0.5 size-4 shrink-0 text-purple-2" />{feature}</li>)}</ul>{item.href && <Button asChild className="mt-6"><Link href={item.href}>Explore package <ArrowRight className="size-4" /></Link></Button>}</Card>)}</div>);
  if (block.type === "stats") return wrap(<div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{block.metrics.map((metric) => <Card className="min-w-0 p-7" key={metric.label}><p className="break-words text-3xl font-bold text-gradient">{metric.value}</p><p className="mt-3 text-sm text-muted">{metric.label}</p></Card>)}</div>);
  if (block.type === "caseStudyHighlight") return wrap(<Card className="mt-8 grid gap-6 p-7 md:grid-cols-2"><div><Badge variant="purple">Case study</Badge><h3 className="mt-5 text-xl font-semibold text-white">{block.studyTitle}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{block.summary}</p>{block.href && <Button asChild className="mt-6"><Link href={block.href}>Read case study <ArrowRight className="size-4" /></Link></Button>}</div><div className="grid grid-cols-2 gap-3">{block.metrics.map((metric) => <div className="glass rounded-2xl p-5" key={metric.label}><p className="text-2xl font-bold text-gradient">{metric.value}</p><p className="mt-2 text-xs text-muted">{metric.label}</p></div>)}</div></Card>);
  if (block.type === "testimonials") return wrap(<div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{block.quotes.map((item) => <Card className="min-w-0 p-7" key={item.name}><blockquote className="text-sm leading-relaxed text-white">“{item.quote}”</blockquote><p className="mt-6 font-semibold text-purple-2">{item.name}</p>{item.role && <p className="mt-1 text-xs text-muted">{item.role}</p>}</Card>)}</div>);
  if (block.type === "logos") return wrap(<div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">{block.names.map((name) => <div className="glass flex min-h-20 items-center justify-center rounded-2xl p-5 text-center text-sm font-semibold text-white" key={name}>{name}</div>)}</div>);
  if (block.type === "localProof") return wrap(<Card className="mt-8 p-7"><h3 className="text-lg font-semibold text-white">Areas we serve</h3><ul className="mt-5 flex flex-wrap gap-3">{block.areas.map((area) => <li className="glass rounded-full px-4 py-2 text-sm text-muted" key={area}>{area}</li>)}</ul></Card>);
  if (block.type === "industryProblems") return wrap(<div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{block.items.map((item) => <Card className="min-w-0 p-7" key={item.title}><h3 className="text-xl font-semibold text-white">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p></Card>)}</div>);
  if (block.type === "resellerProcess" || block.type === "timeline") {
    const steps = block.type === "resellerProcess" ? block.steps : block.milestones;
    return wrap(<ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{steps.map((step, stepIndex) => <li key={step.title}><Card className="h-full min-w-0 p-7"><span className="text-3xl font-bold text-gradient">{String(stepIndex + 1).padStart(2, "0")}</span><h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p></Card></li>)}</ol>);
  }
  if (block.type === "deliverablesList") return wrap(<Card className="mt-8 p-7"><ul className="grid gap-4 sm:grid-cols-2">{block.items.map((item) => <li className="flex gap-3 text-sm text-muted" key={item}><Check className="size-4 shrink-0 text-purple-2" />{item}</li>)}</ul></Card>);
  if (block.type === "ctaBanner") return <section className="container-wide py-10 sm:py-14" id={`section-${index}`}><div className="glass-strong glow-border rounded-3xl p-8 sm:p-12">{heading}{body}<Button asChild size="lg" className="mt-7"><Link href={block.href ?? "/contact"}>{block.label ?? "Contact us"}<ArrowRight className="size-4" /></Link></Button></div></section>;
  return null;
}
