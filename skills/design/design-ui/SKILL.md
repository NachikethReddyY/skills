---
name: design-ui
description: Create distinctive, production-grade frontend interfaces with high design quality across web and mobile (React Native). Use this skill when the user asks to build web components, pages, artifacts, posters, applications, or React Native mobile UIs (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, React Native screens, or when styling/beautifying any UI). Generates creative, polished code that stacks small intentional details — press states, subtle animations, haptics, keyboard integration, and crafted loading/empty states — to achieve a premium feel.
version: 2.0.0
category: design
portable: true
---

# Frontend Design

## Purpose

Build distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices. A premium app is not defined by one big feature but by the sum of many small, intentional decisions — press feedback, motion, tactile response, keyboard integration, and thoughtful empty states.

## Foundational Design Principles

These principles, distilled from platform Human Interface Guidelines, frame every design decision. Use them as a lens when designing and evaluating interfaces.

### Purpose
Design is making something with intention. Every feature asks for the user's **time, attention, and trust** — valuable things you can't afford to waste. Before sketching or coding, ask: does this have purpose? Choosing what **not** to include is often more important than what to build.

**Create value.** At every stage, ask what the product is for and whether the design serves that purpose. **Keep focused** — prioritize the most important features by aligning with how people actually want to use the product. **Find new ways to solve the problem** — investigate existing solutions without re-creating them; define what sets your product apart.

### Agency
Put people in control. Let them do things their way instead of funneling them down a predetermined path. Offer **forgiveness** — make it easy to undo actions, confirm destructive operations. Agency gives people confidence to explore freely.

**Stay out of the way.** Get people directly to the task or content at hand — the best designs are unobtrusive and present when needed. **Give freedom to explore** — avoid locking people into specific flows or modes; make guided flows easy to skip or escape. **Help recover from mistakes** — build forgiveness in, make reversing actions effortless so people feel safe to explore.

### Responsibility
Act in people's best interest. Privacy is a human right — only request data when necessary, be transparent about its use. **Anticipate misuse**, especially with AI capabilities. Add safeguards (previews, confirmations, disclaimers). Remove features entirely if risks outweigh value. Design for longevity — use standardized patterns, make elements repairable/updatable, and respect the user's investment in your product.

**Be transparent** about what your product does and why from the very first interaction. Provide clear rationale when asking for permission. **Keep information safe** — only collect what's needed, handle it with care, and put protections in place to prevent abuse.

**Privacy patterns:** Ask for permission **in context**, not at launch — wait until the user engages a feature that needs the data. Write brief, active-voice purpose strings ("The app records at night to detect snoring" not "Microphone access needed for better experience"). Process data on-device when possible. Use passkeys over passwords; store sensitive data in keychain, never plaintext. Prefer system auth (Face ID, Touch ID, WebAuthn) over custom login forms. Clearly indicate when recording, location sharing, or data collection is active — never obscure system indicators.

### Familiarity
Build on what people already know. Use **metaphor** (trash = delete) that draws on real-world experience. Be **consistent** — things that look the same should behave the same. Consistent placement helps users predict where controls will be. **Provide clear feedback** — show when controls are available, indicate when content changes, use system patterns for alerts and choices.

**Balance with brand expression.** Standards create comfort, but rigid adherence can stifle identity. A great design system provides structure without erasing the brand's unique visual energy. Know when to intentionally deviate from platform conventions to express character — as long as the deviation serves a purpose and doesn't harm usability.

### Flexibility
People use your design in unique ways across different contexts. Support the full range of devices (touch on phone, pointer on laptop, hands-free in car). Cater to diverse abilities — age, language, expertise, accessibility needs. Let people personalize controls and layouts.

**Design for everyone** — treat accessibility as a priority from the start. **Preserve context** across platforms — keep content and controls in consistent positions, use natural animations for transitions. **Consider varied input methods** — voice, touch, keyboard, pointing devices — more input modes means more people can use your product their way. **Approach every platform with intention** — software should feel polished and at home wherever it runs.

**Accessibility is not optional.** Support multiple senses (visual, auditory, haptic) so no single mode is required. Adopt Accessibility APIs rather than reimplementing them. Test with assistive technologies. Provide customization for text size, colors, and layout density. Every accessibility improvement makes the product better for all users.

### Simplicity
Strip away the unnecessary so the core purpose shines. Simplicity is **not** minimalism — burying all features in one place is not simple. Be **concise** (plain language, fewer steps) and **clear** (strong hierarchy using order, spacing, and contrast). Every element should earn its place. **Establish hierarchy** — when form and function are readily apparent, people know how to reach a desired outcome.

**Obsessive reduction** — start by cutting non-essential elements to avoid decision paralysis. Only reveal complexity when absolutely necessary. **The three-tap rule** — the most important actions should be available within three taps or clicks. Optimize for the common, frequent use cases.

### Craft
Attention to detail that tells people you care. Beautiful fonts across devices, thoughtful colors that adapt light/dark, responsive animations with natural feedback, reliable foundations.

**Quality sets the tone** — every element shows people how much you care. Be deliberate with each decision: stunning visuals, smooth animations, precise wording. **Experiment and iterate** — prototype early, try new approaches, discard what doesn't work. Test in real-world settings. **Maintain your craft** — shipping isn't the finish line. Keep the interface current with latest platform capabilities and keep the quality bar high. Design is an ongoing commitment.

### Delight
Not confetti or tacked-on flourishes. Delight is the **natural result** of getting all the other principles right.

**Identify the emotion you want to inspire** — a fitness app might energize, a meditation app might calm, a game might thrill. **Create defining moments** — every interaction is a chance to show what your design stands for. **Don't mistake delight for decoration** — people are trying to accomplish a task; don't let pursuit of delight get in the way of purpose. **Consider the whole** — delight is the culmination of everything: the freedom to act, safety to explore, comfort of familiar metaphors, flexibility across contexts. When you design with intent, focus, and care, the result is naturally delightful.

## When to Use

Use this skill when:
- Building websites, landing pages, or dashboards
- Creating React components, HTML/CSS/JS interfaces
- Building React Native mobile app screens and components
- Styling or beautifying existing web or mobile UI
- Designing web artifacts, posters, or interactive pages
- The user wants creative, non-generic frontend work

Do not use this skill when:
- The task is purely backend logic without UI
- The user explicitly requests generic/standard bootstrap-style designs
- The task is only about functionality with zero design consideration
- Building native mobile apps using Swift/Kotlin (use when React Native instead)

## Inputs

- User requirements: component, page, application, or interface to build
- Optional context: purpose, audience, technical constraints
- Target platform: web (React, Vue, vanilla), mobile (React Native), or both
- Framework preference: React, Vue, vanilla HTML/CSS/JS, React Native, Expo, etc.
- Performance budget: any speed/weight constraints

## Workflow

1. **Design Thinking Phase** — Before coding, understand context and commit to a BOLD aesthetic direction. Run each decision through the Foundational Design Principles above:
   - **Purpose**: What problem does this solve? Who uses it? Does every feature earn its place, or does it waste the user's time/attention/trust?
   - **Agency & Forgiveness**: Where does the user have control? Can they undo mistakes? What happens if they go off the intended path?
   - **Safety & Responsibility**: Could any feature be misused or cause harm? How does the UI protect privacy and prevent errors?
   - **Familiarity & Consistency**: What metaphors or conventions can you borrow? Do elements that look the same behave the same?
   - **Flexibility & Accessibility**: What contexts will people use this in? How does it adapt across devices and abilities?
   - **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian
   - **Constraints**: Technical requirements (framework, performance, accessibility)
   - **Narrative & Storytelling**: What story does this interface tell? How does every visual choice — imagery, motion, layout — contribute to a cohesive narrative that communicates value?
   - **Brand Expression vs Convention**: Where does the design follow platform conventions for comfort, and where does it intentionally break away to express brand identity? Is the design a unique "place" people want to inhabit, not just a logical tool?
   - **Strategic Rule-Breaking**: Has the design language become predictable or boring? Is there an opportunity for a calculated, bold shift that revitalizes user perception — or is the current aesthetic still fresh enough to keep?
   - **Brand Ethos & Values**: What does this product stand for beyond its features? What feeling or lifestyle does it enable? Connect with users through a shared philosophy, not just utility.
   - **Differentiation**: What makes this UNFORGETTABLE? Define a simple, bold visual signature that makes the app instantly recognizable.
   - **Three Core Navigation Questions**: Can a user immediately answer "Where am I?", "What can I do?", and "Where can I go from here?" — if not, simplify the navigation structure until they can.
   - **Form Follows Function**: Start with constraints, ergonomics, and user goals — don't begin with styling. Define the functional requirements deeply enough and the form emerges naturally.
   - **Muscle Memory**: Can key actions become intuitive through repetition? Design for gradual learning — major UX changes should be introduced progressively so users build muscle memory over time.

2. **Implementation Phase** — Build working code that is:
   - Production-grade and functional
   - Visually striking and memorable
   - Cohesive with a clear aesthetic point-of-view
   - Meticulously refined in every detail
   - Polished with micro-interactions (press states, motion, haptics where applicable)

3. **Polish & Refinement Phase** — Layer on the premium details that separate a good app from a great one:
   - Add press-state feedback (scale, opacity, or spring animations on every tappable element)
   - Introduce subtle motion (cross-fades, staggered reveals, native transitions)
   - Integrate haptic feedback for key interactions (platform-permitting)
   - Handle keyboard behavior gracefully (dismissal, avoidance, animated follow)
   - Craft loading and empty states as intentional design moments
   - Review against all 8 Foundational Design Principles — does every decision serve a purpose, give agency, feel familiar, etc.?

4. **Verification Phase** — Verify against the Quality Bar below.

## Output Format

Functional, production-ready frontend code (HTML/CSS/JS, React, Vue, React Native, etc.) that:
- Is complete and runnable
- Has a distinctive, non-generic aesthetic
- Includes all necessary styling and interactive elements
- Implements the premium polish elements appropriate to the platform

## Frontend Aesthetics Guidelines

Apply these guidelines through the lens of the Foundational Design Principles — every aesthetic choice should serve the purpose, feel familiar yet fresh, and simplify rather than complicate.

- **Typography**: Choose beautiful, unique fonts from Google Fonts. Avoid Arial, Inter, Roboto. Pair distinctive display fonts with refined body fonts. Make unexpected, characterful choices. Always include the Google Fonts import link in HTML/CSS. Prefer system text styles (title, body, caption, headline) that form a clear hierarchy and scale proportionately when users adjust their reading size. Avoid Ultralight/Thin weights; prefer Regular, Medium, Semibold, or Bold. Minimize number of typefaces per interface.

  **Typographic Scale**: Define a modular type scale using a ratio — 1.25 (perfect fourth) or 1.333 (perfect fifth). 6-step example: Display (2.027rem), H1 (1.802rem), H2 (1.602rem), H3 (1.424rem), Body (1rem), Small (0.889rem), Caption (0.79rem). Assign line-height per tier — headings 1.0–1.2, body 1.5–1.7, caption 1.3–1.4. Set letter-spacing tighter for larger text, looser for smaller. Store as design tokens / CSS custom properties. On web, use `clamp()` for fluid type: `font-size: clamp(1rem, 0.5rem + 2vw, 2rem)`. Test every size at 200% zoom for no truncation.

  **Font Loading & Performance**: Preload critical fonts via `<link rel="preload">` with `crossorigin`. Use `font-display: swap` in `@font-face` so fallback text renders immediately then swaps. Subset fonts to needed glyph ranges. Prefer variable fonts (single file, multiple weights). For Google Fonts, append `&display=swap` and limit to 2–3 families. Use `size-adjust` in `@font-face` to normalize fallback metrics and prevent layout shift (CLS).
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables. Dominant colors with sharp accents outperform timid palettes. Prefer **semantic colors** named after their purpose (label, background, separator) rather than their appearance — they auto-adapt to light/dark mode, contrast settings, and accessibility. Avoid hard-coding color values. For Dark Mode, do **not** simply invert colors — adjust hues and saturation so the palette feels refined in both modes, avoiding harsh high-contrast opposites. Test every color in both light and dark environments. A restrained monochrome palette can reinforce a cohesive "monolith" feel — consistent material integrity keeps focus on form over decoration.

  **Accessibility: Color Contrast & Control Sizes**
  Color contrast is measurable. Every text element must meet minimum contrast ratios for legibility.
  - **WCAG AA minimums**: Body text (<18px): **4.5:1**. Large text (≥18px): **3:1**. Bold text ≥18px: **3:1**.
  - If your palette doesn't meet these, provide an **Increased Contrast** variant that does.
  - Thin/ultralight font weights need larger sizes to pass contrast ratios. Prefer Regular/Medium for body, Semibold/Bold for headings.
  - Test every text+background pair in both light and dark modes. A passing ratio in light may fail in dark.
  - Use a contrast calculator (WebAIM, APCA) to verify during design.

  **Minimum tap target sizes**:
  | Context | Default | Absolute minimum |
  |---------|---------|------------------|
  | Touch (mobile) | 44×44px | 28×28px |
  | Pointer (desktop) | 28×28px | 20×20px |
  - Spacing between controls is as important as size. Add ~12px padding around bordered elements, ~24px around borderless ones.
  - Never rely on color alone to convey state — pair with shapes, icons, or text labels (green circle + checkmark, red octagon + X).
  - For data viz: allow users to customize chart colors so they can adapt to their needs.
  - Test with color blindness simulators (devtools, extensions) — red-green and blue-orange pairs are most problematic.
- **Motion**: Mirror real-world physics — weight, momentum, friction, scroll bounce make interfaces feel alive and intuitive. Use animated transitions to create **spatial continuity**, helping users map where they are within the app (the interface should feel like a coherent space, not disconnected screens). Prioritize CSS-only for performance. One well-orchestrated page load with staggered reveals creates more delight than scattered micro-interactions. Use purposeful video or movement to re-engage users after long text sections and guide them naturally down the page — never animate just for the sake of it.

  **Motion Principles** (apply across GSAP, Framer Motion, CSS animations):
  - **Purposeful** — every animation must serve a function: convey status, provide feedback, guide attention, or enrich the experience. If removing it doesn't change understanding, cut it. Gratuitous motion distracts and can cause physical discomfort.
  - **Gesture-aligned** — motion should follow user expectations and gestures. If someone reveals a panel by sliding it down, they expect to dismiss it by sliding it down, not sideways. Realistic feedback motion helps people understand how things work.
  - **Brief & Precise** — micro-interactions: 100–200ms. Element transitions: 200–300ms. Page transitions: 300–400ms. Nothing over 500ms absent a deliberate reason. Short, precise animations feel lightweight and unobtrusive.
  - **Cancellable** — never force people to wait for an animation to complete before they can act, especially if they see it repeatedly. Let them interrupt or skip.
  - **Optional** — never use motion as the only way to convey information. Respect `prefers-reduced-motion`. When Reduce Motion is active: tighten animation springs to reduce bounce, track animations to gestures directly, avoid z-axis depth changes, replace movement transitions with fades, and avoid animating into/out of blurs.
  - **Physics-based** — use spring curves (high stiffness, low damping), not linear transitions or ease-in-out. Real-world momentum and friction make interfaces feel alive, not mechanical.

  **Implementation**:
  | Pattern | GSAP | Framer Motion | CSS |
  |---------|------|---------------|-----|
  | Staggered reveals | `gsap.fromTo(els, {opacity:0,y:20}, {stagger:0.05})` | `staggerChildren: 0.05` | `transition-delay` per child |
  | Shared-element / layout | `Flip` plugin | `layoutId` prop | `view-transition-api` |
  | Scroll-triggered | `ScrollTrigger` plugin | `useInView` + `whileInView` | `IntersectionObserver` |
  | Morph / path animation | `MorphSVGPlugin` | `motion.path` | SMIL / SVG animations |
  | Spring physics | `gsap.to(el, { ease: "back.out(1.7)" })` | `type: "spring", stiffness: 300, damping: 20` | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
  | Timeline sequencing | `gsap.timeline()` | `useAnimation()` + sequence | `@keyframes` + animation-delay |
  | Scroll-driven (native) | ScrollTrigger + matchMedia | `useInView` + thresholds | `animation-timeline: view()` |
  | Text reveal | `SplitText` plugin | `motion.span` stagger | CSS `@keyframes` per word via `--i` |

  **Advanced CSS patterns:**
  - **View Transitions API** — cross-page shared-element morphs for MPAs: `@view-transition { navigation: auto; }` + `view-transition-name` on elements. Eliminates hard page cuts in traditional multi-page sites.
  - **CSS Scroll-Driven Animations** — off-main-thread scroll reveals: `animation-timeline: view(); animation-range: entry 0% entry 35%`. No JS needed for scroll-linked entrance effects.
  - **CSS `linear()` easing** — native spring curves without JS: use `linear()` function for realistic overshoot on press states, card hover, toggles. Generate via linear-easing-generator.netlify.app.
  - **IntersectionObserver + stagger** — universal scroll-triggered reveals at 97%+ browser support. Use `threshold: 0.15, rootMargin: '0px 0px -50px'` + `setTimeout` stagger per element index.
  - **FLIP technique** — animate layout changes CSS transitions can't handle: measure First/Last bounds, Invert with transform, Play with WAAPI `element.animate()`. The engine behind Framer Motion `layout` and GSAP `Flip`.
- **Spatial Composition**: Confident use of white space to let content breathe. Layouts grounded in a grid system but with experimental, staggered, or masonry arrangements — structured yet exploratory. Use mathematical ratios like the golden ratio for spacing and proportions to create subconscious visual harmony. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density. When stuck on layout, return to Swiss Design fundamentals: clarity, objectivity, grid-based organization.
- **Backgrounds & Visual Details**: Humans evolved to read the world through shading, reflections, and light variations — interfaces that incorporate these natural cues (gradients, shadows, translucency) feel more comfortable than completely flat, sterile designs. Use multi-color gradients strategically (like Instagram's light-reflection technique) to create a distinct, vibrant visual language rather than simple single-color shading. Gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, grain overlays.
- **Marketing Moments & Narrative Storytelling**: Incorporate large, impactful visual moments (hero sections, 3D renders, full-bleed imagery) with smooth transitions to tell a story and emphasize your brand or product. Don't rush users to content — use immersive narrative sequences to build understanding and desire. Every visual asset should contribute to the story.
- **Squircle & Continuous Curvature**: Use true superellipse ("squircle") geometry instead of basic rounded rectangles for icons, cards, and containers. Standard `border-radius` has a hard breakpoint where the straight edge meets the circular corner; a squircle has G2 continuity — a constantly changing radius that produces a seamless, organic curve. Humans inherently prefer curved forms (perceived as safer, less threatening). Curves also guide the eye toward content center rather than pulling focus to corners. Mirror the physical curvature of the device hardware in your UI for systemic cohesion. Use corner smoothing tools (Figma's corner smoothing, `squircle-js`, CSS `mask-border`) to apply consistent curvature across all components. The effect is most noticeable with larger radii (>12px for icons).
- **Monolith Unity**: The interface should read as one cohesive, solid object — not a collection of disjointed panels, cards, and sections. Use continuous surfaces (smooth transitions between sections), harmonized details (align and group related controls into single clean elements), and consistent material treatment throughout. A unified visual mass communicates stability and premium quality.
- **Strategic Sharp Cuts**: Squircle curves signal approachability; sharp edges and straight notches signal precision and performance. Use intentional hard lines to indicate actionable areas (where to tap, swipe, or open) and to add a sense of technical refinement. The contrast between continuous curves and deliberate sharp cuts creates visual tension that guides behavior.
- **Iconography**: Use platform icon libraries or an icon set (e.g., Lucide, Phosphor, Material) for consistency — icons should auto-align with text across all weights and sizes. Prefer platform-standard glyphs for common actions (share, search, bookmark) over custom icons. Maintain visual consistency across all icons in the same interface: same stroke weight, scale, and perspective.

  **Icon Design Principles** (for custom icons):
  - **Simplicity** — a recognizable, simplified design beats detail. Use familiar visual metaphors directly related to the action. Prefer filled, overlapping shapes with transparency for depth. Avoid thin line weights (<1.5px) and sharp corners — they lose detail at small sizes.
  - **Visual consistency** — all icons must share the same stroke thickness, scale, perspective, and level of detail. Match icon weight to adjacent text weight. Adjust individual icon dimensions for optical balance (a visually light icon needs to be slightly larger).
  - **Optical centering** — geometric centering often looks off. Asymmetric icons (download arrow, share) require 1–4px positional adjustments. Add invisible padding to the lighter side so content appears centered.
  - **Text in icons** — avoid unless essential. Text doesn't localize, is unreadable at small sizes, and adds clutter. If including a character, provide localized and RTL-flipped variants.
  - **Inclusive iconography** — prefer gender-neutral figures. Avoid culture-specific imagery. Use SVG/PDF for scalability. Provide alternative text labels (aria-label/accessibilityLabel) for every custom icon.

## Platform-Native Patterns

Beyond visual polish, a truly native-feeling app follows platform-level UX patterns that make it feel like a seamless part of the user's system rather than a standalone window. Separate UI chrome from content structurally — the UI layer should use standard components people recognize, while the content layer is where brand identity and visual personality live.

### App as a System, Not a Destination
Don't build a self-contained, full-screen window that the user navigates to. Design your app to appear **exactly where and when the user needs it**, then disappear. Use:
- **Popovers** and panels that attach to relevant UI elements
- **Notifications** for timely, actionable information
- **Keyboard-triggered widgets** or command palettes (Ctrl+K / Cmd+K, spotlight-style search) that overlay the current context
- **Menu bar / toolbar** integration for quick access without launching the full app

The goal: the app feels like an extension of the OS, not a detour.

### Content-First Design & Progressive Disclosure
Ask: what is the **minimum UI** needed for the content to shine? Strip toolbars, sidebars, and chrome to essentials. Use **progressive disclosure** to hide complex controls until the user signals they need them — reveal filter bars on a click, expand advanced settings behind a chevron, show formatting tools on text selection. This keeps the default state clean while power remains accessible.

### Keyboard-First (Desktop)
On desktop, every major action should have a keyboard shortcut. Provide clear visual feedback on shortcut activation (micro-animations or state changes so the user knows input registered). Document shortcuts in menus and expose them during onboarding. This is the hallmark of power-user-friendly applications.

### Search & Navigation
Make search prominent but keep it **integrated** — a floating search bar, a slide-out preview panel, or a command palette. For simple apps, skip the sidebar entirely to save space for content. Use inline search that reveals results in context rather than navigating to a separate search page.

### Onboarding
Even desktop and web apps benefit from a brief onboarding flow. Your first screen should immediately communicate care, quality, and trust — not just a logo splash. Don't just show a welcome screen — teach users about powerful, **hidden features** they'd otherwise miss (keyboard shortcuts, drag-and-drop, gestures).

- **Teach through interactivity** — let people learn by doing, not reading. An interactive demo where they perform the actual action beats a tutorial every time.
- **Use progressive onboarding** — context-sensitive hints revealed at the moment of first use, not everything upfront.
- **Postpone nonessential setup.** Use reasonable defaults. Ask for preferences when they become relevant, not at launch.
- **Design for the user, not the pro.** Never assume users know your industry's conventions. Design flows that feel intuitive to an everyday person.
- **Delay ratings and purchase prompts** until people have had a real experience with the product.

### Guided Behavior
Train users through visual hints and design patterns rather than tutorials. Simple, unobtrusive cues — subtle animation on first-use, contextual tooltips, faded secondary actions that reveal on hover — teach navigation over time without interrupting flow. Users learn best by doing, not reading.

### Content Organization
Organize content to guide people to what matters most. Three strategies for grouping complex data:
- **Time**: Recent, seasonal, or chronological groupings feel natural (e.g., "This Week", "Last Month")
- **Progress**: Group by completion state, continuing where the user left off
- **Patterns**: Related items, categories, or themes reduce choice overload

**Lists vs Collections**: Use **lists** for structured information that needs quick scanning (text-heavy, sortable data). Use **collections** (grids) for visual-heavy content (images, products, media). Don't mix both content types in the same section without clear separation.

**List & Table best practices**:
- **Keep text succinct** — short items minimize truncation and oversized rows. Prefer title + detail on tap over bloated rows.
- **Use descriptive column headings** — nouns or short noun phrases, no ending punctuation.
- **Make columns sortable and resizable** — click a heading to sort, drag to resize. Re-sort in opposite direction on second click.
- **Alternating row colors** in wide multi-column tables help track values across columns.
- **Support editing** — reordering alone adds value. Animate insert, delete, and reorder so changes are clear.
- **Row feedback differs by purpose** — persistent highlight for navigating a hierarchy, checkmark for toggling states.

## Modal Patterns

Modality presents content in a dedicated mode that prevents interaction with the parent view. It interrupts context, so use it deliberately.

### When to use modals
- **Critical information** requiring immediate attention
- **Confirmation** before destructive or irreversible actions
- **Narrow, bounded tasks** — editing a single item, composing a message, setting a filter
- **Immersive focus** — viewing media, marking up content, a focused multistep flow

### When NOT to use modals
- For navigation hierarchies — if a task requires browsing multiple levels, it's not a modal
- For content reference — don't cover up the context people need to do their task

### Modal best practices
- **Keep modal tasks simple and short.** If it feels like an app within your app, it's too complex.
- **Always provide obvious dismissal** — a close button, swipe-down gesture, or Escape key. Never trap people in a modal.
- **Name the task clearly** with a title or descriptive text so people know where they are.
- **Never stack modals** — dismiss one before presenting another. Multiple overlapping modals create cognitive chaos.
- **Warn before data loss** — if closing discards user-generated content, confirm before dismissing.

## Button Design

Buttons combine style, content, and role to communicate their function clearly.

### Hierarchy & Roles
- **Use style, not size, to differentiate importance** in a group — same-size buttons signal coherent choices. Use filled/colored for the primary action, outline or text for secondary.
- **Limit prominent buttons to 1–2 per view** — too many competing primaries increase cognitive load.
- **Button roles**: normal, primary (most likely choice), cancel, destructive. **Primary must never be destructive** — people tap prominent buttons without reading.
- **Always include a press state** for custom buttons — without one the button feels dead.

### Sizing & Layout
- **Minimum hit target**: 44×44px for touch, 60×60px for gaze/hover-based interfaces.
- **Provide enough spacing** around buttons to distinguish them from surrounding elements.

### Labels & Feedback
- **Button labels start with a verb** — "Add to Cart" not "Cart". Use title-style capitalization.
- **Show an activity indicator inside the button** for async actions. Update the label to reflect loading state ("Saving...").
- **The primary button should respond to Return/Enter** by default, making confirmation fast.

## Menu Patterns

Menus present commands and options efficiently. Consistency is key — most people already know how to use them.

### Context Menus
- **Prioritize relevancy** — include only commands users are most likely to need right now. Keep the list short.
- **Be consistent** — support context menus everywhere or nowhere. Inconsistency confuses.
- **Always mirror items in the main interface** — never offer commands exclusively in a context menu.

### Menu Organization
- **Frequently used first** — people scan from the top. Put priority items there.
- **Group logically with separators** — aim for 2–3 groups max per menu. More impedes scanning.
- **Keep menus short** — if too long, split into separate menus or use submenus.

### Menu Labels
- **Use title-style caps** — capitalize every word except articles, conjunctions, short prepositions.
- **Start with a verb** — short verb phrase that describes the action.
- **Skip articles** — remove "a", "an", "the". They add length without clarity.
- **Append ellipsis (…)** when the action needs more information before completing.

### Submenus & Toggled Items
- **Use submenus sparingly** — max one level deep, ~5 items max. Each level adds complexity.
- **Toggled items**: use a changeable label ("Show Map" / "Hide Map") instead of two separate items. Add a verb if the label alone is unclear.
- **Icons**: all-or-nothing within a group. Use purposefully to speed recognition — skip icons that don't clearly represent the action.

## UX Writing & Microcopy

The words inside the interface are as important as the visuals. Every string is a design decision that affects clarity, trust, and usability.

### Voice & Tone
- **Define your app's voice upfront.** Write a brief voice charter (3–5 adjectives: authoritative, playful, warm, technical) and reference it for every string.
- **Match tone to context.** Vary within your voice: errors are direct and blame-free, celebrations are warm, onboarding is encouraging. A fitness app energizes; a banking app conveys stability.
- **Be clear above all.** Choose plain, simple words. Read every string aloud — if awkward spoken, rewrite. Cut unnecessary words ruthlessly.

### Action-Oriented Labels
- **Use verbs for buttons and links.** "Send" beats "Let's do it!" "Learn more about X" beats "Click here." Verb-first labels help screen reader users.
- **Label for the next step.** In multi-step flows, use "Get Started", "Continue", "Next" consistently. Signal completion with "Done". Never switch terminology mid-flow.
- **Avoid possessive pronouns by default.** "Favorites" is shorter than "Your Favorites" and means the same. Avoid "we" in error messages ("Unable to load content" not "We're having trouble").

### Writing Error Messages
- **Prevent errors first.** If an error is common, fix the interaction rather than write a better message.
- **Be clear, blame-free, and actionable.** "Choose a password with at least 8 characters" beats "That password is too short" — both beat "Invalid password."
- **Show errors inline** next to the field, not in a distant banner. Avoid "Oops!" or "Uh-oh" — they sound insincere in frustrating moments.
- **Use hint text in fields.** Give examples ("name@example.com") or format descriptions. Errors explain how to fix: "Use only letters for your name" not "Don't use numbers."

### Empty States
- **Guide the next action.** Never show bare "No items." Explain what belongs here and give a clear CTA: "Your saved articles will appear here. Start exploring."
- **Treat empty states as onboarding moments.** Use them to showcase voice and teach value, not just state absence.
- **Empty states are temporary** — don't place critical info there that disappears when content arrives.

### Localization Readiness
- **Write for translation from day one.** Use full sentences with subject-verb-object order. Avoid idioms, puns, culture-specific metaphors.
- **Allow 30–50% text expansion.** German, Russian, Finnish can be 30–50% longer than English. Don't hardcode widths or truncate dynamically.
- **Externalize all strings.** Use i18n libraries (react-i18next, vue-i18n, gettext). Never embed raw text in components.
- **Support RTL layouts.** Use logical CSS properties (`inset-inline-start`, `margin-inline-end`) that flip automatically.
- **Format dates, numbers, currencies per locale.** Use `Intl.DateTimeFormat`, `Intl.NumberFormat` (web) or platform locale APIs (mobile).

## Data Visualization

Charts communicate complex information at a glance while adding visual interest. Every chart decision affects clarity, accessibility, and engagement.

### Choosing Chart Types
- **Bar marks** for comparing values across categories or showing parts of a whole. **Line marks** for revealing trends over time. **Point marks** for inspecting individual values and identifying outliers.
- **Combine mark types** when it adds clarity — overlay points on a line to highlight individual values alongside the trend.
- **Prefer common chart types** — people already know how to read bar, line, and area charts. Novel chart types require teaching through animation or annotation.
- **Match chart size to purpose** — small snapshots for glanceable previews, larger views for detailed analysis with interactive controls.

### Axes & Scale
- **Bar charts: always use zero as Y-axis lower bound** so relative heights are comparable. **Line/point charts**: zero can obscure meaningful differences — choose a range that makes variation visible.
- **Use fixed axis ranges** when specific min/max values are meaningful (e.g., 0–100%). Use **dynamic ranges** when values vary widely and you want marks to fill the plot area.
- **Use familiar tick sequences** (0, 5, 10…) — unfamiliar ones (1, 6, 11…) cost extra mental effort.
- **Tailor grid line density** to context — too many overwhelm, too few make estimation hard. Interactive charts with touch/pointer input can use lighter grids.

### Data Integrity
- **Never rely on color alone** to differentiate data or communicate essential information. Supplement with distinct shapes, patterns, or textures for each series.
- **In stacked bars or contiguous color regions**, add narrow visual separators between areas to help people distinguish segments.
- **Keep charts simple by default**; let users progressively reveal more detail (subsets, perspectives) through controls.

### Descriptions & Accessibility
- **Add descriptive text** — titles, subtitles, annotations, summary headlines. A chart with "Chance of rain in the next hour" is more useful than a bare line chart.
- **Make every chart accessible**: Provide labels describing chart values and components. Offer audio alternatives that audibly represent data trends.
- **Write accessibility labels that match purpose** — summary labels for overview charts (elevation trend over a route), granular labels per mark when exact values matter (daily step counts).
- **Include context in labels** (date, location). Avoid subjective words ("rapidly", "gradually"). Spell out units ("60 minutes" not "60m"). Describe what data represents, not what it looks like.
- **Make charts keyboard-navigable** — let users traverse along the logical axis. For large datasets, allow focus on value subsets.
- **Be consistent across related charts** — same type, colors, annotations, layout. Consistent visual language transfers understanding from one chart to another.

### Interactivity
- **Support touch-to-scrub** — expand hit targets to the full plot area when individual marks are too small to target precisely.
- **Let people interact to explore details**, but never require interaction to reveal critical information — display the main message by default.
- **Provide multiple perspectives** — overview (totals/averages), mid-level (subset comparison), detail (individual data points).
- **Animate data transitions** to help people track changes between states. Also announce changes non-visually for assistive technology.

## Layout Components

### Boxes (Grouping)
- Use bordered or background containers to visually group related content. Keep boxes small relative to their parent — a box that fills the screen defeats its purpose.
- Add a succinct title if it clarifies what's inside. Use padding and alignment for internal subgroups instead of nested boxes.

### Split Views (Multi-Pane Layout)
- Use for navigating a hierarchy: primary pane for top-level items, secondary/tertiary for details. Persistently highlight the current selection in each pane.
- Support drag-and-drop between panes for moving content across hierarchy levels.
- Make columns resizable with dividers. Let users hide panes in editing contexts and provide multiple ways to restore them.

### Labels
- Use a semantic hierarchy (primary, secondary, tertiary) to communicate relative importance through color and weight.
- Make useful text selectable — error messages, locations, IP addresses, serial numbers — so users can copy it elsewhere.

## Inclusive Design

Inclusive design means content and functionality everyone can access and understand, regardless of age, gender, race, ability, language, or culture.

### Welcoming Language
- Address people directly (**you**/**your**), not impersonally (**the user**/**the player**). Reserve **we**/**our** for your company, not to imply a personal relationship.
- Define specialized terms before using them. Replace colloquial expressions ("peanut gallery", "grandfathered in") — they carry exclusionary histories and don't translate.
- Use gender-neutral constructions ("Subscribers can post recipes" not "A subscriber can post his or her recipes"). Prefer nongendered human figures in avatars and icons.
- Avoid humor in UI copy — it's subjective, doesn't localize, and can alienate.

### Representation
- Depict a range of racial backgrounds, body types, ages, and physical capabilities in imagery. Avoid stereotypical occupations (male doctors, female nurses) and hero/villain dynamics that map to real-world power structures.
- Security questions referencing college, car ownership, or specific cultural experiences exclude people. Use universal alternatives ("What's your favorite activity?").
- "Family" depictions should reflect diverse structures, not only a woman + man + biological children.

### Cultural Color Awareness
- Colors carry different meanings across cultures: Red = danger in the West, luck in East Asia, mourning in South Africa. White = purity in the West, death in parts of Asia. Green = nature broadly, but can have political/religious associations.
- If your brand color is culturally sensitive, consider localized color themes or a neutral default with accent color customization.

## Premium Polish Elements

A premium-feeling application is built by stacking small, intentional details. These six elements — inspired by principles from high-quality app development — apply across web and mobile platforms. Adapt the library recommendations to the target stack.

### 1. Press States & Spring Physics

Every tappable element should give immediate tactile feedback. A button that does nothing on press feels dead.

- **Scale feedback**: On press down, scale the element to ~0.94–0.97 with a spring animation. On release, spring back to 1.0.
- **Opacity feedback**: Combine with a slight opacity drop (0.7–0.85) for layered depth.
- **Ripple / highlight**: For native-like feel, use a ripple effect (web: CSS `:active` with transform, RN: Pressable with ripple).
- **Spring physics**: Use natural spring curves — high stiffness, low damping — not linear transitions. Avoid hard instant snaps.

| Platform | Approach |
|----------|----------|
| CSS/Web | `transform: scale()` on `:active` with `transition: transform 0.15s cubic-bezier(0.32, 0.72, 0, 1)` |
| React | Framer Motion's `whileTap={{ scale: 0.95 }}` with spring transition |
| React Native | `Pressable` with `Animated.spring` or the `Presto` package for cross-platform press interactions |

Presto (React Native) handles scale, opacity, and haptic-aware press gestures out of the box. For web, a CSS approach is simpler and more performant.

### 2. Subtle Animations

Do not over-animate. Restraint is the hallmark of premium motion. Use gentle, purposeful motion to guide attention and communicate state.

- **Cross-fade icons**: When toggling icons (play/pause, bookmark, dark mode), cross-fade rather than instantly swapping. A 200–300ms opacity transition is enough.
- **Fade-in sequences**: Images, cards, and screens should fade in gently on mount. Stagger children with 50–100ms delays for a cascading reveal.
- **Native transitions**: On mobile, prefer platform-native transition patterns (zoom-in for modal presentation, slide for push navigation). On web, use shared-element or morphing transitions for element-level navigation.
- **Layout animations**: When items enter/leave a list or grid, animate with `Animated.List` (RN) or `layout` prop (Framer Motion).
- **Duration guidance**: Micro-interactions: 100–200ms. Element transitions: 200–300ms. Page transitions: 300–400ms. Anything over 500ms feels slow.

| Platform | Approach |
|----------|----------|
| CSS/Web | `transition`, `@keyframes`, `view-transition-api` |
| React | Framer Motion `AnimatePresence`, `motion.div` with `initial`/`animate`/`exit` |
| React Native | `ReactNativeEase` package or `LayoutAnimation` for native-grade 60fps transitions |

ReactNativeEase provides drop-in layout animations, cross-fade wrappers, and shared-element transitions tuned to native platform curves.

### 3. Haptics

Tactile feedback builds trust and reinforces that an action was registered. It tells the user "something happened" without requiring visual confirmation.

- **Build clear cause-effect relationships** — each haptic must correspond to a specific action so people learn the association. The same pattern always means the same thing.
- **Complement, don't replace** — haptics enhance visual and auditory feedback, never substitute for it. Match haptic intensity to the animation it accompanies.
- **Submit / confirm**: Light haptic on form submission, setting a toggle, or completing an action.
- **Interactive controls**: Sliders, switches, drag-to-adjust controls — haptic on each discrete step.
- **Error / rejection**: Error haptic pattern on failed actions or invalid inputs.
- **Success / celebration**: Success haptic pattern on achievements, completions, or positive outcomes.
- **Make haptics optional** — let people turn them off. The experience must be complete without them.
- **Avoid overuse** — haptics feel right occasionally but become tiresome when frequent. Test to find the balance.

| Platform | Approach |
|----------|----------|
| Web | `navigator.vibrate(pattern)` (limited, mobile-only in many browsers) |
| React Native | `Pulsar` package for custom and native haptic patterns (supports `impact`, `notification`, `selection` types, with intensity control) |

Use haptics sparingly. Over-use feels gimmicky. Reserve for interactions where the user would benefit from confirmation. Haptic + visual animation together create the strongest feedback loop.

### 4. Keyboard Behavior (Mobile & Form-Heavy Web)

A premium app makes the keyboard feel integrated, not like an obstacle. This applies to any interface with text input.

- **Keyboard-aware layout**: UI elements (especially primary action buttons) should move with or sit above the keyboard — never be hidden behind it.
- **Gesture dismissal**: Support swipe-down or tap-to-dismiss on the keyboard. Blurring the background during keyboard presentation adds depth.
- **Smooth animation**: Keyboard show/hide should animate input fields and surrounding UI synchronously with the keyboard's own animation curve.
- **Focus management**: Auto-focus the first input when a form screen appears. Move focus to the next field on submit (unless it is the final field).
- **Return key label**: Set the return key to "Next" for multi-field forms and "Done" / "Go" for the final field.

| Platform | Approach |
|----------|----------|
| Web | `input` events, `scrollIntoView`, CSS `:focus-within` |
| React | `react-avoiding-keyboard` or manual `scrollIntoView` on focus |
| React Native | `KeyboardAvoidingView` or `ReactNativeKeyboardController` package for animated, gesture-aware keyboard management |

ReactNativeKeyboardController offers gesture-based dismissal (swipe down to blur), keyboard-aware `KeyboardAvoidingView` with matching animation curves, and per-input return-key configuration. For web forms, a simple sticky CTA that scrolls into view on focus is usually sufficient.

### 5. Loading & Empty States

Empty states are not voids — they are opportunities. Loading states set expectations. Together they define the app's personality when there is nothing to show.

- **Empty states as onboarding**: Instead of "No items yet", explain the value: "Your saved articles will appear here. Start exploring to fill this space." Include a clear CTA.
- **Shimmer / skeleton loading**: Use shimmer placeholders that mirror the final content layout. This sets visual expectations and signals "something is coming."
- **Pull-to-refresh**: On mobile, include pull-to-refresh with a branded animation (not the default spinner).
- **Progressive loading**: Fade in content as it loads rather than a hard swap from skeleton to full page.
- **Optimistic UI**: On actions (delete, toggle, submit), update the UI immediately and reconcile with the server in the background.

| Platform | Approach |
|----------|----------|
| CSS/Web | `@keyframes shimmer` with gradient sweep on skeleton placeholders |
| React | Custom skeleton components or `react-loading-skeleton` |
| React Native | `react-native-shimmer` or built-in `ActivityIndicator` wrapped in skeleton layouts |

Treat the empty state as a designed screen, not a default. Consider illustration, branded copy, and a compelling action. The loading state should match the final layout as closely as possible so the user's eyes know where to look when data arrives.

### 6. Drag & Drop

Drag-and-drop makes interactions feel tangible, direct, and natural. Support it broadly — for reordering, moving between containers, attaching files, organizing content.

- **Move vs copy semantics**: Dragging within the same container typically **moves** content; dragging to a different container or app **copies** it. On desktop, holding Option/Alt forces copy.
- **Visual feedback**: Show a drag preview (a semi-transparent clone) as soon as the user drags ~3px. Translucency distinguishes preview from original and lets people see destinations underneath.
- **Drop targets**: Highlight valid destinations on hover; show no feedback (or "not allowed") over invalid ones. Remove highlighting when the item drags away.
- **Reordering**: Show a gap or placeholder where the item will land. Animate adjacent items shifting to make room as the user drags.
- **Spring physics**: Snap into place with slight overshoot at drop, not a teleport.
- **Multi-item drag**: Support dragging multiple selected items. Show a badge counter during multi-item drag so people know how many items are in transit.
- **Undo support**: Let people undo a drop — they may drop in the wrong destination. Prefer confirmation when the operation can't be reversed.
- **Fallback alternatives**: Always provide non-drag alternatives (copy/paste, menu commands) — drag-and-drop is sometimes impossible or inconvenient.

| Platform | Approach |
|----------|----------|
| CSS/Web | HTML Drag and Drop API, or libraries like `react-beautiful-dnd`, `dnd-kit`, `SortableJS` |
| React | `dnd-kit` (modern, flexible, accessible), `react-beautiful-dnd` (maintained legacy) |
| React Native | `react-native-draggable-flatlist` for lists, `PanResponder` or `GestureHandler` for custom drag |

## Quality Bar

The result is good only if:
- It avoids generic AI aesthetics (no Inter/Roboto, no purple gradients on white, no cookie-cutter layouts)
- There is a clear, intentional aesthetic direction
- Typography choices are distinctive and well-paired
- Color palette is cohesive and bold, not timid
- Layout has character (asymmetry, overlap, or intentional spacing)
- Code is functional and production-grade
- Every design choice feels intentional, not default
- Every tappable element has press-state feedback (scale, opacity, or ripple)
- Motion is purposeful and restrained, not chaotic or absent
- Haptic feedback is used where meaningful (platform-permitting)
- Keyboard behavior is integrated, not an afterthought
- Empty and loading states are designed as intentional moments, not blank screens
- **Purpose**: Every feature, screen, and element earns its place — nothing is there by default or "just in case"
- **Agency**: User can undo mistakes and recover from errors; interface doesn't force a single path
- **Responsibility**: Privacy is respected; AI features have safeguards against harmful output; destructive actions require confirmation; design considers longevity and sustainability
- **Familiarity**: Metaphors are used correctly (trash means delete); consistent elements behave consistently
- **Flexibility**: Layout adapts across devices and orientations; supports accessibility features; offers personalization where possible
- **Simplicity**: Strong visual hierarchy guides attention to what matters most; plain language, not jargon; minimal steps to complete tasks
- **Content-First**: Controls and chrome are minimized so content takes center stage; progressive disclosure hides complexity until needed
- **System Integration**: App uses popovers, notifications, or command palettes to appear contextually rather than as a standalone destination
- **Drag & Drop**: Reordering, file attachment, and item organization support drag-and-drop with visual preview and drop zone feedback
- **Dark Mode**: Color palette is thoughtfully adjusted (not just inverted) for dark environments — no harsh high-contrast opposites
- **Dark Mode imagery**: Icons, illustrations, and full-color images get separate light/dark treatment — dark details don't disappear against dark backgrounds; interface symbols with similar colors to the background get subtle borders for edge definition
- **Onboarding**: Hidden power features (shortcuts, gestures, drag-and-drop) are introduced through onboarding or progressive tooltips
- **Narrative & Storytelling**: Visual assets, animations, and layouts build a cohesive story that communicates product value
- **Confident White Space**: Content has room to breathe — elements aren't crammed together; negative space is used deliberately to direct focus
- **Structured-Exploratory Layout**: Grid-grounded but with staggered, broken, or masonry arrangements for visual interest
- **Squircle Geometry**: Icons, cards, and containers use true continuous curvature (superellipse) rather than basic rounded rectangles with harsh breakpoints
- **Natural Visual Cues**: Gradients, shadows, and translucency are used to mimic real-world light perception — interface feels alive, not sterile and flat
- **Brand Expression**: Design balances platform consistency with distinctive visual energy; conventions are broken intentionally and meaningfully
- **Brand Ethos**: Interface communicates a clear values-driven identity — users connect with what it stands for, not just what it does
- **Visual Signature**: There is a simple, bold visual motif that makes the interface instantly recognizable
- **Monolith Unity**: The interface reads as one cohesive object — continuous surfaces, harmonized details, consistent material throughout
- **Strategic Contrast**: The balance between continuous curves (approachability) and sharp cuts (precision) is intentional and meaningful
- **Semantic Colors**: Colors are named by purpose and auto-adapt to light/dark mode, contrast, and accessibility — no hard-coded values
- **System Text Styles**: Typography uses a clear hierarchical scale that respects user text-size accessibility preferences
- **Three Core Questions**: User can immediately answer "Where am I?", "What can I do?", and "Where can I go from here?"
- **Content Organization**: Data is grouped by logical themes (time, progress, patterns); lists vs collections chosen appropriately for content type
- **Accessibility**: Supports multiple senses, adopts platform accessibility APIs, allows text size and density customization
- **Three-Tap Rule**: Most important actions reachable within three taps/clicks; common use cases are optimized over edge cases
- **Physics-Based Motion**: Interactions mirror real-world physics (weight, momentum, friction) — interfaces feel alive, not mechanical
- **Spatial Continuity**: Animated transitions help users map where they are; interface feels like a coherent space, not disconnected screens
- **Form Follows Function**: Design starts from constraints and user needs, not styling — aesthetic emerges naturally from resolved function
- **Guided Behavior**: Users learn through visual hints and design patterns rather than tutorials or documentation

## Platform Considerations

Each platform has unique characteristics that should inform your design decisions. The following guidance helps your interface feel at home on each device.

### Layout Foundations (All Platforms)
- **Safe areas** — inset content from dynamic system features (notches, camera housings, status bars, corner radii) so nothing is clipped.
- **Adaptability** — interfaces must respond to screen size changes, orientation switches, text-size adjustments, and feature availability (external displays, multitasking). Use responsive layout tools (CSS Grid/Flexbox, flexbox) rather than fixed positions.
- **Full-bleed content** — extend backgrounds and artwork to screen edges. Let navigation chrome (tab bars, sidebars, toolbars) float above content using translucency/materials, with scroll edge effects that blur background content as it passes underneath.
- **Visual hierarchy** — place items by importance: top-to-bottom, leading-to-trailing in reading order. Group related items using negative space, background shapes, or separators. Differentiate controls from content structurally (controls float above, content fills the space).

### Phone (Mobile)
- **Ergonomics**: People hold the device in one or both hands, typically at close viewing distance (~1ft). Reachable controls should be in the middle or bottom area of the display.
- **Inputs**: Multi-Touch gestures, virtual keyboards, voice control. Support swipe-to-navigate-back and swipe-to-initiate-actions in list rows.
- **Interactions**: Sessions range from quick checks (seconds) to extended use (hours). People switch between multiple apps frequently.
- **Adaptation**: Support device orientation changes, Dark Mode, and system text-size preferences seamlessly.
- **Controls**: Limit onscreen controls to reduce clutter; make secondary actions discoverable through minimal interaction.

### Laptop (Desktop)
- **Display**: Large, high-resolution displays with potential for multiple monitors. Present more content in fewer nested levels.
- **Ergonomics**: Stationary use at a desk, viewing distance ~1-3ft. Support window resize, hide, show, move, and full-screen mode.
- **Inputs**: Physical keyboard, pointer (mouse/trackpad), voice. Support keyboard shortcuts for every major action and keyboard-only work styles.
- **Personalization**: Let users customize toolbars, configure window views, and choose interface colors and fonts.
- **Menu bar**: Provide access to all commands the app offers through standard menu bar menus.

### Tablet (Large Screen)
- **Display**: Large, high-resolution display supporting multitasking (split view, slide over).
- **Ergonomics**: Often held, sometimes set on a surface or stand. Viewing distance up to ~3ft.
- **Inputs**: Touch, physical keyboard, stylus, pointing device, voice — often used in combination. Consider unique multi-input interactions.
- **Multitasking**: Minimize modal interfaces and full-screen transitions. Support drag and drop between apps.
- **Adaptation**: Transition smoothly across device orientations and multitasking modes. Consider seamless cross-device continuation.

## Failure Modes

Avoid:
- Generic font families: Inter, Roboto, Arial, system fonts
- Cliched color schemes: particularly purple gradients on white backgrounds
- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character
- Timid, evenly-distributed color palettes
- Converging on common choices (Space Grotesk, etc.) across generations
- Flat, feedback-dead UI — no press states, no hover, no active indicators
- Over-animation or motion without purpose — animations that distract rather than guide
- Empty states showing raw "No data" or nothing at all
- Keyboard-obstructed CTAs on mobile or form-heavy screens — the most common tell of a non-premium app
- Using default system spinners and indicators without branding them to the app's aesthetic
- **No purpose**: Features, modals, or screens added without a clear reason — wasting user time and attention
- **No agency**: Forcing users down a single path; no undo capability; no way to recover from mistakes
- **No responsibility**: Ignoring privacy; shipping AI features without safeguards against harm; no confirmation on destructive actions
- **No familiarity**: Reinventing standard metaphors (trash = something other than delete); inconsistent behavior for similar-looking elements
- **No flexibility**: Fixed layout that breaks on different devices or orientations; ignoring accessibility; no personalization options
- **No simplicity**: Flat hierarchy where nothing stands out; jargon-heavy copy; bloated multi-step flows for simple tasks
- **No narrative**: Visuals feel random or disconnected — no cohesive story tying design choices together
- **No white space**: Cramped, dense layouts where nothing can breathe, overwhelming the user
- **Timid grid**: Strict, rigid grid with no exploration — predictable rows and columns with no staggered or masonry breaks
- **Sharp / broken curves**: Using basic `border-radius` with visible breakpoints instead of true continuous curvature; mixing true squircles with low-quality rounded rectangles in the same interface
- **Sterile flatness**: Completely flat interface with no gradients, shadows, or translucency — feels cold and uncomfortable to use over time
- **Blind consistency**: Following platform guidelines so rigidly that the brand's unique visual energy is erased; no intentional deviations for expression
- **No brand ethos**: The interface is functional but has no soul — nothing communicates what the product stands for beyond its feature set
- **Disjointed composition**: Interface reads as scattered cards, panels, and sections rather than one cohesive object — no unifying visual mass or material consistency
- **Hard-coded colors**: Using fixed color values that don't adapt to light/dark mode or accessibility contrast settings
- **No text-size scaling**: Fixed text sizes that ignore user accessibility preferences — text doesn't scale with system settings
- **Confusing navigation**: User cannot quickly answer "Where am I?", "What can I do?", or "Where can I go from here?"
- **Mixed content types**: Lists and grids combined in the same section without clear separation, creating visual clutter
- **Accessibility as an afterthought**: Only visual interaction mode supported; no screen reader labels, no keyboard navigation, no text size customization
- **Deep navigation**: Important actions buried more than three taps deep; edge cases prioritized over common flows
- **Mechanical motion**: Animations are linear, weightless, and lack physics — interfaces feel robotic rather than alive
- **Disconnected screens**: No spatial transitions between views; users lose orientation when navigating between screens
- **Decoration-first design**: Styling applied before functional constraints are resolved — form disconnected from purpose
- **Tutorial dependency**: Users must read instructions or watch walkthroughs to understand basic navigation rather than learning through visual cues
- **No RTL support**: Interface doesn't mirror for right-to-left languages — text alignment wrong, back buttons point wrong direction, icons not flipped
- **No localization readiness**: Hardcoded strings, no text expansion space, culture-specific idioms that don't translate
- **Vague permission prompts**: Asking for access at launch with unclear purpose strings — erodes trust before the user sees value
- **Color-only differentiation**: Status, state, or data visualization relies solely on color without shape/icon/text alternatives
- **Exclusionary imagery or language**: Only one body type, skin color, or gender represented; culture-specific metaphors that alienate global users

## Improvement Loop

If output is weak:
1. Identify which failure mode occurred
2. Strengthen the aesthetic direction constraints
3. Add more specific guidance about differentiation
4. Check whether any of the six polish elements are missing
5. Test with the same prompt to verify improvement
