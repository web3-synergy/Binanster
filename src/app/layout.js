import { Red_Hat_Display, Lexend, Barlow, Noto_Sans_Devanagari } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";

// ✅ server metadata
export const metadata = {
  title: "Binanster",
  description: "Binanster",
};

// ✅ Google fonts
const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-redhat",
  
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});
const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "700"],
  variable: "--font-devanagari",
});

// ✅ Root layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${redHatDisplay.variable} ${lexend.variable} ${barlow.variable}`}
      >
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}