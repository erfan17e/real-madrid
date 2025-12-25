const PageTitle = ({ title, description }) => {
    return (
        <div className="relative bg-gray-900 text-white py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-purple-600/20"></div>
            <div className="container mx-auto px-4 text-center relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">{title}</h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                    {description}
                </p>
                <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            </div>
        </div>
    )
}

export default PageTitle;