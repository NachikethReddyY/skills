# Teach-Back Format

Teach-backs are the final exam. If the user can explain a concept at multiple depths without notes, they truly understand it. Teach-backs live in `TEACH-BACKS/concept-name.md`.

## Template

```md
# Teach-Back: {Concept}

## 30 Seconds
{The elevator pitch — what it is, why it matters, who should care. One paragraph.}

## 5 Minutes
{The overview — key concepts, how it works, when to use it, when not to use it. Enough for someone to understand the basics and decide if they need to go deeper.}

## 15 Minutes
{The deep dive — mechanics, tradeoffs, edge cases, history, relationship to other concepts. Enough for someone to start using it competently. Include `[[wiki-links]]` to related concepts.}
```

## Example

```md
# Teach-Back: JSON-RPC

## 30 Seconds
JSON-RPC is a lightweight remote procedure call protocol that uses JSON for encoding. A client sends a request with a method name and parameters, and the server responds with a result or error. It's the foundation of [[MCP]].

## 5 Minutes
JSON-RPC is a transport-agnostic protocol for calling remote functions over JSON. A request has three fields: `jsonrpc` (version, always "2.0"), `method` (the function to call), and `params` (arguments). A response has `jsonrpc`, either `result` or `error`, and an `id` matching the request.

It's simpler than [[REST]] — no HTTP verbs, no resource modeling, no status codes beyond the transport layer. It's used in [[MCP]], [[LSP]], and many editor extensions.

## 15 Minutes
JSON-RPC 2.0 is defined in a single-page spec. Key details:

- Requests are idempotent — the `id` field matches request to response. Batch requests send an array of calls with one response per `id`.
- Error codes are standardized: -32700 (parse), -32600 (invalid request), -32601 (method not found), -32602 (invalid params), -32603 (internal). Custom codes start at -32000.
- Notifications are requests without an `id` — the server doesn't respond.

Why JSON-RPC over REST for [[MCP]]? MCP needs a bidirectional channel where the server can also initiate calls (tools, notifications). REST is inherently client-driven. JSON-RPC's symmetric request-response model fits agent communication better.
```

## Rules

- **Every major concept gets a teach-back.** Schedule it for Day 7 of the spaced review cycle.
- **Don't write it for the user.** The user must produce the teach-back from memory. The agent may ask clarifying questions but should not supply content.
- **Three depths are mandatory.** 30s, 5m, 15m. Each exercises different retrieval paths.
- **Grade the teach-back.** After the user produces it, evaluate: Was it accurate? Complete? Did it connect to other concepts? Update the skill graph accordingly.
- **Use `[[wiki-links]]`.** The teach-back is itself a knowledge artifact — it should link to related concepts in the workspace.
