import RootStyleRegistry from "../_lib/registy";
import DarkmodeScript from "../_script/DarkmodeScript";
import ClientApp from "./ClientApp";
import SEO from "./SEO";

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <head>
        <DarkmodeScript/>
      </head>
      <SEO/>
      <RootStyleRegistry>
        <ClientApp>
          {children}
        </ClientApp>
      </RootStyleRegistry>
    </html>
  );
}