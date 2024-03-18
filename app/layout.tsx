import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://myportfolio-ahthe.vercel.app"),

	title: "Syed Ahthesham Ali",
	authors: {
		name: "Syed Ahthesham Ali",
	},

	description:
		"I'm a recent CS grad passionate about web dev and problem-solving. Seeking entry-level role to learn and grow. Let's connect!",
	openGraph: {
		title: "Syed Ahthesham Ali",
		description:
		"I'm a recent CS grad passionate about web dev and problem-solving. Seeking entry-level role to learn and grow. Let's connect!",
		url: "https://myportfolio-ahthe.vercel.app",
		siteName: "My Portfolio-Ahthesham",
		images: "/og.png",
		type: "website",
	},
	keywords: ["daily web coding", "ahthesham", "programming", "software developer", "portfolio", "portfolio website"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>  
      <ThemeProvider // ctrl . to auto import 
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  );
}
