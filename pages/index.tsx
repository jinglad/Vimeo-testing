import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center mt-10 capitalize font-semibold">
        this is a test project for testing video embed
      </h1>
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          src="https://player.vimeo.com/video/816148829?h=553bf87140&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title="Rocket-League-Data-Coach (2).mp4"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js" async></script>
    </main>
  );
}
