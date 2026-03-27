import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asyncdot | Product Execution Partner",
  description:
    "Build your product faster without hiring a full development team. Founder-led product execution for launch and scale.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
