import { IoLogoYoutube } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import Image from "next/image";


const ClubFooterInfo = () => {

    const socialLinks = [
        { title: <PiInstagramLogoFill className="size-5" />, href: 'https://www.instagram.com/realmadrid' },
        { title: <FaTwitter className="size-5" />, href: 'https://twitter.com/realmadrid' },
        { title: <IoLogoYoutube className="size-5" />, href: 'https://www.youtube.com/@realmadrid' },
        { title: <FaTelegramPlane className="size-5" />, href: 'https://telegram.me/s/real_madrid' },
    ];


    return (
        <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
                <div className="size-16 mr-4">
                    <Image
                        src={'/images/clubLogos/realMadridLogo.png'}
                        alt="Real Madrid Logo"
                        width={48}
                        height={48}
                        className="object-cover" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold">REAL MADRID CF</h3>
                    <p className="text-yellow-400">¡Hala Madrid!</p>
                </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
                Founded in 1902, Real Madrid Club de Fútbol has become the most successful
                football club in the world, known for its rich history, legendary players,
                and unwavering commitment to excellence.
            </p>
            <div className="flex space-x-4">
                {
                    socialLinks.map(link => <a key={link.href} href={link.href} className="bg-gray-800 hover:bg-yellow-400 p-3 rounded-full transition-colors">{link.title}</a>)
                }
            </div>
        </div>
    )
}

export default ClubFooterInfo;