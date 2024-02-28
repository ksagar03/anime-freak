import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Anime freak",
  description: " check out your all favorite all anime in one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmsans.className}>
        <main className=" max-w-7xl">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
