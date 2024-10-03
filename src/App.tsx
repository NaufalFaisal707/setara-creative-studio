// components
import OurProjetcs from "@/components/OurProjects";
import OurServices from "@/components/OurServices";
import BrandHero from "@/components/BrandHero";
import OurTeam from "@/components/OurTeam";
import Navbar from "@/components/Navbar";

export default function App() {
  return (
    <div className="grid min-w-96">
      <Navbar />
      <BrandHero />
      <OurServices />
      <OurProjetcs />
      <OurTeam />
    </div>
  );
}
