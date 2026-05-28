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

export function formatDate(value?: string | null): string {
  if (!value) {
    return "";
  }

  return new Date(value).toLocaleDateString("es-PE", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function getCollections<T extends { id: number | string }>(
  value?: Array<T | number | string | null> | null,
): T[] {
  return (value ?? []).filter(
    (item): item is T =>
      item !== null && typeof item === "object" && "id" in item,
  );
}

export type Option<T = string> = { value: T; label: string };

export function toOptions(items: (string | number)[], resolver?: (item: string | number) => Option<string>): Option<string>[];
export function toOptions<T>(items: T[], resolver: (item: T) => Option<string>): Option<string>[];
export function toOptions<T>(
  items: T[],
  resolver?: (item: T) => Option<string>
): Option<string>[] {
  if (!items || !Array.isArray(items)) return [];

  return items.map((item) => {
    if (typeof item === "string" || typeof item === "number") {
      return { value: String(item), label: String(item) } as Option<string>;
    }
    if (resolver) {
      return resolver(item);
    }
    throw new Error("toOptions: resolver is required for non-primitive items");
  });
}
