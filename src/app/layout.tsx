// layout.tsx
import './globals.css'; // ถ้ามีไฟล์ global CSS

export const metadata = {
  title: 'My Profile',
  description: 'Like VS Code, but it’s me.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
