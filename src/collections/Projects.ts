import type { CollectionConfig } from "payload";
import { slugify } from "@/shared/lib/slugify";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "sector", "serviceArea", "status", "year"],
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
    {
      name: "sector",
      type: "text",
      required: true,
    },
    {
      name: "serviceArea",
      label: "Service Area",
      type: "text",
      required: true,
    },
    {
      name: "status",
      type: "text",
      required: true,
    },
    {
      name: "country",
      type: "text",
      required: true,
    },
    {
      name: "client",
      type: "text",
      required: true,
    },
    {
      name: "location",
      type: "text",
      required: true,
    },
    {
      name: "year",
      type: "text",
      required: true,
    },
    {
      name: "modality",
      type: "text",
      required: true,
    },
    {
      name: "summary",
      type: "textarea",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
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
  },
};
