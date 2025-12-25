import Image from "next/image";

const PlayerCard = ({ player, openModalMethod }) => {
    return (
        <div
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer transform hover:scale-105 w-[23%] max-lg:min-w-60 max-sm:w-full"
            onClick={() => openModalMethod(player)}
        >
            {/* Player Image */}
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={player.image}
                    alt={player.name}
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    fill
                />
                <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    #{player.number}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{player.name}</h3>
                    <p className="text-yellow-400 text-sm">{player.type}</p>
                </div>
            </div>

            {/* Player Info */}
            <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-600 text-sm">{player.nationality}</span>
                    <span className="text-gray-600 text-sm">Age: {player.age}</span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-gray-100 rounded p-2">
                        <div className="font-bold text-gray-800">{player.stats.appearances}</div>
                        <div className="text-gray-600">Apps</div>
                    </div>
                    <div className="bg-gray-100 rounded p-2">
                        <div className="font-bold text-gray-800">{player.stats.abilityNumber}</div>
                        <div className="text-gray-600">{player.stats.abilityName}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerCard;