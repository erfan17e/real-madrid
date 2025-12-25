import Image from "next/image";
import { IoMdCloseCircleOutline } from "react-icons/io";

const PlayerModal = ({ player, onClose }) => {

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="relative">
                    {/* Header */}
                    <div className="bg-gray-900 text-white p-6 rounded-t-2xl">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-3xl font-bold">{player.name}</h2>
                                <p className="text-yellow-400 text-xl">{player.type}</p>
                            </div>
                            <button onClick={onClose}>
                                <IoMdCloseCircleOutline
                                    className="text-white hover:text-yellow-400 size-7"
                                />
                            </button>
                        </div>
                        <div className="flex items-center space-x-4 mt-4">
                            <div className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-full font-bold text-lg">
                                #{player.number}
                            </div>
                            <div className="text-gray-300">
                                {player.nationality} • {player.age} years • {player.height} cm
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <div className="flex flex-col lg:flex-row gap-6">
                            {/* Player Image */}
                            <div className="lg:w-1/3 relative">
                                <Image
                                    src={player.image}
                                    alt={player.name}
                                    className="object-cover rounded-xl shadow-lg"
                                    fill
                                />
                            </div>

                            {/* Player Details */}
                            <div className="lg:w-2/3">
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <div className="text-gray-600 text-sm">Joined</div>
                                        <div className="font-bold text-lg">{player.joined}</div>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <div className="text-gray-600 text-sm">Height</div>
                                        <div className="font-bold text-lg">{player.height}</div>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <div className="text-gray-600 text-sm">Nationality</div>
                                        <div className="font-bold text-lg">{player.nationality}</div>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <div className="text-gray-600 text-sm">Age</div>
                                        <div className="font-bold text-lg">{player.age}</div>
                                    </div>
                                </div>

                                {/* Statistics */}
                                <h3 className="text-xl font-bold mb-4">Season Statistics</h3>
                                {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4"> */}
                                <div className="flex justify-between">
                                    <div className="w-[48%] bg-yellow-500 text-white rounded-lg p-4 text-center">
                                        <div className="text-2xl font-bold">{player.stats.appearances}</div>
                                        <div className="text-sm">Appearances</div>
                                    </div>
                                    <div className="w-[48%] bg-green-500 text-white rounded-lg p-4 text-center">
                                        <div className="text-2xl font-bold">{player.stats.abilityNumber}</div>
                                        <div className="text-sm">{player.stats.abilityName}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerModal;