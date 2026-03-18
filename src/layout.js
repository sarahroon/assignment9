import "./globals.css";

export const metadata = {
  title: "Assignment 9",
  description: "Next.js 13 app example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
