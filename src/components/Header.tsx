"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MENU_ITEMS = [
  { href: "/", label: "Main" },
  { href: "/who-we-are", label: "Who we are?" },
  { href: "/what-we-do", label: "What we do?" },
  { href: "/for-investors", label: "For investors" },
  { href: "/contacts", label: "Contact us" },
];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeLang, setActiveLang] = useState<"ru" | "eng">("eng");
  const pathname = usePathname();
  const [activeMenuIndex, setActiveMenuIndex] = useState(() =>
    Math.max(0, MENU_ITEMS.findIndex((item) => item.href === pathname))
  );

  const toggleNav = () => setNavOpen((prev) => !prev);

  const renderLangGroup = (hidden: boolean) => (
    <div className={`lang d-flex${hidden ? " lang_hidden_group" : ""}`}>
      <div
        className={`ru lang_general${hidden ? " lang_hidden" : ""}${activeLang === "ru" ? " active" : ""}`}
        onClick={() => setActiveLang("ru")}
      >
        ru
      </div>
      <div
        className={`${hidden ? "eng_hidden " : ""}eng lang_general${hidden ? " lang_hidden" : ""}${activeLang === "eng" ? " active" : ""}`}
        onClick={() => setActiveLang("eng")}
      >
        eng
      </div>
    </div>
  );

  return (
    <header id="header" className="header">
      <div className="container">
        <div className={`header_body d-flex${navOpen ? " active" : ""}`}>
          <Link href="/" className="logo">
            <img src="/img/logo.svg" alt="Logo" />
          </Link>
          {renderLangGroup(false)}
          <div
            className={`burger${navOpen ? " active" : ""}`}
            onClick={toggleNav}
          >
            <span className="burger_line up_line"></span>
            <span className="burger_line center_line"></span>
            <span className="burger_line down_line"></span>
          </div>
        </div>
        <div className={`nav_screen${navOpen ? " active" : ""}`}>
          <div className="container nav_container d-flex">
            <ul className="menu_body">
              <span className="menu_decor">menu</span>
              {MENU_ITEMS.map((item, index) => (
                <li
                  key={item.href}
                  className={`menu_item${activeMenuIndex === index ? " active" : ""}`}
                  onMouseEnter={() => setActiveMenuIndex(index)}
                >
                  <img className="menu_arrow" src="/img/menu_arrow.svg" alt="" />
                  <Link href={item.href} className="menu_link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="clone_info">
              <div className="social d-flex">
                <a href="#" className="social_link">Facebook</a>
                <a href="#" className="social_link">Instagram</a>
                <a href="#" className="social_link">Twitter</a>
              </div>
            </div>
            {renderLangGroup(true)}
          </div>
        </div>
      </div>
    </header>
  );
}
