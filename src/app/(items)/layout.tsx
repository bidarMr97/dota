import "../globals.css";



export default function RootLayout({
children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <img src="/images/war.jpg" alt="warcraft" className="absolute fixed -z-10 h-full w-full object-cover blur-[3px]" />
        {children}
      </body>
    </html>
  );
}
