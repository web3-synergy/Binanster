import { Red_Hat_Display, Lexend, Barlow } from "next/font/google";
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
  variable: "--font-red-hat-display",
  display: "swap",
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