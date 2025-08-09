import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FinLense - Smart Finance Vision",
  description: "Democratize personal finance management through AI-powered insights and intelligent budgeting",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} bg-black text-white`} suppressHydrationWarning>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}