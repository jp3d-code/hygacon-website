"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  heroContentVariants,
  heroItemVariants,
  heroTitleVariants,
} from "@/modules/home/animations/hero-stagger";
import { Button } from "@/shared/components/ui/button";
import { Section } from "@/shared/components/ui/section";
import { imageSrc, images } from "@/shared/data/images";
import { cn } from "@/shared/lib/utils";

const slides = [
  {
    id: 1,
    title: "CONSORCIO HYGACON",
    highlight: "INFRAESTRUCTURA",
    subtitle: "Y SANEAMIENTO",
    image: imageSrc(images.f6547048),
  },
  {
    id: 2,
    title: "EJECUCION Y",
    highlight: "SUPERVISION",
    subtitle: "DE OBRAS",
    image: imageSrc(images.d145c549),
  },
  {
    id: 3,
    title: "SERVICIOS",
    highlight: "INTEGRALES",
    subtitle: "DE CONSTRUCCION",
    image: imageSrc(images.eff50fdf),
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  // biome-ignore lint/correctness/useExhaustiveDependencies: We want this effect to run only when the index changes, not on every render.
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  const currentSlide = slides[index];

  return (
    <Section className="relative h-[90vh] overflow-hidden bg-background">
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide.id}
          className="absolute inset-0"
          initial={{ opacity: index === 0 ? 1 : 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
        >
          <img
            src={currentSlide.image}
            alt=""
            className="h-full w-full object-cover"
            fetchPriority={index === 0 ? "high" : "auto"}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex h-full w-full max-w-7xl items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            variants={heroContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-5xl"
          >
            <motion.h1
              variants={heroTitleVariants}
              className="flex flex-col font-extrabold text-4xl text-white uppercase leading-tight md:text-6xl"
            >
              <motion.span variants={heroItemVariants}>
                {currentSlide.title}
              </motion.span>
              <motion.span variants={heroItemVariants} className="text-primary">
                {currentSlide.highlight}
              </motion.span>
              <motion.span variants={heroItemVariants}>
                {currentSlide.subtitle}
              </motion.span>
            </motion.h1>

            <motion.div
              variants={heroItemVariants}
              className="mt-10 flex gap-4"
            >
              <Button size={"lg"} type="button" className="font-bold uppercase">
                Nuestros servicios
              </Button>

              <Button
                type="button"
                variant={"outline-dark"}
                size={"lg"}
                className="font-bold uppercase"
              >
                Ver proyectos
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            type="button"
            key={i}
            onClick={() => setIndex(i)}
            className={cn(
              "h-3 w-3 rounded-full bg-white/40 transition-all duration-300",
              {
                "w-10 bg-primary": i === index,
              },
            )}
          />
        ))}
      </div>
    </Section>
  );
}
