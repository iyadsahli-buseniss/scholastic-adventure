import { createFileRoute } from "@tanstack/react-router";

const ALLOWED_PREFIX = "https://moutamadris.ma/wp-content/uploads/";

export const Route = createFileRoute("/api/public/pdf")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const target = new URL(request.url).searchParams.get("u");
        if (!target || !target.startsWith(ALLOWED_PREFIX) || !target.toLowerCase().endsWith(".pdf")) {
          return new Response("Invalid document", { status: 400 });
        }

        const upstream = await fetch(target, {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
            Referer: "https://moutamadris.ma/",
            Accept: "application/pdf,*/*",
          },
        });

        if (!upstream.ok || !upstream.body) {
          return new Response("Document unavailable", { status: 502 });
        }

        return new Response(upstream.body, {
          status: 200,
          headers: {
            "content-type": "application/pdf",
            "content-disposition": "inline",
            "cache-control": "public, max-age=86400",
          },
        });
      },
    },
  },
});
