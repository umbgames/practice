import "./globals.css";

export const metadata = {
  title: "Maskido Virtual Innovation Lab",
  description: "Maskido Virtual Innovation Lab – learn, build, simulate and innovate.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
