import { Appbar } from "@/components/Appbar";
import { Hero } from "@/components/Hero";
import { HeroVideo } from "@/components/HeroVideo";

export default function Home() {
  return (
    <main className="pb-48">
        <Appbar />
        <Hero />
        <div className="pt-8">
          <HeroVideo />
        </div>
    </main>
  );
}
// export default function Home() {
//   return (
//     <main style={{ padding: 40 }}>
//       <h1>Zapier Frontend Working 🚀</h1>
//     </main>
//   );
// }
