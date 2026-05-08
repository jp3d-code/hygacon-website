"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { Section } from "@/shared/components/ui/section";
import { cn } from "@/shared/lib/utils";

const slides = [
  {
    id: 1,
    title: "ESPECIALISTAS EN EPC PARA",
    highlight: "TALLERES",
    subtitle: "DE MANTENIMIENTO",
    image:
      "https://ynoa-uploader.ynoacamino.me/uploads/1778253705_photo-1504307651254-35680f356dfd.webp",
  },
  {
    id: 2,
    title: "SOLUCIONES PARA",
    highlight: "MINERÍA",
    subtitle: "E INDUSTRIA PESADA",
    image:
      "https://ynoa-uploader.ynoacamino.me/uploads/1778253766_photo-1513828583688-c52646db42da.webp",
  },
  {
    id: 3,
    title: "INFRAESTRUCTURA",
    highlight: "INDUSTRIAL",
    subtitle: "A GRAN ESCALA",
    image:
      "https://ynoa-uploader.ynoacamino.me/uploads/1778253810_photo-1509395176047-4a66953fd231.webp",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[index];

  return (
    <Section className="relative h-[90vh] overflow-hidden bg-background">
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide.id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
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
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex h-full w-full max-w-7xl items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl"
          >
            <h1 className="flex flex-col font-extrabold text-4xl text-white uppercase leading-tight md:text-6xl">
              <span>{currentSlide.title}</span>
              <span className="text-primary">{currentSlide.highlight}</span>
              <span>{currentSlide.subtitle}</span>
            </h1>

            <div className="mt-10 flex gap-4">
              <Button size={"lg"} type="button" className="font-bold uppercase">
                Nuestros servicios
              </Button>

              <Button
                type="button"
                variant={"outline"}
                size={"lg"}
                className="font-bold uppercase"
              >
                Ver proyectos
              </Button>
            </div>
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
