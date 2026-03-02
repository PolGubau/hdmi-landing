import { type InferEntrySchema, defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
	loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			summary: z.string(),
			available: z.boolean(),
			client: z.string(),
			timeline: z.number().int().positive(),
			endedAt: z
				.string()
				.transform((str) => new Date(str))
				.optional(),
			color: z.string(),
			link: z.string().optional(),
			cover: z.image(),
			services_provided: z.array(z.string()).optional(),
		}),
});

const blog = defineCollection({
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.string().transform((str) => new Date(str)),
			updatedDate: z
				.string()
				.transform((str) => new Date(str))
				.optional(),
			coverImage: image().optional(),
			tags: z.array(z.string()).optional(),
			author: z.string().default("doscientos"),
			draft: z.boolean().default(false),
		}),
});

export type Project = InferEntrySchema<"projects">;
export type BlogPost = InferEntrySchema<"blog">;

export const collections = { projects, blog };
