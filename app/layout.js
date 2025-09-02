import "./globals.css";

export const metadata = {
  title: "IEEE VSSUT",
  description: "IEEE VSSUT: Shaping Future Engineers",
    icons: {
    icon: "/assets/ieeeicon.png", // path from public folder
  },
};

// Layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}


