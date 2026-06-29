import ScrollEngine from "@/components/ScrollEngine";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Forge from "@/components/sections/Forge";
import Marquee from "@/components/sections/Marquee";
import Statement from "@/components/sections/Statement";
import AdaptiveDemo from "@/components/sections/AdaptiveDemo";
import Credential from "@/components/sections/Credential";
import Recruiters from "@/components/sections/Recruiters";
import Profile from "@/components/sections/Profile";
import ProofBento from "@/components/sections/ProofBento";
import ProvenScore from "@/components/sections/ProvenScore";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <div
      id="lp-root"
      data-progress="on"
      data-intensity="bold"
      style={{ position: "relative", overflowX: "clip" }}
    >
      <div id="grain"></div>

      <Nav />
      <Hero />
      <Forge />
      <Marquee />
      <Statement />
      <AdaptiveDemo />
      <Credential />
      <Recruiters />
      <Profile />
      <ProofBento />
      <ProvenScore />
      <FinalCta />
      <Footer />

      <ScrollEngine />
    </div>
  );
}
