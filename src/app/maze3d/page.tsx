import type { Metadata } from "next";
import Shamaze3DFrame from "./Shamaze3DFrame";

export const metadata: Metadata = {
  title: "Shamaze3D | A 3D Maze Game",
  description:
    "Get lost in Shamaze3D, a curious little 3D maze game built with React and Three.js. Explore the labyrinth, find your way out, or get lost in the fun!.",
  alternates: {
    canonical: "/shamaze3d",
  },
  openGraph: {
    title: "Shamaze3D | A 3D Maze Game",
    description:
      "A curious little 3D maze game built with React and Three.js. Explore the labyrinth, find your way out, or get lost.",
    url: "https://shamvoke.com/shamaze3d",
    siteName: "shamvoke.com",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/deudsgjbm/image/upload/v1780820863/05_A-maze-game-for-the-curious-Shamaze3D_zj7wmg.webp",
        width: 1366,
        height: 910,
        alt: "Shamaze3D game screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shamaze3D | A 3D Maze Game",
    description:
      "Explore a curious 3D maze built with React and Three.js. Find your way out, or get lost in the fun!",
  },
};

export default function Shamaze3D() {
  return <Shamaze3DFrame />;
}