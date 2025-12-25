const MainContent = () => {

    const staticData = [
        {id: 1, number: "15", label: "Champions League Titles" },
        {id: 2, number: "36", label: "La Liga Championships" },
        {id: 3, number: "123", label: "Years of History" },
        {id: 4, number: "30+", label: "International Trophies" },
    ];

    return (
        <div>
            <div className="px-4 py-16">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">Welcome to Real Madrid</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Experience the legacy of the most decorated football club in the world.
                        With 15 Champions League titles and countless domestic trophies,
                        Real Madrid represents excellence, tradition, and passion.
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <section className="py-16">
                <div className="w-11/12 mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {staticData.map(data => (
                            <div key={data.id} className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">{data.number}</div>
                                <div className="text-gray-600 font-medium">{data.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainContent;