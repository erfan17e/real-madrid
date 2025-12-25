import Link from "next/link";

const MobileNav = ({ links, isMenuOpen }) => {
    return (
        <>
            {isMenuOpen && (
                <div className="lg:hidden mt-4 bg-white rounded-lg shadow-xl p-4">
                    <div className="flex flex-col space-y-4">
                        {
                            links.map(link => <Link key={link.title} href={link.href} className="text-gray-700 hover:text-yellow-500 font-medium py-2 transition-colors">
                                {link.title}
                            </Link>)
                        }
                        <Link href={'/tickets'} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-full transition-colors w-full inline-block text-center">TICKETS</Link>
                    </div>
                </div>
            )}
        </>
    )
}

export default MobileNav;