# Challenge Format

Challenges prove skill. A concept is not advanced past "Understand" until a challenge is completed. Challenges live in `CHALLENGES/NNNN-name.md`.

## Template

```md
# Challenge: {Name}

## Concept
[[Concept Name]]

## Type
{One of: Build | Explain | Solve | Critique}

## Task
{What the user needs to do. Be specific about the context and constraints.}

## Success Criteria
- {Observable, measurable outcome 1}
- {Observable, measurable outcome 2}
- {Observable, measurable outcome 3}

## Stretch Goal
{Harder variant if the user completes the main task quickly}

## Hints
{Conditional hints — only reveal if the user gets stuck}
```

## Example

```md
# Challenge: Design an MCP Tool

## Concept
[[MCP Tool Calling]]

## Type
Build

## Task
Design and implement an MCP tool that exposes a weather API. The tool should accept a city name and return the current temperature. Use JSON-RPC for the protocol.

## Success Criteria
- The tool registers successfully with an MCP client
- It accepts a city string parameter
- It returns a valid JSON-RPC response with temperature data
- Error handling for unknown cities

## Stretch Goal
Add a second tool that returns a weekly forecast, and demonstrate the client calling both tools in sequence.

## Hints
1. Start by reading the MCP spec for tool definitions
2. The tool definition needs: name, description, inputSchema
3. Remember to handle both success and error responses
```

## Rules

- **One challenge per major concept.** Minor sub-concepts can share a challenge.
- **Match the challenge type to the concept.** Build for implementation skills, Explain for conceptual understanding, Solve for analytical skills, Critique for evaluation skills.
- **Success criteria must be observable.** "The user understands it" is not criteria. "The user explains cache invalidation from memory" is.
- **Stretch goals are optional.** Only include one if there's a natural harder variant. Don't force it.
- **Hints are conditional.** Start with none. Reveal progressively if the user asks or gets stuck.
