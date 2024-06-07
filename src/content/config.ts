import { docsSchema } from "@astrojs/starlight/schema";
import { defineCollection, reference, z } from "astro:content";

const authorCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image().optional(),
    }),
});

const aboutCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      authors: z.array(reference("authors")),
      image: image().optional(),
      type: z.literal("about").default("about"),
    }),
});

export const collections = {
  docs: defineCollection({ schema: docsSchema({
    extend: z.object({
      // Add a new field to the schema.
      utterances: z.boolean().default(true),
    }),
  }) }),
  about: aboutCollection,
  authors: authorCollection,
};
