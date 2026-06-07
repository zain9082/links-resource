import type { Metadata } from "next";
import { Users, ShieldCheck } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: "Admin · Users" });

export default function AdminUsers() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white">Users</h1>
      <p className="mt-1 text-muted">Manage accounts and roles.</p>

      <div className="mt-8 rounded-2xl glass glow-border p-10 text-center">
        <Users className="mx-auto size-12 text-purple-2" />
        <h3 className="mt-4 text-lg font-semibold text-white">
          Connect your database to manage users
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted">
          Set <code className="rounded bg-white/10 px-1.5 py-0.5">DATABASE_URL</code>,
          run <code className="rounded bg-white/10 px-1.5 py-0.5">npm run db:push</code>{" "}
          and <code className="rounded bg-white/10 px-1.5 py-0.5">npm run db:seed</code>.
          Registered users will appear here.
        </p>
        <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-slate-200">
          <ShieldCheck className="size-4 text-emerald-400" />
          Seeded admin: admin@linksresource.com
        </div>
      </div>
    </div>
  );
}
