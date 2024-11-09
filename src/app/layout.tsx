import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Portfolio",
   description: "Muhammad Hamdan Bhatti Portfolio",
};

const poppins = Poppins({
   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
   subsets: ["latin"],
});

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={poppins.className}>
            <main>
               <Header />
               {children}
               <Footer />
            </main>
         </body>
      </html>
   );
}
