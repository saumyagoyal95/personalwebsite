import { siteConfig } from "@/content/siteConfig";
import { socialUrls } from "@/content/socials";
import { portrait } from "@/content/photos";

/**
 * Person structured data, rendered site-wide from the root layout.
 *
 * `sameAs` is the part that earns its keep: it's how search engines tie the
 * LinkedIn and Medium profiles to this site as the same person, rather than
 * treating them as three unrelated pages. Adding a profile to
 * `src/content/socials.ts` puts it here automatically.
 */
export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${portrait.src}`,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    email: `mailto:${siteConfig.email}`,
    sameAs: socialUrls,
  };

  return (
    <script
      type="application/ld+json"
      // The payload is built from our own config, not user input. JSON.stringify
      // escapes the quotes; the `<` guard closes the one hole that matters — a
      // literal "</script>" inside a string ending the tag early.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
