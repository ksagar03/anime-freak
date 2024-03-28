import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
const dmsans = DM_Sans({ subsets: ["latin"] });
import Head from "next/head";

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
      </Head>
      <html lang="en">
        <body className={dmsans.className}>
          <AppRouterCacheProvider>
            <main className=" flex flex-col h-screen justify-between">
              {children}
              <Footer />
            </main>
          </AppRouterCacheProvider>
        </body>
      </html>
    </>
  );
}
