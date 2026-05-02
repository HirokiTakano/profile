import { AboutSection } from "@/components/AboutSection";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { YouTubeSection } from "@/components/YouTubeSection";
import { ZennSection } from "@/components/ZennSection";

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ZennSection />
        <YouTubeSection />
      </main>
    </>
  );
}
