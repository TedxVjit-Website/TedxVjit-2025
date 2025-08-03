"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { 
  Navbar, 
  NavBody, 
  NavItems, 
  MobileNav, 
  MobileNavHeader, 
  MobileNavMenu, 
  MobileNavToggle, 
  NavbarLogo, 
  NavbarButton 
} from "@/components/ui/Navbar";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Events", link: "/events" },
    { name: "Speakers", link: "/speakers" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <html lang="en">
      <head>
        <title>TEDx VJIT 2025</title>
        <meta name="description" content="TEDx VJIT 2025 - Ideas Worth Spreading" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <NavbarButton href="/register" variant="dark">
              Register Now
            </NavbarButton>
          </NavBody>
        </Navbar>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle 
              isOpen={isMobileMenuOpen} 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            />
          </MobileNavHeader>
          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-${idx}`}
                href={item.link}
                className="text-lg font-medium text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <NavbarButton href="/register" variant="dark" className="w-full">
              Register Now
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>

        {children}
      </body>
    </html>
  );
}
