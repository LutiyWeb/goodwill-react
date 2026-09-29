import type { Metadata } from "next";
import "@/styles/pages/what-we-do.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatWeDoHero from "@/components/sections/what-we-do/WhatWeDoHero";
import Industries from "@/components/sections/what-we-do/Industries";
import SpacSteps from "@/components/sections/what-we-do/SpacSteps";
import Company from "@/components/sections/what-we-do/Company";
import Advantages from "@/components/sections/what-we-do/Advantages";
import Questions from "@/components/sections/Questions";

export const metadata: Metadata = {
  title: "Goodwill | What we do?",
};

export default function WhatWeDoPage() {
  return (
    <div className="page page_what_we_do">
      <Header />
      <WhatWeDoHero />
      <Industries />
      <SpacSteps />
      <Company />
      <Advantages />
      <Questions />
      <Footer />
    </div>
  );
}
