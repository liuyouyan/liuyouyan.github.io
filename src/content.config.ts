import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const shared = {
  title: z.string(),
  summary: z.string(),
  date: z.coerce.date(),
  category: z.string(),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  cover: z.string().optional(),
  placeholder: z.boolean().default(false),
};

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    ...shared,
    role: z.string().optional(),
    period: z.string().optional(),
    links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object(shared),
});

export const collections = { projects, posts };
