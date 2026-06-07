"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Globe, Loader2, Mail, User } from "lucide-react";
import { leadFormGoals } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function HeroLeadForm() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    toast.success("Thanks! Our team will reach out shortly.");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="glass-strong glow-shadow relative rounded-3xl p-7 sm:p-8"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-purple/20 blur-3xl" />
      <div className="relative">
        <h2 className="text-2xl font-bold text-white">
          Grow Your <span className="text-gradient-pink">Brand</span>
        </h2>
        <p className="mt-1 text-sm text-muted">
          by partnering with Links Resource
        </p>

        <div className="mt-6 space-y-3">
          <div className="relative">
            <User className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" />
            <Input
              name="name"
              placeholder="Your Name"
              required
              className="pl-11"
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" />
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="pl-11"
            />
          </div>
          <div className="relative">
            <Globe className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" />
            <Input
              name="website"
              placeholder="Website URL"
              className="pl-11"
            />
          </div>
          <select
            name="goal"
            defaultValue=""
            required
            className="h-11 w-full rounded-xl glass px-4 text-sm text-white outline-none focus:ring-2 focus:ring-purple/30"
          >
            <option value="" disabled className="bg-bg-800">
              How can we help?
            </option>
            {leadFormGoals.map((g) => (
              <option key={g} value={g} className="bg-bg-800">
                {g}
              </option>
            ))}
          </select>
        </div>

        <Button type="submit" size="lg" className="mt-5 w-full" disabled={loading}>
          {loading ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            "Submit"
          )}
        </Button>
      </div>
    </form>
  );
}
