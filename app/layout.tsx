import type { Metadata } from "next";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "@fontsource/ibm-plex-mono/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Power Plane, LLC — Custom Electronics & Connected Devices",
  description:
    "Hardware and firmware development for creative projects, research, and small products. PCB design, firmware, prototyping, and consulting.",
  keywords: [
    "electronics",
    "PCB design",
    "firmware",
    "hardware",
    "prototyping",
    "consulting",
  ],
  openGraph: {
    title: "Power Plane, LLC",
    description: "Custom electronics & connected devices",
    url: "https://powerplane.co",
    siteName: "Power Plane",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-mono antialiased">{children}</body>
    </html>
  );
}
