import { Readability } from "@mozilla/readability";
import { createFileRoute } from "@tanstack/react-router";

import { JSDOM } from "jsdom";
import TurndownService from "turndown";

export const Route = createFileRoute("/api/markdown")({
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
          const dom = new JSDOM(html);
          const reader = new Readability(dom.window.document);
          const document = reader.parse();

          if (!document || !document.content) {
            throw new Error("Could not parse meaningful content from the HTML.");
          }

          const turndownService = new TurndownService({
            headingStyle: "atx",
            hr: "---",
            bulletListMarker: "-"
          });

          const markdown = turndownService.turndown(document.content);

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
