import type { Metadata } from "next";
import "@/styles/pages/who-we-are.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhoWeAreHero from "@/components/sections/who-we-are/WhoWeAreHero";
import ClientOffer from "@/components/sections/who-we-are/ClientOffer";
import Organization from "@/components/sections/who-we-are/Organization";
import OurValues from "@/components/sections/who-we-are/OurValues";
import Team from "@/components/sections/who-we-are/Team";
import Presentation from "@/components/sections/who-we-are/Presentation";
import Questions from "@/components/sections/Questions";

export const metadata: Metadata = {
  title: "Goodwill | Who we are?",
};

export default function WhoWeArePage() {
  return (
    <div className="page page_who_we_are">
      <Header />
      <WhoWeAreHero />
      <ClientOffer />
      <Organization />
      <OurValues />
      <Team />
      <Presentation />
      <Questions />
      <Footer />
    </div>
  );
}
