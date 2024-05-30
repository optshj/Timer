import { Roboto } from "next/font/google";
import RootStyleRegistry from "../_lib/registy";
import ClientApp from "./ClientApp";
import { Metadata } from "next";

export const metadata:Metadata = {
  title:'LifeTimer'
}
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <RootStyleRegistry>
        <body className={roboto.className}>
          <ClientApp>
            {children}
          </ClientApp>
        </body> 
      </RootStyleRegistry>
    </html>
  );
}