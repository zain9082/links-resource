import type { Metadata } from "next";
import { AuthForm } from "@/components/auth/auth-form";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sign up",
  path: "/signup",
});

export default function SignupPage() {
  const oauth = {
    google: Boolean(process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET),
    github: Boolean(process.env.AUTH_GITHUB_ID && process.env.AUTH_GITHUB_SECRET),
  };
  return (
    <div className="flex min-h-screen items-center justify-center px-4 pt-24">
      <AuthForm mode="signup" oauth={oauth} />
    </div>
  );
}
