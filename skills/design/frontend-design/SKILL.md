---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality across web and mobile (React Native). Use this skill when the user asks to build web components, pages, artifacts, posters, applications, or React Native mobile UIs (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, React Native screens, or when styling/beautifying any UI). Generates creative, polished code that stacks small intentional details — press states, subtle animations, haptics, keyboard integration, and crafted loading/empty states — to achieve a premium feel.
version: 2.0.0
category: design
portable: true
---

# Frontend Design

## Purpose

Build distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices. A premium app is not defined by one big feature but by the sum of many small, intentional decisions — press feedback, motion, tactile response, keyboard integration, and thoughtful empty states.

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

1. **Design Thinking Phase** — Before coding, understand context and commit to a BOLD aesthetic direction:
   - **Purpose**: What problem does this interface solve? Who uses it?
   - **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian
   - **Constraints**: Technical requirements (framework, performance, accessibility)
   - **Differentiation**: What makes this UNFORGETTABLE?

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

4. **Verification Phase** — Verify against the Quality Bar below.

## Output Format

Functional, production-ready frontend code (HTML/CSS/JS, React, Vue, React Native, etc.) that:
- Is complete and runnable
- Has a distinctive, non-generic aesthetic
- Includes all necessary styling and interactive elements
- Implements the premium polish elements appropriate to the platform

## Frontend Aesthetics Guidelines

- **Typography**: Choose beautiful, unique fonts from Google Fonts. Avoid Arial, Inter, Roboto. Pair distinctive display fonts with refined body fonts. Make unexpected, characterful choices. Always include the Google Fonts import link in HTML/CSS.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables. Dominant colors with sharp accents outperform timid palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only. One well-orchestrated page load with staggered reveals creates more delight than scattered micro-interactions.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, grain overlays.

## Premium Polish Elements

A premium-feeling application is built by stacking small, intentional details. These five elements — inspired by principles from high-quality app development — apply across web and mobile platforms. Adapt the library recommendations to the target stack.

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
- **Native transitions**: On mobile, prefer platform-native transition patterns (iOS zoom-in for modal presentation, slide for push navigation). On web, use shared-element or morphing transitions for element-level navigation.
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

- **Submit / confirm**: Light haptic on form submission, setting a toggle, or completing an action.
- **Interactive controls**: Sliders, switches, drag-to-adjust controls — haptic on each discrete step.
- **Error / rejection**: Error haptic pattern on failed actions or invalid inputs.
- **Success / celebration**: Success haptic pattern on achievements, completions, or positive outcomes.

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

## Improvement Loop

If output is weak:
1. Identify which failure mode occurred
2. Strengthen the aesthetic direction constraints
3. Add more specific guidance about differentiation
4. Check whether any of the five polish elements are missing
5. Test with the same prompt to verify improvement
