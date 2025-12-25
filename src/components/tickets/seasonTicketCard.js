import Link from "next/link";

const SeasonTicketCard = ({ previousPathname }) => {
    return (
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-2xl p-8 shadow-2xl my-12">
            <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-2/3 mb-6 lg:mb-0 max-lg:text-center">
                    <h3 className="text-3xl font-bold mb-4">2024/25 SEASON TICKETS</h3>
                    <p className="text-yellow-100 text-lg mb-4">
                        Secure your seat for every home match.
                        <br />
                        Experience the entire season at the Bernabéu with exclusive benefits.
                    </p>
                    <ul className="space-y-2 text-yellow-100">
                        <li>• All 19 La Liga home matches</li>
                        <li>• Priority for cup competitions</li>
                        <li>• Member-only events</li>
                        <li>• Stadium tour included</li>
                    </ul>
                </div>
                <div className="lg:w-1/3 text-center max-sm:text-left">
                    <div className="text-4xl font-bold mb-2">From €699</div>
                    <div className="text-yellow-200 mb-4">per season</div>
                    <Link
                        href={{
                            pathname: '/invoice',
                            query: { productName: 'season ticket card', price: 699, previousPathname }
                        }}
                        className="bg-white text-yellow-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-block"
                    >
                        BUY TICKETS
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SeasonTicketCard;