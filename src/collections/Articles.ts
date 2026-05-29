import type { CollectionConfig } from "payload";
import { slugify } from "@/shared/lib/slugify";

export const Articles: CollectionConfig = {
  slug: "articles",
  labels: {
    singular: {
      en: "Article",
      es: "Artículo",
    },
    plural: {
      en: "Articles",
      es: "Artículos",
    },
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "status", "publishedAt", "updatedAt"],
    group: {
      en: "Content",
      es: "Contenido",
    },
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: {
        en: "Title",
        es: "Título",
      },
      admin: {
        placeholder: {
          en: "Enter article title",
          es: "Ingresa el título del artículo",
        },
      },
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      label: {
        en: "Slug",
        es: "Slug",
      },
      admin: {
        readOnly: true,
        position: "sidebar",
      },
    },
    {
      name: "excerpt",
      type: "textarea",
      label: {
        en: "Excerpt",
        es: "Extracto",
      },
      admin: {
        placeholder: {
          en: "Enter article excerpt",
          es: "Ingresa el extracto del artículo",
        },
      },
    },
    {
      name: "content",
      type: "richText",
      required: true,
      label: {
        en: "Content",
        es: "Contenido",
      },
    },
    {
      name: "coverImage",
      label: {
        en: "Cover Image",
        es: "Imagen de portada",
      },
      type: "upload",
      relationTo: "media",
    },
    {
      name: "publishedAt",
      type: "date",
      label: {
        en: "Published At",
        es: "Fecha de publicación",
      },
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "draft",
      label: {
        en: "Status",
        es: "Estado",
      },
      options: [
        {
          label: {
            en: "Draft",
            es: "Borrador",
          },
          value: "draft",
        },
        {
          label: {
            en: "Published",
            es: "Publicado",
          },
          value: "published",
        },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
      label: {
        en: "Tags",
        es: "Etiquetas",
      },
    },
  ],
  timestamps: true,
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data?.title && !data?.slug) {
          return {
            ...data,
            slug: slugify(data.title),
          };
        }

        return data;
      },
    ],
  },
};