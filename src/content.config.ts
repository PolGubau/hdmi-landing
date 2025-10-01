import { glob } from "astro/loaders";
import { defineCollection, z, type InferEntrySchema } from "astro:content";

const projects = defineCollection({
	loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			summary: z.string(),
			available: z.boolean(),
			startedAt: z.string().transform((str) => new Date(str)),
			endedAt: z
				.string()
				.transform((str) => new Date(str))
				.optional(),
			color: z.string(),
			link: z.string().optional(),
			githubLink: z.string().optional(),
			npmCommand: z.string().optional(),
			npmLink: z.string().optional(),
			images: z.array(image()),
			category: z.string(),
			tech: z.array(z.string()).optional(),
		}),
});

export type Project = InferEntrySchema<"projects">;

export const collections = { projects };
