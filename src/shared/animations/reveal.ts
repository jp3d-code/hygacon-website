import { easeOutQuint } from "@/shared/animations/easings";

export const revealTransition = {
  duration: 0.6,
  ease: easeOutQuint,
};

export const revealVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
