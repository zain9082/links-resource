import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { ContactForm } from "@/components/forms/contact-form";
import { site } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with the Links Resource team.",
  path: "/contact",
});

export default function ContactPage() {
  const details = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Office", value: site.address },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s <span className="text-gradient">grow together</span>
          </>
        }
        subtitle="Tell us about your goals and we'll suggest the best strategy for your business."
      />

      <div className="container-wide grid gap-8 py-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {details.map((d) => (
              <div
                key={d.label}
                className="flex items-start gap-4 rounded-2xl glass glow-border p-5"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-purple text-white">
                  <d.icon className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-muted">{d.label}</p>
                  {d.href ? (
                    <a
                      href={d.href}
                      className="font-medium text-white hover:text-purple-2"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="font-medium text-white">{d.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
