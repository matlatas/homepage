import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/blog",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    meta_title: z.string().optional(),
    hero: z
      .object({
        title: z.string(),
        description: z.string(),
      })
      .optional(),
    button: z
      .object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      })
      .optional(),
    list: z
      .array(
        z.object({
          name: z.string(),
          designation: z.string(),
          content: z.string(),
        }),
      )
      .optional(),
    date: z.union([z.date(), z.string()]).optional(),
    image: z.string(),
    draft: z.boolean().optional(),
  }),
});

export const caseStudies = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/case-studies",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    image: z.string().optional(),
    hero: z
      .object({
        title: z.string(),
        description: z.string(),
      })
      .optional(),
    case_study: z
      .object({
        title: z.string(),
        meta_title: z.string().optional(),
        description: z.string(),
        date: z.string(),
        image: z.string(),
        draft: z.boolean(),
      })
      .optional(),
  }),
});

export const changelog = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/changelog",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    image: z.string().optional(),
    draft: z.boolean(),
  }),
});

export const company = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/company",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean(),
  }),
});

export const contact = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/contact",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    image: z.string().optional(),
    draft: z.boolean(),
    hero: z.object({
      title: z.string(),
      description: z.string(),
      list: z.array(
        z.object({
          icon: z.string(),
          title: z.string(),
          description: z.string(),
        }),
      ),
    }),
  }),
});

export const demo = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/demo",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    image: z.string().optional(),
    draft: z.boolean(),
    hero: z.object({
      title: z.string(),
      description: z.string(),
      list: z.array(
        z.object({
          icon: z.string(),
          title: z.string(),
          description: z.string(),
        }),
      ),
    }),
  }),
});

export const homepage = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/homepage",
  }),
  schema: z.object({
    title: z.string().optional(),
    meta_title: z.string().optional(),
    description: z.string(),
    image: z.string().optional(),
  }),
});

export const integration = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/integration",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    image: z.string().optional(),
    draft: z.boolean(),
  }),
});

export const pages = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/pages",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    image: z.string().optional(),
    draft: z.boolean(),
  }),
});

export const pricing = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/pricing",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    image: z.string().optional(),
    draft: z.boolean(),
    hero: z.object({
      title: z.string(),
      description: z.string(),
    }),
  }),
});

export const review = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/review",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    image: z.string().optional(),
    draft: z.boolean(),
  }),
});
