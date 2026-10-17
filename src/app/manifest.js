import { site } from "@/content/site";

export default function manifest() {
  return {
    name: `${site.name} · ${site.role}`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#060908",
    theme_color: "#060908",
    icons: [{ src: "/icon", sizes: "64x64", type: "image/png" }],
  };
}
