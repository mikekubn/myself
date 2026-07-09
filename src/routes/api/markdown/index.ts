import { Readability } from "@mozilla/readability";
import { createFileRoute } from "@tanstack/react-router";

import { parseHTML } from "linkedom";
import TurndownService from "turndown";

export const Route = createFileRoute("/api/markdown/")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const response = await fetch("https://mikekubn.cz", {
            headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)..." }
          });

          if (!response.ok) {
            return new Response("Error fetching markdown", { status: 500 });
          }

          const html = await response.text();

          const { document } = parseHTML(html);

          const reader = new Readability(document);
          const parsed = reader.parse();

          if (!parsed || !parsed.content) {
            throw new Error("Could not parse meaningful content from the HTML.");
          }

          const turndownService = new TurndownService({
            headingStyle: "atx",
            hr: "---",
            bulletListMarker: "-"
          });

          const markdown = turndownService.turndown(parsed.content);

          return new Response(markdown, {
            status: 200,
            headers: {
              "Content-Type": "text/markdown; charset=utf-8",
              "Cache-Control": "public, max-age=3600, s-maxage=86400"
            }
          });
        } catch (_e) {
          return new Response("Error fetching markdown", { status: 500 });
        }
      }
    }
  }
});
