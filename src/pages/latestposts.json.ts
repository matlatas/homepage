import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ params, request }) => {
  // Filter blog entries with 'draft: false' & date before current date
  const publishedBlogEntries = await getCollection("blog", ({ id, data }) => {
    return !data.draft;
  });

  // Sort by date in descending order
  publishedBlogEntries.sort((a, b) => {
    return new Date(b.data.date!).getTime() - new Date(a.data.date!).getTime();
  });

  // Filter out any itens whre id = "-index"
  const filteredBlogEntries = publishedBlogEntries.filter(
    (entry) => entry.id !== "-index",
  );

  // Limit to 5 blog entries
  const firstFiveBlogEntries = filteredBlogEntries.slice(0, 8);

  // Add the fields snippet=description, slug=id and image[src] = image

  const res = firstFiveBlogEntries.map((entry) => {
    return {
      id: entry.id,
      slug: entry.id,
      data: {
        title: entry.data.title,
        snippet: entry.data.description,
        image: { src: entry.data.image },
      },
    };
  });

  return new Response(JSON.stringify(res));
};
