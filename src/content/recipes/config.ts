import { defineCollection, z } from "astro:content";
// z > zod schema

const recipes = defineCollection({
    schema: z.object({
        tittle: z.string(),
        author: z.string(),
        date: z.date(),
        description: z.string(),
        image: z.string().url(),
    })
})