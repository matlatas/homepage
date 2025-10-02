import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  console.log(`Request for ${pathname}`);

  if (pathname === "/.well-known/apple-app-site-association") {
    const response = await next();
    response.headers.set("Content-Type", "application/json");
    return response;
  }

  return next();
});
