"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";
import type { Category } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  submitResource,
  type SubmitState,
} from "@/app/actions/submit-resource";

const initial: SubmitState = { ok: false, message: "" };

export function SubmitForm({ categories }: { categories: Category[] }) {
  const [state, action, pending] = useActionState(submitResource, initial);

  useEffect(() => {
    if (state.ok) toast.success(state.message);
  }, [state]);

  if (state.ok) {
    return (
      <div className="glass glow-border rounded-2xl p-10 text-center">
        <CheckCircle2 className="mx-auto size-12 text-emerald-400" />
        <h3 className="mt-4 text-xl font-semibold text-white">Submitted!</h3>
        <p className="mt-2 text-sm text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="glass glow-border space-y-5 rounded-2xl p-7">
      <Field label="Resource name" error={state.errors?.title}>
        <Input name="title" placeholder="e.g. Ahrefs" />
      </Field>
      <Field label="Website URL" error={state.errors?.url}>
        <Input name="url" type="url" placeholder="https://…" />
      </Field>
      <Field label="Category" error={state.errors?.category}>
        <select
          name="category"
          defaultValue=""
          className="h-11 w-full rounded-xl glass px-4 text-sm text-white outline-none focus:ring-2 focus:ring-purple/30"
        >
          <option value="" disabled className="bg-bg-800">
            Choose a category…
          </option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug} className="bg-bg-800">
              {c.name}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Description" error={state.errors?.description}>
        <textarea
          name="description"
          rows={4}
          placeholder="What makes this resource great?"
          className="w-full rounded-xl glass p-4 text-sm text-white placeholder:text-muted/70 outline-none focus:ring-2 focus:ring-purple/30"
        />
      </Field>

      {!state.ok && state.message && (
        <p className="text-sm text-pink">{state.message}</p>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={pending}>
        {pending ? "Submitting…" : "Submit Resource"}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-200">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-pink">{error}</span>}
    </label>
  );
}
