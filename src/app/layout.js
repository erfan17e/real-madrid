import "./globals.css";
import Header from "@/components/mainLayout/header/header";
import Footer from "@/components/mainLayout/footer/footer";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <div className="min-h-screen bg-gray-50">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
