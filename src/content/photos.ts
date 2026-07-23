export interface Photo {
  /** Path under /public, e.g. "/images/gallery/talk-01.jpg". Leave "" for a
   *  styled placeholder tile until you drop the real photo in. */
  src: string;
  alt: string;
  caption?: string;
  /** Aspect ratio hint for the masonry-ish gallery. */
  ratio?: "portrait" | "landscape" | "square";
}

/**
 * Speaking photo gallery. Drop your images into /public/images/gallery/ and set
 * `src` to their path. Any entry with an empty `src` renders a tasteful
 * placeholder so the layout looks intentional before your photos arrive.
 */
export const galleryPhotos: Photo[] = [
  { src: "", alt: "Saumya on stage at ML Conference", caption: "ML Conference · Munich", ratio: "landscape" },
  { src: "", alt: "Saumya presenting a keynote", caption: "Keynote", ratio: "portrait" },
  { src: "", alt: "Saumya during a live workshop", caption: "Workshop · Voxel51 & Label Studio", ratio: "square" },
  { src: "", alt: "Saumya answering audience questions", caption: "Q&A", ratio: "landscape" },
  { src: "", alt: "Saumya speaking to a full room", caption: "Main stage", ratio: "portrait" },
  { src: "", alt: "Saumya with the audience", caption: "Post-talk", ratio: "square" },
];

/** Hero portrait for the About / Speaking pages. Empty = placeholder. */
export const portrait: Photo = {
  src: "/images/hero/portrait.jpg",
  alt: "Portrait of Saumya Goyal",
  ratio: "square",
};
