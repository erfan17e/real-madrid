import Image from "next/image";
import Link from "next/link";

const MatchCard = ({ match }) => {
    const date = new Date(match.date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    return (
        <div className={`${match.type === 'live' ? 'basis-full' : 'basis-[48%]'} max-lg:basis-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-[1.02]`}>
            <div className="bg-gray-900 px-6 py-3 relative rounded-t-xl">
                <div className="flex justify-between items-center">
                    <h3 className="text-yellow-400 font-bold">{match.competition}</h3>
                    <div className="text-white text-sm font-bold">
                        {match.type === 'past' && <span className="bg-green-500 px-3 py-1 rounded-full">FT</span>}
                        {match.type === 'live' && <span className="bg-red-500 px-3 py-1 rounded-full">LIVE 67{"'"}</span>}
                        {match.type === 'upcoming' && <span className="bg-blue-500 px-3 py-1 rounded-full">UPCOMING</span>}
                    </div>
                </div>
                <div className="text-sm text-gray-300 mt-1">
                    {`${date} • ${match.venue}`}
                </div>
                {
                    match.type === 'live' && <div className="absolute -top-5 -left-6 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold z-10 animate-pulse">LIVE NOW</div>
                }

            </div>
            <div className="p-6">
                <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center w-4/12 max-sm:flex-col ">
                        <div className="size-12 bg-gray-100 rounded-full flex justify-center items-center">
                            <div className="size-8 bg-gray-300 rounded-full flex justify-center items-center">
                                <Image
                                    src={match.homeTeamLogo}
                                    alt={`${match.homeTeam}-logo`}
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </div>
                        <div className="text-right max-sm:text-center">
                            <div className="font-bold text-lg text-gray-800">{match.homeTeam}</div>
                            {match.homeTeam === 'Real Madrid' && <div className="text-yellow-600 text-sm font-medium">HOME</div>}
                        </div>
                    </div>
                    <div className="w-3/12">
                        {match.type === 'past' &&
                            <div className="flex flex-col justify-center items-center">
                                <div className="text-3xl font-bold text-gray-800">
                                    {match.homeScore} - {match.awayScore}
                                </div>
                                <div className="text-sm text-green-600 font-medium mt-1">Final</div>
                            </div>
                        }
                        {match.type === 'live' &&
                            <div className="flex flex-col justify-center items-center">
                                <div className="text-3xl font-bold text-gray-800">
                                    {match.homeScore} - {match.awayScore}
                                </div>
                            </div>
                        }
                        {match.type === 'upcoming' &&
                            <div className="flex flex-col justify-center items-center">
                                <div className="text-lg font-bold text-gray-600 text-center">
                                    {match.time}
                                </div>
                            </div>
                        }
                    </div>
                    <div className="flex justify-between items-center w-4/12 max-sm:flex-col">
                        <div className="max-sm:text-center">
                            <div className="font-bold text-lg text-gray-800">{match.awayTeam}</div>
                            {match.awayTeam === 'Real Madrid' && <div className="text-yellow-600 text-sm font-medium">AWAY</div>}
                        </div>
                        <div className="size-12 bg-gray-100 rounded-full flex justify-center items-center max-sm: order-first">
                            <div className="size-8 bg-gray-300 rounded-full flex justify-center items-center">
                                <Image
                                    src={match.awayTeamLogo}
                                    alt={`${match.awayTeam}-logo`}
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-100 flex flex-col items-center justify-center mt-6 mb-3 pt-4">
                    {match.type === 'past' &&
                        <a href={match.link} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 inline-block">
                            WATCH HIGHLIGHTS
                        </a>
                    }
                    {match.type === 'live' &&
                        <>
                            <a href={match.link} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 w-fit inline-block">
                                WATCH LIVE
                            </a>
                            <div className="text-sm text-gray-500 mt-3">
                                Broadcast: {match.broadcast}
                            </div>
                        </>
                    }
                    {match.type === 'upcoming' &&
                        <>
                            <Link href={match.link} className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 w-fit inline-block">
                                BUY TICKETS
                            </Link>
                            <div className="text-sm text-gray-500 mt-3">
                                Broadcast: {match.broadcast}
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}


export default MatchCard;