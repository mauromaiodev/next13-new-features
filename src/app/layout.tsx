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
        <h1>Root Layout</h1>
        {children}
      </body>
    </html>
  );
}
