import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const data = {
    applinks: {
      details: [
        {
          appIDs: ["B2X8HMRS8L.com.kjellhaaland.matlat"],
          components: [
            {
              "/": "/s/*",
              comment: "Matches any URL whose path starts with /s/",
            },
            {
              "/": "/finish-sign-in/*",
              comment:
                "Matches any URL whose path starts with /finish-sign-in/",
            },
          ],
        },
      ],
    },
  };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
