/**
 * The mark that follows the text of a link leaving the site. Inline SVG for the
 * same reason as the social marks: the project has no icon library and two or
 * three glyphs don't justify one.
 *
 * Always `aria-hidden` — the link's own text is the accessible name, and a
 * screen reader announcing "external link image" after it adds nothing.
 */
export function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
      className={className}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
