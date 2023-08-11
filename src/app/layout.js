import "./globals.css";
import { Bubblegum_Sans } from "next/font/google";

const Bubblegum = Bubblegum_Sans({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={Bubblegum.className}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
