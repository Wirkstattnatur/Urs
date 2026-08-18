# Wirkstattnatur design system

This system is derived from the approved homepage direction. Its purpose is to keep future pages visually consistent without accumulating one-off colours, spacing, borders, shadows, or type treatments.

## Where the system lives

- `src/styles.css` is the source of truth for theme tokens and shared visual patterns.
- Tailwind CSS v4 generates utilities from the variables in `@theme inline`.
- Page components compose those tokens and the shared `site-*` classes. They should not introduce new colours or arbitrary visual effects unless the design system is deliberately extended first.

## Brand principles

1. **Calm before decoration.** Use space, typography, photography, and surface changes to create hierarchy.
2. **Natural, not rustic.** Cream, warm white, sand, and forest green form the foundation; lime is energy and emphasis.
3. **Personal, not corporate.** Fraunces carries the human voice; Inter keeps information direct and legible.
4. **Contained elements may have edges.** Cards and controls may use a ring, shadow, or border. Full-width sections do not get divider lines; their rhythm comes from colour and spacing.
5. **Motion reveals meaning.** Hover effects may reveal imagery or supporting copy, but content must remain available on touch devices and with reduced motion.

## Colour roles

Use semantic Tailwind names rather than raw colour values.

| Token                | Tailwind example               | Approved use                                                    |
| -------------------- | ------------------------------ | --------------------------------------------------------------- |
| `background`         | `bg-background`                | Default warm-paper canvas and editorial quote sections          |
| `card`               | `bg-card`                      | Clean warm-white bands, cards, menus, biography section         |
| `primary`            | `bg-primary`, `text-primary`   | Forest brand sections, headings, dark controls                  |
| `primary-foreground` | `text-primary-foreground`      | Text on forest or dark photography                              |
| `secondary`          | `bg-secondary`                 | Warm supporting areas such as testimonials                      |
| `muted-foreground`   | `text-muted-foreground`        | Secondary prose and labels                                      |
| `accent`             | `bg-accent`, `text-accent`     | Primary actions and small emphasis only                         |
| `border`             | `ring-border`, `border-border` | Contained cards and structural controls, not section separators |

Do not add raw hex, RGB, or new Tailwind palette colours inside page components. Add a semantic token to `src/styles.css` only when a genuinely new role exists.

## Surface rhythm

The homepage establishes the approved sequence:

1. Photography with a forest overlay
2. Warm paper (`background`)
3. Forest (`primary`)
4. Warm paper (`background`)
5. Warm white (`card`)
6. Sand (`secondary`)
7. Warm paper with a contained forest call-to-action

Adjacent sections should change surface only when the story changes. Avoid alternating colours mechanically and avoid outlines around full-width sections.

## Layout and spacing

Use the shared component classes:

| Class                   | Purpose                                                              |
| ----------------------- | -------------------------------------------------------------------- |
| `site-container`        | Standard `max-w-7xl` content width and responsive horizontal gutters |
| `site-container-narrow` | Editorial content such as a large quote                              |
| `site-section`          | Standard vertical section rhythm (`py-24`, `lg:py-32`)               |
| `site-anchor`           | Anchor offset that clears the persistent site header                 |
| `site-skip-link`        | Keyboard skip navigation, visually revealed on focus                 |

New full-width sections should normally use this structure:

```tsx
<section id="example" className="site-anchor bg-card">
  <div className="site-container site-section">...</div>
</section>
```

## Typography

| Class                | Purpose                              |
| -------------------- | ------------------------------------ |
| `site-eyebrow`       | Small uppercase section label        |
| `site-title`         | Standard section heading             |
| `site-title-feature` | Major section heading used sparingly |
| `site-lead`          | Long-form introductory copy          |

- Fraunces is reserved for headings, quotations, and expressive numbers.
- Inter is used for navigation, body copy, labels, and controls.
- Italic forest or lime words may provide one point of emphasis per major heading.
- Avoid introducing additional font sizes when one of the shared scales fits.

## Controls and cards

Buttons are composed from one base, one size, and one colour treatment:

```tsx
<a className="site-button site-button-lg site-button-primary">Primary action</a>
<a className="site-button site-button-md site-button-outline-inverse">Compact action</a>
<a className="site-button site-button-sm site-button-ghost-inverse">Secondary action</a>
```

Available classes:

- `site-button`
- `site-button-lg` / `site-button-md` / `site-button-sm`
- `site-button-primary`
- `site-button-ghost-inverse`
- `site-button-outline-inverse`
- `site-card`
- `site-card-interactive`

Legal long-form pages use the shared `legal-prose`, `legal-intro`, `legal-meta`, and `legal-summary` patterns rather than one-off typography.

Use `rounded-panel` for major contained panels, `rounded-2xl` for standard cards, and `rounded-control` for pill controls. Use `shadow-card` for ordinary elevation and `shadow-soft` only for prominent panels or hover emphasis.

## Navigation

`src/components/site-header.tsx` is the only site-wide header. It is completely transparent at the top of a page and transitions to its appropriate solid surface, blur, and quiet shadow after scrolling begins. On the homepage and service pages it overlays the forest hero and adopts the forest surface while moving. The desktop Angebot control opens a keyboard-accessible service panel; mobile presents the same hierarchy inside one compact menu. New top-level pages must reuse this header rather than creating local navigation.

Service-page heroes use the same forest surface, inverse typography, lime eyebrow and primary action treatment as the homepage hero. Their facts remain contained within the hero as quiet translucent panels.

Service-page photography below the hero uses the shared `ServiceGallery` with a consistent square crop. It is manually controlled, supports native horizontal swiping, arrow keys and explicit previous/next controls, and never auto-plays. Keep galleries curated to a small set of informative client photographs; do not create decorative image dumps.

The three concise benefit statements on service pages use the shared `BenefitIcon` line-art family. Icons reinforce the written benefit and remain visually subordinate inside the forest panel; do not mix in filled, multicolour, or third-party icon styles.

The homepage and service pages share one compact contact CTA. Phone is the lime primary action; email and chat use the inverse outline treatment. Practical information belongs in the shared flat, full-width footer, which groups the brand and addresses, a linked sitemap, and contact and insurance details. Do not turn the footer into a floating card or repeat the service list in the copyright row.

## Interaction and accessibility

- Every interactive control requires a visible keyboard focus state.
- Hover-only information must be visible by default on touch devices.
- Respect `prefers-reduced-motion` for transforms and reveal animations.
- Decorative images use an empty `alt`; meaningful photography needs concise descriptive text.
- Keep body text contrast on the approved semantic colour pairs.

## Extending the system

Before adding a custom value, check whether the need can be met by an existing token or pattern. If not:

1. Name the new semantic role, not its appearance.
2. Add it centrally in `src/styles.css`.
3. Document its intended use here.
4. Reuse it at least twice, or keep the implementation local and visually neutral until a repeatable pattern emerges.
