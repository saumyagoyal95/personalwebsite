export interface Photo {
  /** Path under /public, e.g. "/images/hero/portrait.jpg". */
  src: string;
  alt: string;
  caption?: string;
  /** Aspect ratio hint. */
  ratio?: "portrait" | "landscape" | "square";
}

/**
 * Hero portrait, used on Home and About.
 * Image lives at /public/images/hero/portrait.jpg — drop a replacement there
 * (same filename) to swap it, or point `src` at a new path under /public.
 */
export const portrait: Photo = {
  src: "/images/hero/portrait.jpg",
  alt: "Portrait of Saumya Goyal",
  ratio: "square",
};
