import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ params, request }) => {
  // Filter blog entries with 'draft: false' & date before current date
  const publishedBlogEntries = await getCollection("blog", ({ id, data }) => {
    return !data.draft && id === "priskrig-og-sjokktilbud";
  });

  // Limit to 5 blog entries
  const entry = publishedBlogEntries[0];

  const res = {
    id: entry.id,
    slug: entry.id,
    isActive: false,
    data: {
      title: entry.data.title,
      snippet: entry.data.description,
      image: { src: entry.data.image },
    },
  };

  return new Response(JSON.stringify(res));
};
