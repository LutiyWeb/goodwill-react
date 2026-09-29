import type { Metadata } from "next";
import "@/styles/pages/contacts.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactsInfo from "@/components/sections/contacts/ContactsInfo";
import Questions from "@/components/sections/Questions";

export const metadata: Metadata = {
  title: "Goodwill | Contacts",
};

export default function ContactsPage() {
  return (
    <div className="page page_contacts">
      <Header />
      <ContactsInfo />
      <Questions />
      <Footer />
    </div>
  );
}
