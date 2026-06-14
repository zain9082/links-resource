import { PrismaClient, Pricing } from "@prisma/client";
import bcrypt from "bcryptjs";
import {
  categories,
  tags,
  resources,
} from "../src/lib/data";

const prisma = new PrismaClient();

function toPricing(p: string): Pricing {
  if (p === "Free") return "FREE";
  if (p === "Paid") return "PAID";
  return "FREEMIUM";
}

async function main() {
  console.log("Seeding database…");

  // Categories
  for (const c of categories) {
    await prisma.category.upsert({
      where: { slug: c.slug },
      update: { name: c.name, description: c.description, icon: c.icon, gradient: c.gradient },
      create: c,
    });
  }

  // Tags
  for (const t of tags) {
    await prisma.tag.upsert({
      where: { slug: t.slug },
      update: { name: t.name },
      create: t,
    });
  }

  // Resources + relations
  for (const r of resources) {
    const category = await prisma.category.findUnique({
      where: { slug: r.category },
    });
    if (!category) continue;

    const resource = await prisma.resource.upsert({
      where: { slug: r.slug },
      update: {
        title: r.title,
        tagline: r.tagline,
        description: r.description,
        url: r.url,
        pricing: toPricing(r.pricing),
        featured: r.featured,
        popular: r.popular,
        rating: r.rating,
        views: r.views,
        logoColor: r.logoColor,
        categoryId: category.id,
      },
      create: {
        slug: r.slug,
        title: r.title,
        tagline: r.tagline,
        description: r.description,
        url: r.url,
        pricing: toPricing(r.pricing),
        featured: r.featured,
        popular: r.popular,
        rating: r.rating,
        views: r.views,
        logoColor: r.logoColor,
        createdAt: new Date(r.createdAt),
        categoryId: category.id,
      },
    });

    for (const tagSlug of r.tags) {
      const tag = await prisma.tag.findUnique({ where: { slug: tagSlug } });
      if (!tag) continue;
      await prisma.resourceTag.upsert({
        where: { resourceId_tagId: { resourceId: resource.id, tagId: tag.id } },
        update: {},
        create: { resourceId: resource.id, tagId: tag.id },
      });
    }
  }

  // Admin user — password from SEED_ADMIN_PASSWORD (never commit real passwords)
  const adminPassword = process.env.SEED_ADMIN_PASSWORD;
  if (adminPassword) {
    const passwordHash = await bcrypt.hash(adminPassword, 12);
    await prisma.user.upsert({
      where: { email: "admin@linksresource.com" },
      update: { passwordHash, role: "ADMIN" },
      create: {
        email: "admin@linksresource.com",
        name: "Admin",
        role: "ADMIN",
        passwordHash,
      },
    });
    console.log("Admin user ready: admin@linksresource.com (password from SEED_ADMIN_PASSWORD)");
  } else {
    console.log("Skipped admin seed — set SEED_ADMIN_PASSWORD to create admin user");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
