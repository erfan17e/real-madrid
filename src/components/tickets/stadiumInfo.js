const StadiumInfo = () => {
    return (
        <div className="w-3/4 mx-auto mt-20 text-center max-lg:w-full">
            <div className="bg-gradient-to-r from-gray-800 to-yellow-900 text-white rounded-2xl p-12 shadow-2xl">
                <h3 className="text-3xl font-bold mb-4">THE NEW BERNABÉU</h3>
                <p className="text-xl leading-relaxed mb-6">
                    Experience world-class football in one of the most modern and spectacular stadiums in the world.
                    With a retractable roof and state-of-the-art facilities, every match is an unforgettable experience.
                </p>
                <a href="https://www.youtube.com/watch?v=_k8zwlPqYzo" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-block">
                    STADIUM TOUR
                </a>
            </div>
        </div>
    )
}

export default StadiumInfo;