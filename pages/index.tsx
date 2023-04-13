import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center mt-10 capitalize font-semibold">
        this is a test project for testing video embed
      </h1>
      <div
        style={{
          padding: "75% 0 0 0",
          position: "relative",
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/817149218?h=5f46094a98&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
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
          title="Rocket-League-Data-Coach (3)"
        ></iframe>
      </div>
      <h3 className="mt-10">this is part 2</h3>
      <div
        style={{
          padding: "75% 0 0 0",
          position: "relative",
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/817154469?h=aba3e85f8d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
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
          title="Rocket-League-Data-Coach (3)"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js" async></script>
    </main>
  );
}
