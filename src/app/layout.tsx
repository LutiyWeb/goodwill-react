import type { Metadata } from "next";
import "../styles/normalize.css";
import "../styles/main.scss";
import MotionProvider from "@/components/MotionProvider";

export const metadata: Metadata = {
  title: "Goodwill | Main",
  description: "Goodwill Capital is a private equity fund that finances promising private businesses with SPACs on the NASDAQ and NYSE markets.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
