"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider, useTheme } from "next-themes";
import { Toaster } from "sonner";
import { SeoAuditProvider } from "@/components/seo-audit/seo-audit-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <SessionProvider>
        <SeoAuditProvider>
          <ThemedToaster />
          {children}
        </SeoAuditProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}

function ThemedToaster() {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  return (
    <Toaster
      theme={isLight ? "light" : "dark"}
      position="bottom-center"
      toastOptions={{
        style: {
          background: isLight ? "rgba(255,255,255,0.88)" : "rgba(11,17,32,0.9)",
          border: isLight
            ? "1px solid rgba(2,6,23,0.08)"
            : "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(16px)",
          color: isLight ? "#0f172a" : "#fff",
        },
      }}
    />
  );
}
