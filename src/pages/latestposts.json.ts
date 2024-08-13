import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({params, request}) => {

    // Filter blog entries with 'draft: false' & date before current date
    const publishedBlogEntries = await getCollection("blog", ({ data }) => {
        return !data.draft && data.publishDate < new Date();
    });

    // Limit to 5 blog entries
    const firstFiveBlogEntries = publishedBlogEntries.slice(0, 5);

    return new Response(JSON.stringify(firstFiveBlogEntries));
}