# Onboarding Guide Template

Use this template when writing `onboarding.md` for a target codebase.

## Sections

### 1. Learning Path (Priority Order)

Present as a ranked table:

| Priority | Area | Why Learn First | Files to Read | Estimated Time |
|----------|------|-----------------|---------------|----------------|
| P0 | Core Domain Model | Everything depends on it | `src/domain/` | 30 min |
| P0 | Entry Points & Routing | All requests enter here | `src/router/`, `src/server.ts` | 20 min |
| P1 | Service Layer | Business logic lives here | `src/services/` | 1 hr |
| P1 | Data Layer | Understanding the schema | `src/db/schema/`, migrations | 45 min |
| P2 | Config & DevOps | Rarely changes | `config/`, `Dockerfile` | 15 min |
| P2 | Legacy Modules | Deprecated, being removed | `src/legacy/` | Skip |

### 2. Top 5 Files to Read First

| # | File | Why |
|---|------|-----|
| 1 | `src/main.ts` | Application bootstrap sequence |
| 2 | `src/router/index.ts` | All API endpoints in one place |
| 3 | `src/domain/model.ts` | Core entities and relationships |
| 4 | `src/middleware/auth.ts` | Security boundary |
| 5 | `src/db/schema.sql` | Full data model |

### 3. What You Can Safely Ignore

| Area | Reason | When to Revisit |
|------|--------|-----------------|
| `scripts/` | Build tooling, not runtime code | When modifying CI |
| `vendor/`, `node_modules/` | Third-party dependencies | When debugging dependency issues |
| `docs/` (non-code) | May be outdated | For reference only |
| `legacy/` | Deprecated modules | When removing them |
| Generated code (protos, types) | Machine-written | Only to understand interfaces |

### 4. How Requests Flow (Visual Summary)

```
[Browser] → [CDN] → [Load Balancer] → [API Gateway]
                                           │
                                    [Auth Middleware]
                                           │
                              ┌────────────┼────────────┐
                              ▼            ▼            ▼
                         [Service A]  [Service B]  [Service C]
                              │            │            │
                              ▼            ▼            ▼
                         [(DB A)]    [(DB B)]    [(Queue)] → [Worker]
```

### 5. Local Development Setup

```bash
# Quick start
cp .env.example .env
docker compose up -d
npm install
npm run dev
```

### 6. Testing Strategy

| Test Type | Location | Run Command | Coverage Target |
|-----------|----------|-------------|-----------------|
| Unit | `src/**/*.test.ts` | `npm test` | 80%+ |
| Integration | `tests/integration/` | `npm run test:integration` | Key paths |
| E2E | `tests/e2e/` | `npm run test:e2e` | Critical flows |
