import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Free Patient Acquisition Strategy Consultation | Prashaant Biz",
  description: "Book a free 1:1 patient acquisition strategy consultation and receive a customized digital growth roadmap for your clinic.",
  openGraph: {
    title: "Free Patient Acquisition Strategy Consultation",
    description: "A customized digital growth roadmap for your clinic.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body suppressHydrationWarning>{children}</body></html>;
}
