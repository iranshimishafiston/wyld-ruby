import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const england = localFont({
    variable: "--font-cursive",
    src: [
        {
            path: "../fonts/england.otf",
        },
    ],
    display: "swap",
});
const epilogue = Epilogue({
    variable: "--font-main",
    weight: ["400", "600", "800"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Wyld Ruby | Bold Red Model Gallery",
    description:
        "Wyld Ruby is a crimson‑toned, scroll-driven gallery showcasing a bold, sensual model through five intimate editorial frames.",
    icons: {
        icon: [
            {
                url: "/icon.svg",
                type: "image/svg+xml",
            },
            {
                url: "/favicon.ico",
                sizes: "any",
            },
        ],
        apple: "/apple-icon.png",
    },
    authors: [{ name: "rudra-xi", url: "https://rudra-geek-nook.vercel.app/" }],
    creator: "rudra-xi",
    keywords: [
        "model portfolio",
        "bold model photography",
        "red themed gallery",
        "fashion model",
        "editorial portrait",
    ],
    openGraph: {
        title: "Wyld Ruby — Bold Red Model Gallery",
        description:
            "A minimal, scroll-driven experience featuring a fearless, sensual model rendered in deep crimson tones.",
        url: "https://wyld-ruby.vercel.app/",
        type: "website",
        siteName: "Wyld Ruby",
        images: [
            {
                url: "https://wyld-ruby.vercel.app/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Wyld Ruby – bold red model portrait in shadow and crimson light",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Wyld Ruby | Bold Red Model Gallery",
        description:
            "Five-frame, scroll-first model experience drenched in ruby reds and shadow.",
        creator: "rudra-xi",
        images: ["https://wyld-ruby.vercel.app/og-image.jpg"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${england.variable} ${epilogue.variable} antialiased`}
            >
                <main>{children}</main>
            </body>
        </html>
    );
}
