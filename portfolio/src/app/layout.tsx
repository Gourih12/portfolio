import "./globals.css";


export const metadata = {
  title: "Gouri |Interactive Portfolio",
  description: "Fun, Interactive"
};


export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
       
          {children}
       
      </body>
    </html>
  );
}



