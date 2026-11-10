import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const lessons = defineCollection({loader:glob({pattern:'**/*.md',base:'./src/content/lessons'}),schema:z.object({title:z.string(),grade:z.number(),order:z.number(),description:z.string(),icon:z.string(),duration:z.number(),objectives:z.array(z.string())})});
export const collections={lessons};
