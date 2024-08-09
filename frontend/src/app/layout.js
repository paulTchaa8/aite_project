import { Inter } from "next/font/google"
import "./globals.css"
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Produits",
  description: "Gestion des produits",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Header />
            {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
