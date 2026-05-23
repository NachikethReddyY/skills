---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design that avoids generic AI aesthetics.
version: 1.0.0
category: design
portable: true
---

# Frontend Design

## Purpose

Build distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

## When to Use

Use this skill when:
- Building websites, landing pages, or dashboards
- Creating React components, HTML/CSS/JS interfaces
- Styling or beautifying existing web UI
- Designing web artifacts, posters, or interactive pages
- The user wants creative, non-generic frontend work

Do not use this skill when:
- The task is purely backend logic without UI
- The user explicitly requests generic/standard bootstrap-style designs
- The task is only about functionality with zero design consideration
- Building native mobile apps (not web-based)

## Inputs

- User requirements: component, page, application, or interface to build
- Optional context: purpose, audience, technical constraints
- Framework preference: React, Vue, vanilla HTML/CSS/JS, etc.

## Workflow

1. **Design Thinking Phase** - Before coding, understand context and commit to a BOLD aesthetic direction:
   - **Purpose**: What problem does this interface solve? Who uses it?
   - **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian
   - **Constraints**: Technical requirements (framework, performance, accessibility)
   - **Differentiation**: What makes this UNFORGETTABLE?

2. **Implementation Phase** - Build working code that is:
   - Production-grade and functional
   - Visually striking and memorable
   - Cohesive with a clear aesthetic point-of-view
   - Meticulously refined in every detail

3. **Verification Phase** - Verify against the Quality Bar below.

## Output Format

Functional, production-ready frontend code (HTML/CSS/JS, React, Vue, etc.) that:
- Is complete and runnable
- Has a distinctive, non-generic aesthetic
- Includes all necessary styling and interactive elements

## Frontend Aesthetics Guidelines

- **Typography**: Choose beautiful, unique fonts from Google Fonts. Avoid Arial, Inter, Roboto. Pair distinctive display fonts with refined body fonts. Make unexpected, characterful choices. Always include the Google Fonts import link in HTML/CSS.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables. Dominant colors with sharp accents outperform timid palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only. One well-orchestrated page load with staggered reveals creates more delight than scattered micro-interactions.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, grain overlays.

## Quality Bar

The result is good only if:
- It avoids generic AI aesthetics (no Inter/Roboto, no purple gradients on white, no cookie-cutter layouts)
- There is a clear, intentional aesthetic direction
- Typography choices are distinctive and well-paired
- Color palette is cohesive and bold, not timid
- Layout has character (asymmetry, overlap, or intentional spacing)
- Code is functional and production-grade
- Every design choice feels intentional, not default

## Failure Modes

Avoid:
- Generic font families: Inter, Roboto, Arial, system fonts
- Cliched color schemes: particularly purple gradients on white backgrounds
- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character
- Timid, evenly-distributed color palettes
- Converging on common choices (Space Grotesk, etc.) across generations

## Improvement Loop

If output is weak:
1. Identify which failure mode occurred
2. Strengthen the aesthetic direction constraints
3. Add more specific guidance about differentiation
4. Test with the same prompt to verify improvement
