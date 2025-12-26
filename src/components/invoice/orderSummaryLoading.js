import { AiOutlineShopping } from "react-icons/ai";

const OrderSummaryLoading = () => {
    return (
        <>
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                INVOICE
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <AiOutlineShopping className="size-5 mr-2 text-yellow-500" />
                    Order Summary
                </h2>

                <div className="space-y-3">
                    <div className="flex justify-between">
                        <div className="h-5 w-40 rounded-full bg-gray-400 animate-pulse"></div>
                        <div className="h-5 w-40 rounded-full bg-gray-400 animate-pulse"></div>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        <span className="font-semibold">$5.99</span>
                    </div>

                    <div className="border-t pt-3 mt-3">
                        <div className="flex justify-between text-lg font-bold">
                            <span>Total</span>
                            <div className="h-5 w-40 rounded-full bg-gray-400 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderSummaryLoading;