import appCss from "../styles.css?url";

import { DOMAIN } from "./portfolio";

const METADATA_META: React.MetaHTMLAttributes<HTMLMetaElement>[] = [
  {
    charSet: "utf-8"
  },
  {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  },
  {
    title: "Mike - Software Engineer"
  },
  {
    property: "og:image",
    content: "https://cdn.mikekubn.cz/og-image-mk.png"
  },
  {
    property: "og:title",
    content: "Mike - Software Engineer"
  },
  {
    property: "og:description",
    content: "Make things better."
  },
  {
    property: "og:type",
    content: "website"
  },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Mike - Software Engineer" },
  { name: "twitter:description", content: "Make things better." },
  { name: "twitter:image", content: "https://cdn.mikekubn.cz/og-image-mk.png" }
];

const METADATA_LINKS: React.LinkHTMLAttributes<HTMLLinkElement>[] = [
  {
    rel: "stylesheet",
    href: appCss
  },
  {
    rel: "canonical",
    href: DOMAIN
  },
  {
    rel: "apple-icon",
    sizes: "180x180",
    href: "/apple-icon.png"
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/icon.png"
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/icon.png"
  },
  { rel: "manifest", href: "/manifest.json", color: "#000000" },
  { rel: "icon", href: "/favicon.ico" }
];

export { METADATA_LINKS, METADATA_META };
