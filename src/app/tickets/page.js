'use client';
import SeasonTicketCard from '@/components/tickets/seasonTicketCard';
import StadiumInfo from '@/components/tickets/stadiumInfo';
import TicketCard from '@/components/tickets/ticketCard';
import TicketModal from '@/components/tickets/ticketModal';
import PageTitle from '@/components/ui/pageTitle';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const Tickets = () => {
    const previousPathname = usePathname();
    const [selectedTicket, setSelectedTicket] = useState(null);

    const tickets = [
        {
            id: 1,
            date: "2024-03-10",
            time: "21:00 CET",
            competition: "La Liga",
            homeTeam: "Real Madrid",
            awayTeam: "FC Barcelona",
            venue: "Santiago Bernabéu",
            category: "El Clásico",
            ticketPrices: {
                vip: 299,
                premium: 189,
                standard: 89,
                economy: 49
            },
            availability: "Limited",
            image: "/images/tickets/realMadridVsFCBarcelona.webp"
        },
        {
            id: 2,
            date: "2024-03-16",
            time: "18:30 CET",
            competition: "Champions League",
            homeTeam: "Real Madrid",
            awayTeam: "Manchester City",
            venue: "Santiago Bernabéu",
            category: "Quarter Final",
            ticketPrices: {
                vip: 279,
                premium: 169,
                standard: 79,
                economy: 39
            },
            availability: "Limited",
            image: "/images/tickets/realMadridVsManchesterCity.png"
        },
        {
            id: 3,
            date: "2024-03-23",
            time: "16:15 CET",
            competition: "La Liga",
            homeTeam: "Real Madrid",
            awayTeam: "Sevilla FC",
            venue: "Santiago Bernabéu",
            category: "League Match",
            ticketPrices: {
                vip: 199,
                premium: 129,
                standard: 59,
                economy: 29
            },
            availability: "Available",
            image: "/images/tickets/realMadridVsSevillaFC.jpg"
        },
        {
            id: 4,
            date: "2024-04-06",
            time: "21:00 CET",
            competition: "La Liga",
            homeTeam: "Real Madrid",
            awayTeam: "Atletico Madrid",
            venue: "Santiago Bernabéu",
            category: "Madrid Derby",
            ticketPrices: {
                vip: 259,
                premium: 159,
                standard: 69,
                economy: 35
            },
            availability: "Available",
            image: "/images/tickets/realMadridVsAtleticoMadrid.avif"
        }
    ];

    const staticData = [
        {
            icon: '🛡️',
            title: '100% Guaranteed',
            description: 'Official tickets with full authenticity guarantee'
        },
        {
            icon: '⚡',
            title: 'Instant Delivery',
            description: 'Digital tickets delivered immediately to your email'
        },
        {
            icon: '💰',
            title: 'Best Prices',
            description: 'Official prices without any hidden fees'
        }
    ];

    // const matchesData = {
    //     upcoming: [
    //         {
    //             id: 1,
    //             date: "2024-03-10",
    //             time: "21:00 CET",
    //             competition: "La Liga",
    //             homeTeam: "Real Madrid",
    //             awayTeam: "FC Barcelona",
    //             venue: "Santiago Bernabéu",
    //             category: "El Clásico",
    //             ticketPrices: {
    //                 vip: 299,
    //                 premium: 189,
    //                 standard: 89,
    //                 economy: 49
    //             },
    //             availability: "Limited",
    //             image: "/images/tickets/realMadridVsFCBarcelona.webp"
    //         },
    //         {
    //             id: 2,
    //             date: "2024-03-16",
    //             time: "18:30 CET",
    //             competition: "Champions League",
    //             homeTeam: "Real Madrid",
    //             awayTeam: "Manchester City",
    //             venue: "Santiago Bernabéu",
    //             category: "Quarter Final",
    //             ticketPrices: {
    //                 vip: 279,
    //                 premium: 169,
    //                 standard: 79,
    //                 economy: 39
    //             },
    //             availability: "Good",
    //             image: "/images/tickets/realMadridVsManchesterCity.png"
    //         },
    //         {
    //             id: 3,
    //             date: "2024-03-23",
    //             time: "16:15 CET",
    //             competition: "La Liga",
    //             homeTeam: "Real Madrid",
    //             awayTeam: "Sevilla FC",
    //             venue: "Santiago Bernabéu",
    //             category: "League Match",
    //             ticketPrices: {
    //                 vip: 199,
    //                 premium: 129,
    //                 standard: 59,
    //                 economy: 29
    //             },
    //             availability: "Available",
    //             image: "/images/tickets/realMadridVsSevillaFC.jpg"
    //         }
    //     ],
    //     popular: [
    //         {
    //             id: 4,
    //             date: "2024-04-06",
    //             time: "21:00 CET",
    //             competition: "La Liga",
    //             homeTeam: "Real Madrid",
    //             awayTeam: "Atletico Madrid",
    //             venue: "Santiago Bernabéu",
    //             category: "Madrid Derby",
    //             ticketPrices: {
    //                 vip: 259,
    //                 premium: 159,
    //                 standard: 69,
    //                 economy: 35
    //             },
    //             availability: "Selling Fast",
    //             image: "/images/tickets/realMadridVsAtleticoMadrid.avif"
    //         }
    //     ]
    // };

    // const allMatches = [...matchesData.upcoming, ...matchesData.popular];
    // UPCOMING MATCHES 🎟️📅
    // POPULAR GAMES ⭐⚽️
    // SEASON TICKETS 🎫🔄

    // const tabs = [
    //     { id: 'upcoming', label: 'UPCOMING MATCHES', count: matchesData.upcoming.length },
    //     { id: 'popular', label: 'POPULAR GAMES', count: matchesData.popular.length },
    //     { id: 'packages', label: 'SEASON TICKETS', count: 3 }
    // ];

    // const getMatchesByTab = () => {
    //     if (activeTab === 'upcoming') return matchesData.upcoming;
    //     if (activeTab === 'popular') return matchesData.popular;
    //     return allMatches;
    // };

    // const getAvailabilityColor = (availability) => {
    //     switch (availability) {
    //         case 'Limited': return 'text-red-500';
    //         case 'Selling Fast': return 'text-orange-500';
    //         case 'Good': return 'text-green-500';
    //         case 'Available': return 'text-blue-500';
    //         default: return 'text-gray-500';
    //     }
    // };

    // const MatchCard = ({ match }) => (
    //     <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
    //         {/* Match Header */}
    //         <div className="relative h-48 overflow-hidden">
    //             <img
    //                 src={match.image}
    //                 alt={`${match.homeTeam} vs ${match.awayTeam}`}
    //                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    //             />
    //             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

    //             {/* Match Badge */}
    //             <div className="absolute top-4 left-4">
    //                 <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
    //                     {match.category}
    //                 </span>
    //             </div>

    //             {/* Availability */}
    //             <div className="absolute top-4 right-4">
    //                 <span className={`bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold ${getAvailabilityColor(match.availability)}`}>
    //                     {match.availability}
    //                 </span>
    //             </div>

    //             {/* Match Info Overlay */}
    //             <div className="absolute bottom-4 left-4 right-4">
    //                 <h3 className="text-white text-xl font-bold mb-1">
    //                     {match.homeTeam} vs {match.awayTeam}
    //                 </h3>
    //                 <p className="text-yellow-400 text-sm">{match.competition}</p>
    //                 <p className="text-gray-300 text-sm">
    //                     {new Date(match.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} • {match.time}
    //                 </p>
    //             </div>
    //         </div>

    //         {/* Match Details */}
    //         <div className="p-6">
    //             <div className="flex justify-between items-center mb-4">
    //                 <div className="text-sm text-gray-600">
    //                     <div className="flex items-center">
    //                         <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    //                         </svg>
    //                         {match.venue}
    //                     </div>
    //                 </div>
    //             </div>

    //             {/* Price Range */}
    //             <div className="mb-4">
    //                 <div className="text-sm text-gray-600 mb-2">Prices from</div>
    //                 <div className="text-2xl font-bold text-gray-800">
    //                     €{Math.min(...Object.values(match.ticketPrices))}
    //                     <span className="text-sm text-gray-500 font-normal ml-1">+</span>
    //                 </div>
    //             </div>

    //             {/* Action Buttons */}
    //             <div className="flex space-x-3">
    //                 <button
    //                     onClick={() => setSelectedMatch(match)}
    //                     className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
    //                 >
    //                     BUY TICKETS
    //                 </button>
    //                 <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-lg transition-colors">
    //                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    //                     </svg>
    //                 </button>
    //             </div>
    //         </div>
    //     </div>
    // );

    // const TicketModal = ({ match, onClose }) => (
    //     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    //         <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
    //             <div className="relative">
    //                 {/* Header */}
    //                 <div className="bg-gray-900 text-white p-8 rounded-t-2xl">
    //                     <div className="flex justify-between items-start">
    //                         <div>
    //                             <h2 className="text-3xl font-bold mb-2">{match.homeTeam} vs {match.awayTeam}</h2>
    //                             <p className="text-yellow-400 text-xl mb-1">{match.competition} • {match.category}</p>
    //                             <p className="text-gray-300">
    //                                 {new Date(match.date).toLocaleDateString('en-US', {
    //                                     weekday: 'long',
    //                                     year: 'numeric',
    //                                     month: 'long',
    //                                     day: 'numeric'
    //                                 })} • {match.time}
    //                             </p>
    //                             <p className="text-gray-300">{match.venue}</p>
    //                         </div>
    //                         <button
    //                             onClick={onClose}
    //                             className="text-white hover:text-yellow-400 text-3xl"
    //                         >
    //                             ×
    //                         </button>
    //                     </div>
    //                 </div>

    //                 {/* Content */}
    //                 <div className="p-8">
    //                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    //                         {/* Ticket Options */}
    //                         <div>
    //                             <h3 className="text-2xl font-bold mb-6 text-gray-800">SELECT TICKET TYPE</h3>

    //                             <div className="space-y-4">
    //                                 {Object.entries(match.ticketPrices).map(([category, price]) => (
    //                                     <div key={category} className="border-2 border-gray-200 hover:border-yellow-500 rounded-xl p-6 transition-all duration-300 cursor-pointer group">
    //                                         <div className="flex justify-between items-center mb-2">
    //                                             <span className="text-lg font-bold text-gray-800 capitalize">
    //                                                 {category} Category
    //                                             </span>
    //                                             <span className="text-2xl font-bold text-yellow-600">€{price}</span>
    //                                         </div>
    //                                         <p className="text-gray-600 text-sm mb-4">
    //                                             {category === 'vip' && 'Premium seating with hospitality access'}
    //                                             {category === 'premium' && 'Excellent views with comfortable seating'}
    //                                             {category === 'standard' && 'Great views at affordable prices'}
    //                                             {category === 'economy' && 'Budget-friendly options with good atmosphere'}
    //                                         </p>
    //                                         <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform group-hover:scale-105">
    //                                             SELECT SEATS
    //                                         </button>
    //                                     </div>
    //                                 ))}
    //                             </div>
    //                         </div>

    //                         {/* Match Info & Benefits */}
    //                         <div>
    //                             <h3 className="text-2xl font-bold mb-6 text-gray-800">MATCH INFORMATION</h3>

    //                             <div className="bg-gray-50 rounded-xl p-6 mb-6">
    //                                 <h4 className="font-bold text-lg mb-4">Stadium Guidelines</h4>
    //                                 <ul className="space-y-2 text-gray-600">
    //                                     <li className="flex items-center">
    //                                         <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    //                                         </svg>
    //                                         Digital tickets accepted
    //                                     </li>
    //                                     <li className="flex items-center">
    //                                         <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    //                                         </svg>
    //                                         Arrive 90 minutes before kickoff
    //                                     </li>
    //                                     <li className="flex items-center">
    //                                         <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    //                                         </svg>
    //                                         Bags smaller than A4 size only
    //                                     </li>
    //                                 </ul>
    //                             </div>

    //                             <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
    //                                 <h4 className="font-bold text-lg mb-4 text-yellow-800">Member Benefits</h4>
    //                                 <ul className="space-y-2 text-yellow-700">
    //                                     <li>• Early access to ticket sales</li>
    //                                     <li>• 10% discount for Madridistas</li>
    //                                     <li>• Priority for big matches</li>
    //                                     <li>• Exclusive member areas</li>
    //                                 </ul>
    //                                 <button className="w-full bg-gray-800 hover:bg-black text-white font-bold py-3 px-4 rounded-lg mt-4 transition-colors">
    //                                     BECOME A MADRIDISTA
    //                                 </button>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );

    // const SeasonTicketCard = () => (
    //     <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-2xl p-8 shadow-2xl">
    //         <div className="flex flex-col lg:flex-row items-center justify-between">
    //             <div className="lg:w-2/3 mb-6 lg:mb-0">
    //                 <h3 className="text-3xl font-bold mb-4">2024/25 SEASON TICKETS</h3>
    //                 <p className="text-yellow-100 text-lg mb-4">
    //                     Secure your seat for every home match. Experience the entire season at the Bernabéu with exclusive benefits.
    //                 </p>
    //                 <ul className="space-y-2 text-yellow-100">
    //                     <li>• All 19 La Liga home matches</li>
    //                     <li>• Priority for cup competitions</li>
    //                     <li>• Member-only events</li>
    //                     <li>• Stadium tour included</li>
    //                 </ul>
    //             </div>
    //             <div className="lg:w-1/3 text-center">
    //                 <div className="text-4xl font-bold mb-2">From €699</div>
    //                 <div className="text-yellow-200 mb-4">per season</div>
    //                 <button className="bg-white text-yellow-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
    //                     LEARN MORE
    //                 </button>
    //             </div>
    //         </div>
    //     </div>
    // );

    return (
        <>
            {/* Hero Section */}
            <PageTitle
                title={'GET YOUR TICKETS'}
                description={'Experience the magic of Real Madrid at the Santiago Bernabéu'}
            />

            {/* Main Content */}
            <main className="w-11/12 mx-auto px-4 py-16">

                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    UPCOMING MATCHES
                </h2>
                <div className="flex justify-evenly items-center gap-6 flex-wrap">
                    {tickets.map(match => <TicketCard key={match.id} match={match} openModalMethod={setSelectedTicket} />)}
                </div>

                <SeasonTicketCard previousPathname={previousPathname} />

                {/* Features */}
                <div className="w-full">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                        WHY CHOOSE OFFICIAL TICKETS?
                    </h2>
                    <div className="flex justify-center items-center flex-wrap gap-8">
                        {staticData.map(data => (
                            <div key={data.title} className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 flex-1 min-w-80 h-48">
                                <div className="text-4xl mb-4">{data.icon}</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{data.title}</h3>
                                <p className="text-gray-600">{data.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stadium Info */}
                <StadiumInfo />

            </main>


            {/* Ticket Modal */}
            {selectedTicket && (
                <TicketModal
                    match={selectedTicket}
                    onClose={() => setSelectedTicket(null)}
                    previousPathname={previousPathname}
                />
            )}
        </>
    );
};

export default Tickets;