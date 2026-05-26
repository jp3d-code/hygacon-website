import type { CollectionConfig } from "payload";
import { slugify } from "@/shared/lib/slugify";

export const Tags: CollectionConfig = {
  slug: "tags",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: {
        readOnly: true,
        position: "sidebar",
      },
    },
  ],
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data?.name && !data?.slug) {
          return {
            ...data,
            slug: slugify(data.name),
          };
        }

        return data;
      },
    ],
    afterChange: [
      ({ data }) => {
        if (data?.name && typeof data.name === "string") {
          return {
            ...data,
            name: data.name.slice(0, 1).toUpperCase() + data.name.slice(1),
          };
        }
      },
    ],
  },
};
