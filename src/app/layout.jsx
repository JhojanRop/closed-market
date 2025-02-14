import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Closed Market",
  description: "Like free market, but closed.",
};

function Header () {
  return (
    <header className="w-full p-4 bg-matisse-500 text-white text-center">
      <h1 className="text-2xl font-semibold text-left">Closed market</h1>
    </header>
  );
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col h-screen">
          <Header />
          <div className="container flex-grow mx-auto">
            <main className="w-full h-full flex justify-center items-center">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
