import Image from "next/image";

const LegendCard = ({ legend, openModalMethod }) => {
    return (
        <div
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer transform hover:scale-105 w-[30%] max-lg:min-w-80 max-md:w-full"
            onClick={() => openModalMethod(legend)}
        >
            {/* Legend Image */}
            <div className="relative h-80 overflow-hidden">
                <Image
                    src={legend.image}
                    alt={legend.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    fill
                />

                {/* Era Badge */}
                <div className="absolute top-4 left-4">
                    {legend.type === 'classic' && (
                        <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                            CLASSIC
                        </span>
                    )}
                    {legend.type === 'modern' && (
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                            MODERN
                        </span>
                    )}
                    {legend.type === 'contemporary' && (
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                            CONTEMPORARY
                        </span>
                    )}
                </div>

                {/* Legend Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{legend.name}</h3>
                    <p className="text-yellow-400 text-lg mb-1">{legend.position}</p>
                    <p className="text-gray-300 text-sm">{legend.years}</p>
                </div>
            </div>

            {/* Stats */}
            <div className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-gray-800">{legend.appearances}</div>
                        <div className="text-gray-600 text-sm">Apps</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-gray-800">{legend.goals}</div>
                        <div className="text-gray-600 text-sm">Goals</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-gray-800">{legend.trophies}</div>
                        <div className="text-gray-600 text-sm">Trophies</div>
                    </div>
                </div>

                {/* Quick Highlights */}
                <div className="mt-4">
                    <div className="text-sm text-gray-600 line-clamp-2">
                        {legend.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LegendCard;