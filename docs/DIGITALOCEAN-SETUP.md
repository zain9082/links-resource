# Deploy Links Resource on DigitalOcean App Platform

Follow these steps in the DigitalOcean dashboard (you are on **Step 1: Choose source**).

---

## Step 1 — Source (you are here)

| Field | Value |
|-------|--------|
| Source | **Git repository** |
| Provider | **GitHub** |
| Repository | `zain9082/links-resource` |
| Branch | `main` |
| Source directory | *(leave empty — project is at repo root)* |

Click **Next**.

---

## Step 2 — Configure resources

DigitalOcean should auto-detect **Next.js**. Confirm:

| Setting | Value |
|---------|--------|
| Resource type | **Web Service** |
| Name | `web` or `links-resource` |
| Build command | `npm run build` |
| Run command | `npm start` |
| HTTP port | `8080` |
| Instance size | **Basic** → `$5/mo` (1 vCPU, 512 MB) or higher |

### Add PostgreSQL database

1. Click **Add Resource** → **Database**
2. Engine: **PostgreSQL 16**
3. Plan: **Dev** (~$7/mo) for testing, **Production** for live
4. Name: `db`

DigitalOcean will auto-link `DATABASE_URL` to your web service.

---

## Step 3 — Environment variables

In the **web** component → **Environment Variables**, add:

| Key | Value | Encrypt? |
|-----|--------|----------|
| `NODE_ENV` | `production` | No |
| `NODE_MODULES_CACHE` | `false` | No |
| `AUTH_TRUST_HOST` | `true` | No |
| `NEXT_PUBLIC_SITE_URL` | `https://YOUR-APP.ondigitalocean.app` | No |
| `AUTH_SECRET` | Run locally: `openssl rand -base64 32` | **Yes** |
| `SEED_ADMIN_PASSWORD` | Your strong admin password | **Yes** |

`DATABASE_URL` is injected automatically when you add the database.

**After first deploy**, update `NEXT_PUBLIC_SITE_URL` to your real domain (e.g. `https://linksresource.com`).

---

## Step 4 — Pre-deploy job (database schema)

Add a **Job** component (or use App Spec):

| Setting | Value |
|---------|--------|
| Kind | **PRE_DEPLOY** |
| Name | `db-push` |
| Run command | `npx prisma db push` |
| DATABASE_URL | `${db.DATABASE_URL}` |

Or import the full spec from `.do/app.yaml` in **Settings → App Spec**.

---

## Step 5 — Deploy

Click **Create Resources** / **Launch App**.

First build takes ~5–10 minutes. Watch **Activity** tab for logs.

---

## After deploy — seed admin user (one time)

1. Open your app → **Console** (or run a one-off job)
2. Run:

```bash
npx tsx prisma/seed.ts
```

3. Admin login:
   - Email: `admin@linksresource.com`
   - Password: your `SEED_ADMIN_PASSWORD`

---

## Custom domain (linksresource.com)

1. App → **Settings** → **Domains**
2. Add `linksresource.com` and `www.linksresource.com`
3. Update DNS at your registrar (A/CNAME records shown by DO)
4. Update `NEXT_PUBLIC_SITE_URL` to `https://linksresource.com`
5. Redeploy

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Build fails on Prisma | Ensure `NODE_MODULES_CACHE=false` |
| Auth doesn't work | Set `AUTH_SECRET` and `AUTH_TRUST_HOST=true` |
| Database connection error | Check database is in same region (`lon`) |
| 502 on start | HTTP port must be `8080` (DO sets `PORT` automatically) |

---

## Files in this repo

- `.do/app.yaml` — full App Platform spec (import or use with `doctl`)
- `docker-compose.yml` — local dev only (not used on DigitalOcean)

Local dev still uses Docker Postgres on port **5433**:

```bash
npm run db:setup
npm run dev
```
