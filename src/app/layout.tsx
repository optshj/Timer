import RootStyleRegistry from "../_lib/registy";
import DarkmodeScript from "../_script/DarkmodeScript";
import ClientApp from "./ClientApp";

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <RootStyleRegistry>
            <DarkmodeScript/>
        <ClientApp>
          {children}
        </ClientApp>
      </RootStyleRegistry>
    </html>
  );
}