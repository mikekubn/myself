import type { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: "https://mikekubn.cz/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
};

export default sitemap;
