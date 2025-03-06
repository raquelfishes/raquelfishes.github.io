import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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
        order: z.number(),
        enable: z.boolean(),
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

const blogCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/data/blog" }),
    schema: ({ image }) =>
      z.object({
        title: z.string(), // Title of the article (required)
        description: z.string(), // Description of the article (required)
        image: z.object({
          src: image(), // Usa image() para manejar la optimización
          alt: z.string(), // Alternate text for the image (required)
        }),
        tags: z.array(z.string()), // Array of tags (required)
        pubDate: z.date(), // Publication date (required)
        top: z.boolean().optional(), // Optional top-level key, e.g., featured article marker (if used)
    }),
});



export const collections = {
  blog: blogCollection,
  now: nowCollection,
  canon: canonCollection,
};
