# Glossary Template

Use this template when writing `glossary.md` for a target codebase.

## Sections

### 1. Domain Entity Map

| Entity | Description | Owned By Service | Primary Store | Also Touched By | Key Fields |
|--------|-------------|-----------------|---------------|-----------------|------------|
| User | Person who can authenticate | Auth Service | `users` table | Profile, Billing, Notifications | id, email, role |
| Order | Purchase transaction | Order Service | `orders` table | Cart, Payment, Shipping, Inventory | id, userId, status, total |
| Product | Sellable item | Catalog Service | `products` table | Inventory, Cart, Search | id, sku, price, stock |

### 2. Data Ownership Matrix

| Data Element | Source of Truth | Cache | Replica | Staleness OK? |
|-------------|----------------|-------|---------|---------------|
| User email | Auth DB | Session token | Profile service read replica | No |
| Product price | Catalog DB | Redis cache | Search index | Short TTL (5 min) |
| Order status | Order DB | — | Notification event log | No |

### 3. Critical Business Paths

```
Registration Path:
  1. POST /api/auth/register
  2. Auth Service creates user in `users` table
  3. Auth Service publishes "user.created" event
  4. Profile Service consumes → creates profile in `profiles` table
  5. Notification Service consumes → sends welcome email
  Failure point: step 2 + 4 must be transactional or have reconciler

Purchase Path:
  1. POST /api/cart/checkout
  2. Cart Service → Order Service (create order, status=pending)
  3. Order Service → Payment Service (charge)
  4. Payment success → Order Service (status=confirmed)
  5. Order Service → Inventory Service (reserve)
  6. Order Service → Shipping Service (schedule)
  Failure point: step 3 failing → order canceled, cart released
```

### 4. Bounded Contexts

| Context | Team | Services | Ubiquitous Language |
|---------|------|----------|-------------------|
| Identity & Access | Platform | Auth, Profile | User, Role, Permission, Session, JWT |
| Commerce | Commerce | Catalog, Cart, Order, Payment | Product, SKU, Order, Invoice, Shipment |
| Content | Content | CMS, Search, Media | Article, Tag, Asset, Taxonomy |

### 5. Key Abstractions & Interfaces

| Interface | Defined At | Implementations | Used By |
|-----------|-----------|-----------------|---------|
| `UserRepository` | `src/repositories/interfaces.ts` | `PostgresUserRepo`, `MockUserRepo` | Auth, Profile services |
| `PaymentProvider` | `src/payments/interfaces.ts` | `StripeProvider`, `PaypalProvider` | Order Service |
| `EventBus` | `src/events/bus.ts` | `RabbitMQBus`, `InMemoryBus` | All services |
