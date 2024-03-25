import type { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://groove-glimmer.vercel.app"),
    alternates: {
        canonical: new URL("https://groove-glimmer.vercel.app"),
    },
    title: "Groove Glimmer - Enhance the accessibility of your color palette",
    authors: [{ name: "Victor Jesús Rosario Vásquez", url: "https://victorrosario1890.vercel.app" }],
    description: "Groove Glimmer is a tool that helps you enhance the accessibility of your color palette by providing suggestions for foreground and background colors.",
    keywords: ["accessibility", "color", "contrast", "palette", "foreground", "background", "suggestions", "groove", "glimmer"],
    robots: {
        follow: true,
        index: true,
    },
    appleWebApp: {
        title: "Groove Glimmer",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "Groove Glimmer",
        description: "Groove Glimmer is a tool that helps you enhance the accessibility of your color palette by providing suggestions for foreground and background colors.",
        title: "Groove Glimmer - Enhance the accessibility of your color palette",
        url: "https://groove-glimmer.vercel.app",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Groove Glimmer - Enhance the accessibility of your color palette",
            },
        ],
    },
    icons: [
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/favicon-32x32.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/favicon-16x16.png",
        },
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            url: "/apple-touch-icon.png",
        },
        {
            rel: "manifest",
            url: "/site.webmanifest",
        }
    ]
}