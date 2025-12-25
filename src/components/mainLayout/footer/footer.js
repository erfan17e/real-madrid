import BottomFooter from "./bottomFooter";
import ClubFooterInfo from "./clubFooterInfo";
import FooterContactInfo from "./footerContactInfo";
import QuickFooterLinks from "./quickFooterLinks";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="w-11/12 mx-auto px-4">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Club Info */}
                    <ClubFooterInfo />

                    {/* Quick Links */}
                    <QuickFooterLinks />

                    {/* Contact Info */}
                    <FooterContactInfo />
                </div>

                {/* Bottom Footer */}
                <BottomFooter />
            </div>
        </footer>
    )
}

export default Footer;