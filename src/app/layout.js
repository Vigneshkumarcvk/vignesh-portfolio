import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dr. Vignesh Kumar C | Portfolio",
  description:
    "Data & Analytics Architect | AI Automation Specialist | Research Scholar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-900 text-white antialiased`}
      >
        {/* Navigation */}
        <nav className="p-6 flex justify-between items-center border-b border-gray-700">
          <h1 className="font-bold text-xl tracking-wide">
            Dr. Vignesh Kumar C
          </h1>

          <div className="space-x-6 text-gray-300">
            <a href="/" className="hover:text-blue-400 transition">
              Home
            </a>
            <a href="/about" className="hover:text-blue-400 transition">
              About
            </a>
            <a href="/research" className="hover:text-blue-400 transition">
              Research
            </a>
            <a href="/experience" className="hover:text-blue-400 transition">
              Experience
            </a>
            <a href="/projects" className="hover:text-blue-400 transition">
              Projects
            </a>
            <a href="/contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </div>
        </nav>

        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}