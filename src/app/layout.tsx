import RootStyleRegistry from "../_lib/registy";
import DarkmodeScript from "../_script/DarkmodeScript";
import ClientApp from "./ClientApp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:'LifeTimer',
}


export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <head>
        <DarkmodeScript/>
      </head>
      <RootStyleRegistry>
        <ClientApp>
          {children}
        </ClientApp>
      </RootStyleRegistry>
    </html>
  );
}