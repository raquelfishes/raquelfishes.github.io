import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { text } from 'd3';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/data/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      tags: z.array(z.string()),
      description: z.string(),
      pubDate: z.string().transform((str) => new Date(str)),
      imgUrl: image(),
      draft: z.boolean().optional().default(false),
    }),
});

const nowCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/data/now" }),
    schema: z.object({
        title: z.string(),
        author: z.string(),
        pubDate: z.string().transform((str) => new Date(str)),
        draft: z.boolean().optional().default(false),
     }),
});

const canonCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.json', base: "./src/data/canon" }),
    schema: z.object({
        title: z.string(),
        items: z.array(
            z.object({
                title: z.string(),
                type: z.string(),
                text: z.string(),
                quote: z.string().optional(),
                link: z.string().url().optional(),
        })),
    }),
});

export const collections = {
  blog: blogCollection,
  now: nowCollection,
  canon: canonCollection,
};
