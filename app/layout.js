import { Space_Grotesk, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
});

export const metadata = {
  title: "Awab Abedin | Portfolio",
  description:
    "Portfolio of Awab Abedin, a computer science and artificial intelligence student focused on full-stack development, machine learning, and data-driven products.",
  themeColor: "#f8fafc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${sourceSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
