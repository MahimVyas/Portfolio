import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mahimvyas.github.io/Portfolio"),
  title: {
    default: `${profile.name} — AI/ML Engineer`,
    template: `%s — ${profile.name}`,
  },
  description:
    "Portfolio of Mahim Vyas — undergraduate AI/ML engineer building local-first, multi-agent, and browser-native AI systems. Projects in LLM orchestration, RAG, and edge AI.",
  keywords: [
    "Mahim Vyas",
    "AI/ML Engineer",
    "Multi-Agent Systems",
    "Edge AI",
    "WebLLM",
    "LLM Orchestration",
    "Next.js Developer",
    "Portfolio",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — AI/ML Engineer`,
    description: profile.intro,
    url: "https://mahimvyas.github.io/Portfolio",
    siteName: `${profile.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — AI/ML Engineer`,
    description: profile.intro,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#07070d" },
  ],
};

// Runs before first paint: applies the saved theme, or follows the device's
// light/dark preference automatically (and keeps listening for changes).
const themeInitScript = `(function(){try{
  var root=document.documentElement;
  function mode(){return localStorage.getItem("theme")||"system";}
  function apply(m){
    var dark=m==="dark"||(m!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);
    root.classList.toggle("dark",dark);
    root.style.colorScheme=dark?"dark":"light";
  }
  apply(mode());
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",function(){
    if(mode()==="system") apply("system");
  });
  window.setTheme=function(m){localStorage.setItem("theme",m);apply(m);window.dispatchEvent(new Event("theme-change"));};
}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-violet-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
