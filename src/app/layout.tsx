import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "VibeCode49 | Van idee naar verkoopbare software",
  description: "Bouw tijdens VibeCode49 je eerste software-MVP en krijg het raamwerk om van idee naar lancering, klanten, schaal and exit te gaan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=JetBrains+Mono:wght@300;400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        <Script id="tailwind-config" strategy="beforeInteractive">
          {`
            tailwind.config = {
              darkMode: 'class',
              theme: {
                extend: {
                  colors: {
                    obsidian: '#0B0C0E',
                    graphite: '#1A1D21',
                    paper: '#F2E8DC',
                    ink: '#1A231C',
                    tungsten: '#D1D5DB',
                    heritage: '#F2E8DC',
                    accent: '#D99036',
                    'accent-dark': '#2A1B0A',
                    'accent-light': '#F2A949',
                  },
                  fontFamily: {
                    serif: ['Cinzel', 'serif'],
                    subserif: ['Cormorant Garamond', 'serif'],
                    mono: ['JetBrains Mono', 'monospace'],
                  }
                }
              }
            }
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
