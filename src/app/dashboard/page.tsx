import type { Metadata } from "next";
import Link from "next/link";
import { LogIn } from "lucide-react";
import { auth } from "@/auth";
import { getPopular } from "@/lib/data";
import { DashboardTabs } from "@/components/dashboard/dashboard-tabs";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/page-header";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Dashboard",
  path: "/dashboard",
  noindex: true,
});

export default async function DashboardPage() {
  let session = null;
  try {
    session = await auth();
  } catch {
    session = null;
  }

  if (!session?.user) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-24 text-center">
        <div className="grid size-16 place-items-center rounded-2xl bg-gradient-purple glow-shadow">
          <LogIn className="size-7 text-white" />
        </div>
        <h1 className="mt-6 text-2xl font-bold text-white">Sign in required</h1>
        <p className="mt-2 max-w-sm text-muted">
          Sign in to access your saved resources, favorites and history.
        </p>
        <div className="mt-6 flex gap-3">
          <Button asChild>
            <Link href="/login">Sign in</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/signup">Create account</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHeader
        title={
          <>
            Welcome,{" "}
            <span className="text-gradient">
              {session.user.name ?? "creator"}
            </span>
          </>
        }
        subtitle="Manage your saved resources, favorites and history."
      />
      <div className="container-wide py-12">
        <DashboardTabs
          recommended={getPopular().slice(0, 6)}
          user={{ name: session.user.name, email: session.user.email }}
        />
      </div>
    </>
  );
}
