import Link from 'next/link';
const DesktopNav = ({ links, isScrolled }) => {
    return (
        <nav className="hidden lg:flex items-center space-x-8">
            {
                links.map(link => <Link key={link.title} href={link.href} className={`font-medium transition-colors hover:text-yellow-500 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                    {link.title}
                </Link>)
            }
            <Link href={'/tickets'} className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md inline-block'>TICKETS</Link>
        </nav>
    )
}

export default DesktopNav;