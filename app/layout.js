import { DM_Sans } from "next/font/google";
import "./globals.css";
import NavAndBanner from "./_components/_nav&banner/NavAndBanner";
import Footer from "./_footer/Footer";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Donation",
  description: "Donation Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!bg-[#EFF2F2]">
      <body className={dmsans.className}>
        <NavAndBanner />

        {children}
        <Footer/>
      </body>
    </html>
  );
}
