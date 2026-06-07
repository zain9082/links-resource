"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { Mail, Loader2 } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11 11 0 0 1 5.82 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function AuthForm({
  mode,
  oauth,
}: {
  mode: "login" | "signup";
  oauth: { google: boolean; github: boolean };
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const isLogin = mode === "login";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email"));
    const password = String(form.get("password"));

    try {
      if (!isLogin) {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: String(form.get("name")),
            email,
            password,
          }),
        });
        if (!res.ok) {
          const { error } = await res.json();
          throw new Error(error ?? "Registration failed");
        }
      }

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (result?.error) throw new Error("Invalid email or password");
      toast.success(isLogin ? "Welcome back!" : "Account created!");
      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="glass-strong glow-shadow w-full max-w-md rounded-3xl p-8">
      <h1 className="text-2xl font-bold text-white">
        {isLogin ? "Welcome back" : "Create your account"}
      </h1>
      <p className="mt-1 text-sm text-muted">
        {isLogin
          ? "Sign in to access your saved resources."
          : "Join to save favorites and get AI recommendations."}
      </p>

      {(oauth.google || oauth.github) && (
        <>
          <div className="mt-6 grid gap-3">
            {oauth.google && (
              <Button
                variant="glass"
                onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              >
                <Mail className="size-4" /> Continue with Google
              </Button>
            )}
            {oauth.github && (
              <Button
                variant="glass"
                onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
              >
                <GithubIcon className="size-4" /> Continue with GitHub
              </Button>
            )}
          </div>
          <div className="my-6 flex items-center gap-3 text-xs text-muted">
            <span className="h-px flex-1 bg-white/10" /> or {" "}
            <span className="h-px flex-1 bg-white/10" />
          </div>
        </>
      )}

      <form onSubmit={onSubmit} className="space-y-4">
        {!isLogin && (
          <Input name="name" placeholder="Full name" required />
        )}
        <Input name="email" type="email" placeholder="Email address" required />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
          minLength={isLogin ? undefined : 8}
        />
        <Button type="submit" size="lg" className="w-full" disabled={loading}>
          {loading && <Loader2 className="size-4 animate-spin" />}
          {isLogin ? "Sign in" : "Create account"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <Link
          href={isLogin ? "/signup" : "/login"}
          className="font-medium text-purple-2 hover:underline"
        >
          {isLogin ? "Sign up" : "Sign in"}
        </Link>
      </p>
    </div>
  );
}
