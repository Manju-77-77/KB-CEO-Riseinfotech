
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://kumareshbidari.com"),

  title: {
    default:
      "Kumaresh Bidari | Founder & CEO | SAP S/4HANA Consultant",
    template: "%s | Kumaresh Bidari",
  },

  description:
    "Founder & CEO of Rise Infotech. SAP S/4HANA Consultant, Corporate Trainer and Enterprise Transformation Expert with experience at TCS, IBM and NTT DATA.",

  keywords: [
    "Kumaresh Bidari",
    "Rise Infotech",
    "SAP Consultant",
    "SAP S4HANA",
    "SAP MM",
    "SAP FICO",
    "SAP SD",
    "SAP ABAP",
    "ERP Consultant",
    "SAP Training",
    "SAP Placement",
    "Corporate SAP Training",
    "SAP Bengaluru",
    "SAP Career Guidance",
    "Enterprise Transformation",
  ],

  authors: [
    {
      name: "Kumaresh Bidari",
    },
  ],

  creator: "Kumaresh Bidari",

  publisher: "Rise Infotech",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://kumareshbidari.com",
  },

  openGraph: {
    title:
      "Kumaresh Bidari | Founder & CEO | SAP Consultant",

    description:
      "Founder & CEO of Rise Infotech helping organizations and professionals achieve excellence through SAP innovation and enterprise transformation.",

    url: "https://kumareshbidari.com",

    siteName: "Kumaresh Bidari",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kumaresh Bidari - Founder & CEO",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Kumaresh Bidari | Founder & CEO | SAP Consultant",

    description:
      "SAP S/4HANA Consultant, Corporate Trainer and Founder of Rise Infotech.",

    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}

