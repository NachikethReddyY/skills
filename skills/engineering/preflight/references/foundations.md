# Foundation Decisions

Lock these nine decisions **before** generating implementation plans or code. Each area uses the same decision loop (see SKILL.md Phase 0).

Record the user's final choice for each area in the plan under a `## Foundations` section.

---

## 1. Database Schema

**Why:** Plan data relationships manually (Markdown tables, ER diagrams, or pseudo-code) before letting AI generate tables. Unplanned generation tends to produce extraneous, bloated structures.

**Ask:**
- What entities exist and how do they relate?
- What are ownership boundaries (user-owned vs system-owned)?
- Any soft deletes, audit fields, or multi-tenancy?

**If unknown:** Research the domain and similar apps; propose 2–3 schema sketches.

**Options to compare:** normalized relational vs document; single DB vs read replicas; migration tool (Prisma, Drizzle, raw SQL).

---

## 2. TypeScript Types

**Why:** Define data shapes and API interfaces early so client and server stay consistent.

**Ask:**
- Shared types package or colocated?
- Where do API request/response types live?
- Generated types from schema (Prisma, OpenAPI) or hand-written?

**If unknown:** Inspect existing codebase conventions; propose alignment options.

**Options to compare:** monorepo shared `types/` vs duplicate DTOs; codegen vs manual; strict `unknown` at boundaries vs loose `any`.

---

## 3. Validation Strategy

**Why:** Pick one validation approach (e.g. Zod or Standard Schema–compliant libraries) to prevent drift between client, server, and forms.

**Ask:**
- Single library everywhere or split client/server?
- Validate at API boundary only or also in UI forms?

**If unknown:** Research stack defaults (Next.js, tRPC, etc.).

**Options to compare:** Zod, Valibot, ArkType, Yup; Standard Schema adapters; schema-inferred types vs separate validators.

---

## 4. Routing Structure

**Why:** Map routes (public, private, admin) in an outline first to keep scope manageable.

**Ask:**
- Which routes are public vs authenticated vs role-gated?
- File-based routing (App Router, Remix) or explicit route config?
- API routes vs page routes separation?

**If unknown:** Draft a route tree outline from the feature description.

**Options to compare:** flat vs grouped segments; middleware-based auth vs layout guards; BFF routes vs direct API.

---

## 5. Auth Flow

**Why:** Implement authentication and access control early — it is deeply tied to most database tables and data ownership.

**Ask:**
- Session vs JWT? OAuth providers? Email/password?
- Where is auth enforced (middleware, layout, API)?
- Row-level ownership rules?

**If unknown:** Research framework recommendations and security tradeoffs.

**Options to compare:** NextAuth/Auth.js, Clerk, Supabase Auth, custom JWT; cookie sessions vs bearer tokens; RBAC vs simple user-owned rows.

---

## 6. CSS Methodology

**Why:** Establish consistent styling rules so AI does not mix Tailwind, CSS modules, styled-components, and inline styles in one feature.

**Ask:**
- Existing project convention?
- Utility-first (Tailwind) vs component-scoped (CSS modules) vs design tokens?

**If unknown:** Scan `package.json` and existing components; default to project convention.

**Options to compare:** Tailwind + design tokens; CSS modules; vanilla-extract; styled-components; BEM naming for plain CSS.

---

## 7. UI Framework

**Why:** Select a component system to avoid redundant UI (e.g. building date pickers from scratch when the stack already has one).

**Ask:**
- Design system in use (shadcn, MUI, Chakra, Radix primitives)?
- Headless vs styled components?

**If unknown:** Match repo dependencies; propose minimal additions.

**Options to compare:** shadcn/ui + Radix; full MUI; headless Radix only; no library (custom primitives).

---

## 8. Client–Server Communication

**Why:** Decide the primary pattern so AI does not mix incompatible approaches (REST + tRPC + Server Actions in one flow).

**Ask:**
- Primary data-fetch pattern for this feature?
- Mutations: form actions, API routes, RPC?

**If unknown:** Research framework idioms for the stack in use.

**Options to compare:** REST API routes; tRPC; GraphQL; React Server Components + Server Actions; RPC (Connect, etc.).

---

## 9. Folder Structure

**Why:** Define where files belong so the codebase stays organized instead of random dumps.

**Ask:**
- Feature-based vs layer-based folders?
- Colocation rules (components next to routes vs central `components/`)?
- Where do tests, hooks, and utils live?

**If unknown:** Mirror existing repo structure; document one feature as a template.

**Options to compare:** `app/feature/` colocation vs `src/components` + `src/lib`; shared vs feature-local utils; barrel exports vs direct imports.
