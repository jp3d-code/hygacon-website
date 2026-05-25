import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Media } from "@/payload-types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function getMediaUrl(media?: Media | number | null): string {
  if (!media || typeof media === "number") {
    return "";
  }

  return media.url ?? "";
}
