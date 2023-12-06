import "./globals.css";
import { amazonEmberFont } from "@/utils/Fonts";
import favIcon from "../../public/images/amazon.png";
import Provider from "@/components/reduxProvider";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: 'Amazon.com. Spend less. Smile more.',
}

export default async function RootLayout({ children })
{

  return (
    <html lang="en">
      <body className={amazonEmberFont.className}>
        <AuthProvider>
          <Provider>{children}</Provider>
        </AuthProvider>
      </body>
    </html>
  );
}
