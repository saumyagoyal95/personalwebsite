export interface EventLogo {
  src: string;
  /** Names the organisation. The strip has a visible "Speaking at" label, so
   *  the alt text doesn't need to repeat the context. */
  alt: string;
  width: number;
  height: number;
  /**
   * Cap on the rendered logo height inside its plate. Not every source file is
   * cropped the same way — the MLOps square carries a lot of built-in padding,
   * so it needs a taller allowance to look the same size as the others. Tune
   * this, not the plate, when a logo reads too big or too small.
   */
  heightClass: string;
}

/**
 * The "Speaking at" strip on /speaking.
 *
 * Each logo sits on a white plate. That's deliberate: two of the three files
 * are rasters with a baked-in white background, so anything other than white
 * would show as a pale box around them, and the navy-on-white marks would be
 * unreadable against the dark theme. The plates keep the strip legible in both
 * themes without recolouring anyone's brand.
 */
export const eventLogos: EventLogo[] = [
  {
    src: "/images/logos/MLConLogo.svg",
    alt: "ML Conference",
    width: 470,
    height: 188,
    heightClass: "max-h-[30px]",
  },
  {
    src: "/images/logos/pydata.png",
    alt: "PyData",
    width: 450,
    height: 187,
    heightClass: "max-h-[30px]",
  },
  {
    src: "/images/logos/mlops_community.jpg",
    alt: "MLOps Community",
    width: 900,
    height: 900,
    heightClass: "max-h-[56px]",
  },
];
