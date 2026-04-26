import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Michael Kubin - Software engineer & Digital Crafting",
    short_name: "Michael Kubin",
    description:
      "Michael Kubin - Software Engineer & Digital Craftsman. Specializing in software development & application architecture.",
    start_url: "/",
    display: "standalone",
    background_color: "#090A0A",
    theme_color: "#090A0A",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon"
      },
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ]
  };
}
