import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen">
      <body className="flex flex-col min-w-[345px] min-h-screen">
        {/* <Navbar /> */}
        <div className="relative flex items-center grow py-[80px] px-[12px] sm:px-[24px]">
          {children}
        </div>
      </body>
    </html>
  );
}
