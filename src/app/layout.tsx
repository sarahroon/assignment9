import { ClerkProvider } from "@clerk/nextjs";
import Nav from "./components/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Nav /> {/* ← Adds the navigation bar to every page */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
