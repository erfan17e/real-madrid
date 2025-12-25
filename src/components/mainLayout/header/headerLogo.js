import Image from "next/image";
import Link from "next/link";

const HeaderLogo = ({ isScrolled }) => {
    return (
        <div>
            <Link href={'/'} className="flex items-center space-x-3">
                <div className="rounded-full p-0 flex justify-center items-center shadow-md  size-16 md:size-12">
                    <Image
                        width={40}
                        height={40}
                        src={"/images/clubLogos/realMadridLogo.png"}
                        alt="Real Madrid Logo"
                        className="object-cover"
                    />
                </div>
                <div className={`font-bold ${isScrolled ? 'text-gray-800' : 'text-white'} text-xl md:text-2xl`}>
                    REAL MADRID
                </div>
            </Link>
        </div>
    )
}

export default HeaderLogo;