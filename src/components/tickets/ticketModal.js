import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

const TicketModal = ({ match, onClose, previousPathname }) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="relative">
                    {/* Header */}
                    <div className="bg-gray-900 text-white p-8 rounded-t-2xl flex justify-between items-start">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">
                                {match.homeTeam} vs {match.awayTeam}
                            </h2>
                            <p className="text-yellow-400 text-xl mb-1">
                                {match.competition} • {match.category}
                            </p>
                            <p className="text-gray-300">
                                {new Date(match.date).toLocaleDateString('en-US', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })} • {match.time}
                            </p>
                            <p className="text-gray-300">{match.venue}</p>
                        </div>
                        <button onClick={onClose}>
                            <IoMdCloseCircleOutline
                                className="text-white hover:text-yellow-400 size-7"
                            />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Ticket Options */}
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                                    SELECT TICKET TYPE
                                </h3>
                                <div className="space-y-4">
                                    {Object.entries(match.ticketPrices).map(([category, price]) => (
                                        <div key={category} className="border-2 border-gray-200 hover:border-yellow-500 rounded-xl p-6 transition-all duration-300 cursor-pointer group">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-lg font-bold text-gray-800 capitalize">
                                                    {category} Category
                                                </span>
                                                <span className="text-2xl font-bold text-yellow-600">€{price}</span>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-4">
                                                {category === 'vip' && 'Premium seating with hospitality access'}
                                                {category === 'premium' && 'Excellent views with comfortable seating'}
                                                {category === 'standard' && 'Great views at affordable prices'}
                                                {category === 'economy' && 'Budget-friendly options with good atmosphere'}
                                            </p>
                                            <Link
                                                href={{
                                                    pathname: '/invoice',
                                                    query: { productName: `${match.homeTeam}-${match.awayTeam} ${category.toUpperCase()} ticket`, price, previousPathname }
                                                }}
                                                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform group-hover:scale-105 inline-block text-center">
                                                SELECT SEATS
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Match Info & Benefits */}
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-gray-800">MATCH INFORMATION</h3>
                                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                                    <h4 className="font-bold text-lg mb-4">Stadium Guidelines</h4>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-center">
                                            <FaRegCheckCircle className="size-5 text-green-500 mr-2" />
                                            Digital tickets accepted
                                        </li>
                                        <li className="flex items-center">
                                            <FaRegCheckCircle className="size-5 text-green-500 mr-2" />
                                            Arrive 30 minutes before kickoff
                                        </li>
                                        <li className="flex items-center">
                                            <FaRegCheckCircle className="size-5 text-green-500 mr-2" />
                                            Bags smaller than A4 size only
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                                    <h4 className="font-bold text-lg mb-4 text-yellow-800">Member Benefits</h4>
                                    <ul className="space-y-2 text-yellow-700">
                                        <li>• Early access to ticket sales</li>
                                        <li>• 10% discount for Madridistas</li>
                                        <li>• Priority for big matches</li>
                                        <li>• Exclusive member areas</li>
                                    </ul>
                                    <button className="w-full bg-gray-800 hover:bg-black text-white font-bold py-3 px-4 rounded-lg mt-4 transition-colors">
                                        BECOME A MADRIDISTA
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketModal;