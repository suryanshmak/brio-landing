import type { Metadata } from "next";
import OrbLab from "@/components/OrbLab";

export const metadata: Metadata = {
  title: "Brio — orb studies",
  robots: { index: false, follow: false },
};

export default function LabPage() {
  return <OrbLab />;
}
