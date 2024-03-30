import { DM_Sans, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
const dmsans = DM_Sans({ subsets: ["latin"] });
const robot = Roboto_Mono({ subsets: ["latin"] });
import Head from "next/head";

// })
export const metadata = {
  title: "Anime freak",
  description: " check out your all favorite all anime in one place",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link className="rounded-full" rel="icon" href="/icon.ico"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <html lang="en">
        <body className="{robot.className}">
          <AppRouterCacheProvider>
            <main className=" flex  flex-col h-screen justify-between">
              {children}
              <Footer />
            </main>
          </AppRouterCacheProvider>
        </body>
      </html>
    </>
  );
}
