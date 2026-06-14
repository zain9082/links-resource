"use client";

import { ArrowRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { seoAuditContent } from "@/lib/data";
import { useSeoAuditModal } from "@/components/seo-audit/seo-audit-provider";
import { cn } from "@/lib/utils";

type SeoAuditButtonProps = Omit<ButtonProps, "onClick"> & {
  short?: boolean;
  responsive?: boolean;
  onOpen?: () => void;
};

export function SeoAuditButton({
  short = false,
  responsive = false,
  onOpen,
  className,
  size = "md",
  ...props
}: SeoAuditButtonProps) {
  const { openModal } = useSeoAuditModal();

  return (
    <Button
      type="button"
      variant="audit"
      size={size}
      className={cn(className)}
      onClick={() => {
        openModal();
        onOpen?.();
      }}
      {...props}
    >
      {responsive ? (
        <>
          <span className="hidden xl:inline">{seoAuditContent.label}</span>
          <span className="xl:hidden">{seoAuditContent.shortLabel}</span>
        </>
      ) : (
        short ? seoAuditContent.shortLabel : seoAuditContent.label
      )}
      <ArrowRight className="size-4" />
    </Button>
  );
}
