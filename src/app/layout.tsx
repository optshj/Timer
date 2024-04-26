import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../_components/Header/Header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

export const metadata: Metadata = {
  title: "Death Timer",
  description: "When do you think people die?",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header/>
        {children}
        </body>
    </html>
  );
}