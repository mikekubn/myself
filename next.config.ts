import type { NextConfig } from "next";

const NEXT_CONFIG: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.mikekubn.cz",
        port: ""
      }
    ]
  },
  webpack(config) {
    // biome-ignore lint/suspicious/noExplicitAny: any rule
    const fileLoaderRule = config.module.rules.find((rule: any) => rule.test?.test?.(".svg"));

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"]
      }
    );
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
  headers(): Promise<Array<{ source: string; headers: Array<{ key: string; value: string }> }>> {
    return Promise.resolve([
      {
        source: "/:path*{/}?",
        headers: [
          {
            key: "X-Accel-Buffering",
            value: "no"
          }
        ]
      }
    ]);
  }
};

export default NEXT_CONFIG;
