import type { Metadata } from "next";
import { Noto_Sans, Poppins } from "next/font/google";
import "../globals.css";
import clsx from "clsx";
import Nav from "../../components/layout/Nav";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Tabs from "../../components/layout/Tabs";
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
  const bodyClasses = clsx(poppins.variable, notoSans.variable, "font-noto", "bg-zinc-100", "min-w-[360px]")

  return (
    <html lang="en">
      <body className={bodyClasses}>
        <Nav />
        {children}
        <Tabs />
      </body>
    </html>
  );
}
