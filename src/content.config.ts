import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    lang: z.enum(["es", "en"]).default("es"),
    translationKey: z.string().optional(),
    description: z.string().optional(),
    pubDate: z
      .union([z.string(), z.date()])
      .transform((val) => (val instanceof Date ? val : new Date(val)))
      .optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
};
