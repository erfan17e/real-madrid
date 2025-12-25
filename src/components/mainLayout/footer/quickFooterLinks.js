import Link from "next/link";

const QuickFooterLinks = () => {

    const linksInfo = [
        { title: 'MATCHES', href: '/matches' },
        { title: 'SQUAD', href: '/squad' },
        { title: 'LEGENDS', href: '/legends' },
        { title: 'SHOP', href: '/shop' },
        { title: 'ABOUT', href: '/about' },
    ];

    return (
        <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-400">QUICK LINKS</h4>
            <ul className="space-y-3">
                {
                    linksInfo.map(link => <li key={link.title}>
                        <Link href={link.href} className="text-gray-400 hover:text-yellow-400 transition-colors">
                            {link.title}
                        </Link>
                    </li>)
                }

            </ul>
        </div>
    )
}

export default QuickFooterLinks;