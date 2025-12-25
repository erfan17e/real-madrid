
const HeroSection = () => {
    return (
        <div
            className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center bg-[url('/images/others/realMadridBG.jpg')]"
        >
            <div className="relative z-10 text-center text-yellow-400 px-4 bg-white/50
                xl:w-1/2 h-1/2 lg:w-2/3 md:w-10/12 max-md:w-11/12 flex justify-center items-center backdrop-blur-[2px] rounded-md">
                <div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">REAL MADRID</h1>
                    <p className="text-xl md:text-2xl mb-8 text-blue-950">The Most Successful Club in Football History</p>
                    <a href="https://www.youtube.com/watch?v=ctm_eJ6wcGs"
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-block"
                    >
                        EXPLORE CLUB
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;