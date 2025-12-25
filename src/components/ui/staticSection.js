const StaticSection = ({ data, title }) => {
    return (
        <div className="w-full mt-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">{title}</h2>
            <div className="flex items-center justify-center flex-wrap gap-2.5">
                {data.map(item => (
                    <div key={item.label} className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100 min-w-72 flex-1 h-36 flex justify-center items-center">
                        <div>
                            <div className={`text-3xl font-bold mb-2 ${item.color || 'text-gray-800'}`}>
                                {item.value}
                            </div>
                            <div className="text-gray-600 font-medium">{item.label}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StaticSection;