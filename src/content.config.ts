import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    locale: z.enum(['pt', 'en']),
    translationKey: z.string(),
    summary: z.string(),
    eyebrow: z.string(),
    category: z.string(),
    stack: z.array(z.string()),
    featured: z.boolean().default(false),
    repo: z.string().url().optional(),
    live: z.string().url().optional(),
    imageFit: z.enum(['cover', 'contain']).default('cover'),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string(),
    })).default([]),
    order: z.number(),
  }),
});

export const collections = { projects };
