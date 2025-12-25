'use client';

import { useEffect, useState } from "react";
import DesktopNav from "./desktopNav";
import Logo from "./headerLogo";
import MobileNav from "./mobileNav";
import { IoMdMenu } from "react-icons/io";
import { usePathname } from "next/navigation";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const headersLinks = [
        { title: 'MATCHES', href: '/matches' },
        { title: 'SQUAD', href: '/squad' },
        { title: 'LEGENDS', href: '/legends' },
        { title: 'SHOP', href: '/shop' },
        { title: 'ABOUT', href: '/about' },
    ];

    const pathname = usePathname();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
            <div className="w-11/12 mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Logo isScrolled={isScrolled} />

                    {/* Desktop Navigation */}
                    <DesktopNav links={headersLinks} isScrolled={isScrolled} />

                    {/* Mobile Menu Button */}
                    <button
                        className={`lg:hidden p-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                        onClick={() => { setIsMenuOpen(prev => !prev) }}
                    >
                        <IoMdMenu className="size-6" />
                    </button>
                </div>

                {/* Mobile Navigation */}
                <MobileNav links={headersLinks} isMenuOpen={isMenuOpen} />
            </div>
        </header>
    )
}

export default Header;