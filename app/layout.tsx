import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider"


export const metadata: Metadata = {
  title: "Magnetora",
  description: "A full stack project by Anshuman Mishra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Header/>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
