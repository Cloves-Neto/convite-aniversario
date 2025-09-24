import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Convite de Aniversário Andressa",
  description: "Convite de aniversário da andressa 22 anos.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
