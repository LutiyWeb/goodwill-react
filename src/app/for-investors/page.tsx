import type { Metadata } from "next";
import "@/styles/pages/for-investors.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InvestorsHero from "@/components/sections/for-investors/InvestorsHero";
import CooperationScheme from "@/components/sections/for-investors/CooperationScheme";
import Questions from "@/components/sections/Questions";

export const metadata: Metadata = {
  title: "Goodwill | For investors",
};

export default function ForInvestorsPage() {
  return (
    <div className="page page_for_investors">
      <Header />
      <InvestorsHero />
      <CooperationScheme />
      <Questions />
      <Footer />
    </div>
  );
}
