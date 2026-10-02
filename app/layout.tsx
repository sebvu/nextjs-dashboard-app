import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
        // grammarly bullshit
        data-new-gr-c-s-check-loaded="8.937.0"
        data-gr-ext-installed=""
      >
        {children}
      </body>
    </html>
  );
}
