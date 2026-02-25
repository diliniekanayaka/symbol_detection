# Electriquote (symbol_detection repo)

Electriquote is a production-oriented SaaS scaffold for electrical estimation + project management, built with:

- Next.js (App Router)
- TypeScript
- TailwindCSS
- Prisma + PostgreSQL

## Implemented in this delivery (MVP foundation)

- Authentication API (register/login) with password hashing + JWT session token.
- Multi-organization data model with role memberships and tenant-scoped projects.
- Project, Task, and BoQ API routes with service-layer architecture.
- Prisma schema + SQL migration for organizations, projects, tasks, BoQ versioning, subscriptions, and audit logs.
- Black + yellow Electriquote branding and logo, with routed dashboard pages for Projects, Tasks, and BoQ.

## Run locally

```bash
npm install
npm run prisma:generate
npm run dev
```

Set `DATABASE_URL` for PostgreSQL and optionally `JWT_SECRET`.
