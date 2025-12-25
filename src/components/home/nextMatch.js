import Image from "next/image";
import Link from "next/link";

const NextMatch = () => {
    return (
        <section className="py-16 bg-gray-800 text-white">
            <div className="w-11/12 mx-auto px-4">
                <div className="bg-gradient-to-r from-gray-900 to-yellow-900 rounded-2xl p-8 md:p-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className="text-center lg:text-left mb-8 lg:mb-0">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">NEXT MATCH</h2>
                            <div className="text-xl md:text-2xl font-semibold mb-2">Real Madrid vs FC Barcelona</div>
                            <div className="text-gray-300">La Liga - Matchday 26</div>
                            <div className="text-gray-300">Santiago Bernabéu • March 10, 2024 • 21:00 CET</div>
                        </div>
                        <div className="flex items-center space-x-8">
                            <div className="text-center">
                                <div className="bg-white rounded-full shadow-lg size-24 flex justify-center items-center">
                                    <Image
                                        src="/images/clubLogos/realMadridLogo.png"
                                        alt="Real Madrid"
                                        width={64}
                                        height={64}
                                    />
                                </div>
                                <div className="mt-2 font-bold">REAL MADRID</div>
                            </div>

                            <div className="text-center">
                                <div className="text-4xl font-bold">VS</div>
                                <div className="text-gray-300 mt-2">El Clásico</div>
                            </div>

                            <div className="text-center">
                                <div className="bg-white rounded-full size-24 flex justify-center items-center shadow-lg">
                                    <Image
                                        src="/images/clubLogos/barcelonaLogo.png"
                                        alt="FC Barcelona"
                                        width={64}
                                        height={64}
                                    />
                                </div>
                                <div className="mt-2 font-bold">BARCELONA</div>
                            </div>
                        </div>
                        <div className="mt-8 lg:mt-0">
                            <Link href={'/tickets'} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-block">BUY TICKETS</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NextMatch;