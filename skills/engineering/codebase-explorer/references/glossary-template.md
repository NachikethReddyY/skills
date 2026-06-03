# Glossary Template (Graph-First)

The glossary is computed from graph analysis, not written manually.

## Domain Entity Graph

Entities are nodes in the graph connected to the files that define and use them:

```text
User
  ├── defined in: UserContext.tsx (state shape)
  ├── created by: AuthPage → authApi → /api/auth/register
  ├── consumed by: ProtectedRoute, UserDashboard, SettingsPage
  └── stored in: users table (PostgreSQL)

Ticket
  ├── defined in: types.ts (interface/type definition)
  ├── created by: TicketsPage → ticketRouting → ticketsDb
  ├── consumed by: TicketList, TicketDetail, TicketStatus
  └── stored in: tickets table (PostgreSQL)
```

## Data Ownership Graph

Render as edges in the interactive graph:

| Entity | Owned By (file) | Stored In (file) | Touched By (files) |
|--------|-----------------|------------------|--------------------|
| User | `UserContext.tsx` | `db/schema.ts` (users table) | authApi, ProtectedRoute, profileApi |
| Ticket | `types.ts` | `db/schema.ts` (tickets table) | ticketRouting, ticketPermissions, mailer |
| Assignment | `ticketRouting.ts` | `db/schema.ts` (assignments table) | chooseAssignee, deterministicRoute, routeWithLuminaModel |
| Notification | `mailer.ts` | `db/schema.ts` (notifications table) | ticketRouting, ticketPermissions |

## Critical Business Paths (as Graph Traces)

```
Registration Path:
  App.tsx → router.tsx → RegisterPage
    → authApi.register() → apiClient.post('/api/auth/register')
    → AuthContext.login() → UserContext.setUser()
    → ProtectedRoute.unlock()
    → App re-renders (authenticated)

Ticket Purchase Path:
  TicketsPage → TicketsRoute → ticketRouting
    → ticketPermissions.canCreate()
    → PaymentPage → paymentApi → apiClient.post('/api/payments')
    → ticketRouting.create() → ticketsDb.insert()
    → mailer.sendNotification()
```

## Bounded Contexts (as Graph Clusters)

The interactive graph groups nodes by visual clustering:

| Context | Color | Contains |
|---------|-------|----------|
| Auth | amber | LoginPage, RegisterPage, authApi, AuthContext, ProtectedRoute, oauth/ |
| Tickets | green | TicketsPage, TicketsRoute, ticketRouting, ticketPermissions, ticketsDb |
| Users | blue | UserDashboard, UserSettings, profileApi, UserContext |
| Notifications | purple | mailer, NotificationSettings, inAppNotifications |
