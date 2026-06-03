# Architecture Template (Graph-First)

The architecture is represented as an interactive graph, not a document.

## Nodes to Extract

| Type | Examples | Color | What to Capture |
|------|----------|-------|-----------------|
| Component | `UserDashboard.tsx`, `LoginPage.tsx` | blue | File path, key functions, props |
| Service | `apiClient.ts`, `authApi.ts` | purple | Methods, endpoints, config |
| Route | `router.tsx`, `tickets.js` | green | Path patterns, handlers, middleware |
| Context | `UserContext.tsx`, `AuthContext.tsx` | amber | Provider, consumers, state shape |
| Util | `utils.ts`, `helpers.ts`, `constants.ts` | gray | Exports, usage count |
| Config | `package.json`, `tsconfig.json` | red | Dependencies, settings |
| DB | `schema.sql`, `models.ts`, `queries.ts` | cyan | Tables, indexes, migrations |
| Hook | `useCurrentUser.ts`, `useTicketData.ts` | pink | Returns, which contexts used |

## Edge Types

| Type | Style | Meaning |
|------|-------|---------|
| import | solid | File A imports File B |
| route | dashed | Route handler delegates to service |
| context | dotted | Component consumes a context |
| api | dash-dot | File calls an API endpoint |
| db | solid (thick) | File accesses a database |

## Request Flow Graph

Not a linear trace — a subgraph showing the actual path:

```text
LoginPage ──import──→ authApi ──import──→ apiClient
   │                      │
   └──use──→ AuthContext  └──use──→ AuthProvider
                │
                └──consumed-by──→ ProtectedRoute
                                     │
                                     └──import──→ apiClient
```

## Hotspot Identification

Rank nodes by total degree (inbound + outbound):

```text
apiClient.ts:      18 inbound + 12 outbound = 30  ← CORE
UserContext.tsx:    14 + 8 = 22                    ← CORE
ProtectedRoute:    12 + 6 = 18                    ← CORE
router.tsx:         4 + 14 = 18                   ← CORE
TicketRouting:      8 + 6 = 14                    ← IMPORTANT
utils.ts:           1 + 10 = 11                   ← IMPORTANT
```

## Critical Path Traces

Extract complete source-to-sink paths:

```text
Auth Flow:
  LoginPage → authApi → apiClient → /api/auth/login
    → AuthContext.setUser() → ProtectedRoute.enableAccess()
    → App re-renders with authenticated routes

Ticket Creation:
  TicketsPage → TicketsRoute → ticketRouting.chooseAssignee()
    → deterministicRoute() | routeWithLuminaModel()
    → ticketPermissions.canCreate() → mailer.sendNotification()
    → ticketsDb.insert()
```

## Circular Dependency Detection

When A imports B, B imports C, and C imports A:

```text
userService.ts → userController.ts → userRoutes.ts → userService.ts
```

Record each cycle with its file paths and the specific import lines.
