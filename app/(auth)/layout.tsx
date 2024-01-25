import type { Metadata } from "next";
import { Noto_Sans, Poppins } from "next/font/google";
import "../globals.css";
import clsx from "clsx";
import Nav from "../components/Nav";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const poppins = Poppins({ display: "swap", weight: ["500", "600"], subsets: ["latin"], variable: '--font-poppins' })
const notoSans = Noto_Sans({ display: "swap", weight: ["300", "400", "500", "600"], subsets: ["latin"], variable: '--font-noto' })

export const metadata: Metadata = {
  title: "Tweeter",
  description: "A X clone (formerly Twitter) built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fonts = clsx(poppins.variable, notoSans.variable, "font-noto", "min-h-dvh", "flex", "flex-col")

  return (
    <html lang="en">
      <body className={fonts}>
        <Nav />
        <main className="mt-5">
          {children}
        </main>
      </body>
    </html>
  );
}
