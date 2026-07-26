import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MD Samrat | Full Stack Web Developer",
    short_name: "MD Samrat",
    description: "Portfolio of MD Samrat, Full Stack Web Developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090B",
    theme_color: "#09090B",
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
    ],
  };
}
