export interface SpeakingPhoto {
  /** Path under /public, e.g. "/images/speaking/talk.webp". */
  src: string;
  /** Describes the scene for screen readers. Don't restate the caption —
   *  a reader who can't see the photo already has that from the figcaption. */
  alt: string;
  /** Rendered under the image: event · city · year. */
  caption: string;
  /** Intrinsic pixel size, so next/image can reserve space and avoid layout
   *  shift. Read them off the file (`sips -g pixelWidth -g pixelHeight`) —
   *  they don't need to match how large the photo renders. */
  width: number;
  height: number;
  /** Renders full-width on tablet, two of three columns on desktop. Meant for
   *  a wide establishing shot; it keeps its own aspect ratio rather than being
   *  cropped to match the others, so a panorama stays a panorama. */
  featured?: boolean;
  /** Photographer, when one should be credited. Any credits found here are
   *  merged into a single line under the whole grid, not printed per photo. */
  photoCredit?: string;
}

/**
 * The "In the room" grid on /speaking.
 *
 * To add a photo: drop the .webp in /public/images/speaking/ and add an entry.
 * The component reads this list as-is and needs no changes.
 *
 * TODO(saumya): confirm city + exact dates before publishing.
 */
export const speakingPhotos: SpeakingPhoto[] = [
  {
    src: "/images/speaking/mlops-community-munich-full-room.webp",
    alt: "Panoramic view of a packed MLOps Community Munich meetup, attendees seated and standing across a wide room facing the speaker and projected slides.",
    caption: "MLOps Community Munich · Meetup",
    width: 1170,
    height: 419,
    featured: true,
  },
  {
    src: "/images/speaking/mlconference-2023-workshop-audience.webp",
    alt: "A full workshop room of attendees at laptops, several with hands raised, facing a projected Airflow DAG interface.",
    caption: "ML Conference · Munich · 2023",
    width: 1600,
    height: 1067,
  },
  {
    src: "/images/speaking/mlconference-2025-talk-audience.webp",
    alt: 'Saumya presenting to a seated audience beside an ML Conference banner, with a slide reading "So, what do we do?" projected on screen.',
    caption: "ML Conference · 2025",
    width: 1600,
    height: 1562,
  },
  {
    src: "/images/speaking/mlconference-2025-workshop-live-demo.webp",
    alt: "Saumya running a live coding demo from the front of a workshop room, a notebook and terminal projected on the screen behind her.",
    caption: "Workshop · Voxel51 & Label Studio · ML Conference · 2025",
    width: 1600,
    height: 1035,
  },
  {
    src: "/images/speaking/mlops-community-munich-speakers.webp",
    alt: "Saumya with five fellow speakers and organisers in front of the MLOps Community Munich title slide.",
    caption: "MLOps Community Munich · Meetup",
    width: 1170,
    height: 878,
  },
];

// Spares — not rendered. Swap in if you prefer these framings.
// mlconference-2025-talk-stage.webp    1562x1600  (portrait, Langfuse trace-analysis slide)
// mlconference-2025-talk-detail.webp   1380x1600  (portrait, tracing architecture slide)
// mlconference-2023-workshop-alt.webp  1600x1067  (second frame, same 2023 session)
