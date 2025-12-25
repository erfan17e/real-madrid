import Image from "next/image";
import { IoMdCloseCircleOutline } from "react-icons/io";

const LegendModal = ({ legend, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="relative">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-gray-900 to-yellow-900 text-white p-8 rounded-t-2xl">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-4xl font-bold mb-2">{legend.name}</h2>
                                <p className="text-yellow-400 text-2xl mb-2">{legend.position}</p>
                                <p className="text-gray-300 text-lg">{legend.years} • {legend.nationality}</p>
                            </div>
                            <button onClick={onClose}>
                                <IoMdCloseCircleOutline
                                    className="text-white hover:text-yellow-400 size-7"
                                />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Legend Image */}
                            <div className="lg:w-2/5">
                                <div className="w-full h-96 relative">
                                    <Image
                                        src={legend.image}
                                        alt={legend.name}
                                        className="object-cover rounded-xl shadow-2xl"
                                        fill
                                    />
                                </div>

                            </div>

                            {/* Legend Details */}
                            <div className="lg:w-3/5">
                                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                    {legend.description}
                                </p>

                                {/* Career Statistics */}
                                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Career Statistics</h3>
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-yellow-600">{legend.appearances}</div>
                                            <div className="text-gray-600">Appearances</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-yellow-600">{legend.goals}</div>
                                            <div className="text-gray-600">Goals</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-yellow-600">{legend.trophies}</div>
                                            <div className="text-gray-600">Trophies</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-yellow-600">
                                                {(legend.goals / legend.appearances).toFixed(2)}
                                            </div>
                                            <div className="text-gray-600">Goals/Game</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Career Highlights */}
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Career Highlights</h3>
                                    <ul className="space-y-3">
                                        {legend.highlights.map((highlight, index) => (
                                            <li key={index} className="flex items-center">
                                                <div className="size-2 bg-yellow-500 rounded-full mr-3"></div>
                                                <span className="text-gray-700">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LegendModal;