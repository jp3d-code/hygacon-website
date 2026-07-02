import slugifyLib from "slugify";

export const slugify = (value: string) =>
  slugifyLib(value, {
    lower: true,
    strict: true,
    locale: "es",
    trim: true,
    replacement: "-",
  });
