import SigEngine from "@/components/SigEngine";
import Chrome from "@/components/scenes/Chrome";
import SceneApp from "@/components/scenes/SceneApp";
import SceneFilm from "@/components/scenes/SceneFilm";
import SceneNoise from "@/components/scenes/SceneNoise";
import SceneTakes from "@/components/scenes/SceneTakes";
import SceneCred from "@/components/scenes/SceneCred";
import SceneDisc from "@/components/scenes/SceneDisc";
import SceneValid from "@/components/scenes/SceneValid";
import SceneEnd from "@/components/scenes/SceneEnd";
import SiteFooter from "@/components/scenes/SiteFooter";

export default function Page() {
  return (
    <div
      id="sigroot"
      data-theme="dark"
      data-palette="ice"
      data-type="grotesk"
      data-motion="full"
      data-grain="on"
      style={{
        position: "relative",
        overflowX: "clip",
        background: "var(--bgA)",
        color: "var(--ink)",
      }}
    >
      <Chrome />
      <SceneApp />
      <SceneFilm />
      <SceneNoise />
      <SceneTakes />
      <SceneCred />
      <SceneDisc />
      <SceneValid />
      <SceneEnd />
      <SiteFooter />
      <SigEngine />
    </div>
  );
}
