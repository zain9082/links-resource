"use server";

import { z } from "zod";

const schema = z.object({
  title: z.string().min(2, "Title is too short"),
  url: z.string().url("Enter a valid URL"),
  category: z.string().min(1, "Choose a category"),
  description: z.string().min(10, "Tell us a little more"),
});

export type SubmitState = {
  ok: boolean;
  message: string;
  errors?: Record<string, string>;
};

export async function submitResource(
  _prev: SubmitState,
  formData: FormData
): Promise<SubmitState> {
  const parsed = schema.safeParse({
    title: formData.get("title"),
    url: formData.get("url"),
    category: formData.get("category"),
    description: formData.get("description"),
  });

  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      errors[issue.path[0] as string] = issue.message;
    }
    return { ok: false, message: "Please fix the errors below.", errors };
  }

  // TODO: persist via Prisma once DATABASE_URL is configured:
  // await prisma.resourceSubmission.create({ data: parsed.data })
  await new Promise((r) => setTimeout(r, 600));

  return {
    ok: true,
    message: "Thanks! Your resource has been submitted for review.",
  };
}
