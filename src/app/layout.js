import "./globals.css";
import { DM_Sans } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Primehold",
  description: "Discover Our Exclusive Collection of Premium Furniture",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: 'https://i.pinimg.com/originals/73/9a/d4/739ad4f69b21ba2d2e0dc927a31e22eb.png',
        href: 'https://i.pinimg.com/originals/73/9a/d4/739ad4f69b21ba2d2e0dc927a31e22eb.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: 'https://i.pinimg.com/originals/73/9a/d4/739ad4f69b21ba2d2e0dc927a31e22eb.png',
        href: 'https://i.pinimg.com/originals/73/9a/d4/739ad4f69b21ba2d2e0dc927a31e22eb.png',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
