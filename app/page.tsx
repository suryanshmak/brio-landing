import SigEngine from "@/components/SigEngine";
import Chrome from "@/components/scenes/Chrome";
import SceneApp from "@/components/scenes/SceneApp";
import SceneNoise from "@/components/scenes/SceneNoise";
import SceneCred from "@/components/scenes/SceneCred";
import SceneDisc from "@/components/scenes/SceneDisc";
import SceneValid from "@/components/scenes/SceneValid";
import SceneEnd from "@/components/scenes/SceneEnd";

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
      <SceneNoise />
      <SceneCred />
      <SceneDisc />
      <SceneValid />
      <SceneEnd />
      <SigEngine />
    </div>
  );
}
