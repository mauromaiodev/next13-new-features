import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Template",
  description: "Template para projetos Next 13"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Next 13 Template</h1>

        {children}
      </body>
    </html>
  );
}
