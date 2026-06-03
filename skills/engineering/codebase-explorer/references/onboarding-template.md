# Onboarding Template (Graph-First)

Learning paths are interactive graph traces, not reading lists.

## Learning Path Format

Each path is an ordered list of graph nodes that form a complete trace through the system. Clicking a path in the graph explorer highlights each node and edges between them.

```json
{
  "onboardingPaths": {
    "New Engineer": [
      "App.tsx",
      "ProtectedRoute.tsx",
      "UserContext.tsx",
      "apiClient.ts",
      "TicketsRoute",
      "ticketRouting",
      "db/schema.sql"
    ],
    "Frontend": [
      "App.tsx",
      "router.tsx",
      "pages/",
      "components/",
      "hooks/",
      "contexts/"
    ],
    "Backend": [
      "server.ts",
      "routes/",
      "services/",
      "middleware/",
      "db/"
    ],
    "Database": [
      "db/schema.sql",
      "migrations/",
      "models/",
      "queries/"
    ],
    "Authentication": [
      "LoginPage",
      "authApi",
      "AuthContext",
      "ProtectedRoute",
      "oauth/"
    ]
  }
}
```

## Rules for Path Construction

1. Every node in a path must exist in the graph (real file or directory)
2. Consecutive nodes must have a direct edge between them (or be trivially connected)
3. Paths should be 5-10 nodes — long enough to be useful, short enough to scan
4. Each path answers "what would a person in this role need to trace?"
5. Order matters: start at the entry point closest to the user

## What to Learn First (Sidebar List)

Instead of ranking by priority, rank by graph degree:

| Priority | File | Connected | Why |
|----------|------|-----------|-----|
| P0 | `apiClient.ts` | 30 edges | Everything passes through it |
| P0 | `UserContext.tsx` | 22 edges | Auth state for every page |
| P0 | `ProtectedRoute.tsx` | 18 edges | Security boundary |
| P1 | `TicketRouting.ts` | 14 edges | Core business logic |
| P1 | `router.tsx` | 18 edges | Entry point for all routes |
| P2 | `utils.ts` | 11 edges | Shared helpers, low risk |
| P2 | `constants.ts` | 5 edges | Static values, rarely changes |
