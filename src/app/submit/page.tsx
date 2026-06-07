import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { SubmitForm } from "@/components/forms/submit-form";
import { categories } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Submit a Resource",
  description: "Suggest a tool or service to add to the directory.",
  path: "/submit",
});

export default function SubmitPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contribute"
        title={
          <>
            Submit a <span className="text-gradient">resource</span>
          </>
        }
        subtitle="Found something great? Suggest it and our team will review it for the directory."
      />
      <div className="container-wide max-w-2xl py-12">
        <SubmitForm categories={categories} />
      </div>
    </>
  );
}
