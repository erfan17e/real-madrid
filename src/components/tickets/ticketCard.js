import Image from "next/image";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

const TicketCard = ({ match, openModalMethod }) => {
    const [isLike, setIsLike] = useState(false);
    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group min-w-72 max-sm:w-full w-[30%]">
            {/* Match Header */}
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={match.image}
                    alt={`${match.homeTeam} vs ${match.awayTeam}`}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

                {/* Match Badge */}
                <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {match.category}
                    </span>
                </div>

                {/* Availability */}
                <div className="absolute top-4 right-4">
                    <span className={`bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold ${match.availability === 'Available' ? 'text-blue-500' : 'text-red-500'}`}>
                        {match.availability}
                    </span>
                </div>

                {/* Match Info Overlay */}
                <div className="absolute bottom-4 left-4 ">
                    <h3 className="text-white text-xl font-bold mb-1">
                        {match.homeTeam} vs {match.awayTeam}
                    </h3>
                    <p className="text-yellow-400 text-sm">{match.competition}</p>
                    <p className="text-gray-300 text-sm">
                        {
                            new Date(match.date).toLocaleDateString('en-US',
                                {
                                    weekday: 'short',
                                    month: 'short',
                                    day: 'numeric'
                                })
                        } • {match.time}
                    </p>
                </div>
            </div>

            {/* Match Details */}
            <div className="p-6">
                <div className="mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                        <MdOutlineLocationOn className="size-4" />
                        {match.venue}
                    </div>
                </div>

                {/* Price Range */}
                <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">Prices from</div>
                    <div className="text-2xl font-bold text-gray-800">
                        €{Math.min(...Object.values(match.ticketPrices))}
                        <span className="text-sm text-gray-500 font-normal ml-1">+</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    <button
                        onClick={() => openModalMethod(match)}
                        className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                        LEARN MORE
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-lg transition-colors"
                        onClick={() => { setIsLike(prev => !prev) }}>
                        {
                            isLike ?
                                <FaHeart className="size-5 text-red-500" /> :
                                <FaRegHeart className="size-5" />
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TicketCard;