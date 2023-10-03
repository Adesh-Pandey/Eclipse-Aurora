import { ContextProvider } from "@/contexts";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fun with Eclipse",
  description: "By Eclipse Aurora",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-300">
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
