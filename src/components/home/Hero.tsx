"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { portrait } from "@/content/photos";
import { easeOutExpo } from "@/lib/motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeOutExpo } },
};

export function Hero() {
  return (
    <section className="relative pt-32 pb-10 sm:pt-36">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-10 px-6 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1
            variants={item}
            className="font-display text-[40px] font-bold leading-[1.02] tracking-[-0.02em] sm:text-[52px] lg:text-[60px]"
          >
            Hi, I&apos;m <span className="text-accent">Saumya</span> — I make ML
            systems you can trust.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-[22px] max-w-[520px] text-[19px] leading-[1.65] text-muted"
          >
            Senior Machine Learning Engineer in Berlin, working in MLOps and LLM
            observability. I love turning fuzzy prototypes into production
            systems — and telling the story on stage at conferences, workshops,
            and meetups.
          </motion.p>

          <motion.div variants={item} className="mt-[34px] flex flex-wrap gap-3.5">
            <Button href="/speaking" size="lg">
              See my talks
            </Button>
            <Button href="/book" variant="outline" size="lg">
              Get in touch
            </Button>
          </motion.div>
        </motion.div>

        {/* Portrait: primary-toned ring, gently floating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: easeOutExpo, delay: 0.25 }}
          className="flex justify-center"
        >
          <div className="dc-float relative h-[190px] w-[190px] sm:h-[240px] sm:w-[240px] lg:h-[280px] lg:w-[280px]">
            <div className="absolute -inset-2.5 rounded-full bg-primary" aria-hidden />
            <div className="absolute inset-0 rounded-full bg-bg p-1.5">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src={portrait.src}
                  alt={portrait.alt}
                  fill
                  priority
                  sizes="(max-width: 640px) 190px, (max-width: 1024px) 240px, 280px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
