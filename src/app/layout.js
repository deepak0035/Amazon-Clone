import "./globals.css";
import { amazonEmberFont } from "@/utils/Fonts";
import favIcon from "../../public/images/amazon.png";
import { getServerSession } from "next-auth/next";
import SessionProvider from "@/components/SessionProvider";
import Provider from "@/components/reduxProvider";

export const metadata = {
  title: "Amazon.com. Spend less. Smile more.",
  description: "Generated by create next app",
  icons: [{ rel: "icon", url: favIcon.src }],
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
        <body className={amazonEmberFont.className}>
          <SessionProvider session={session}>
            <Provider>{children}</Provider>
          </SessionProvider>
        </body>
    </html>
  );
}
