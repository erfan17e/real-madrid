import { useState } from "react";
import { MdPayment } from "react-icons/md";
import { RiLoader2Fill } from "react-icons/ri";

const RegExps = {
    cardNumber: /^(\d{4}[- ]?){3}\d{4}$/,
    expiryDate: /^(0[1-9]|1[0-2])\/\d{2}$/,
    cvv: /^[0-9]{3,4}$/,
    cardholderName: /^[A-Za-z\s]{2,50}$/,
    phoneNumber: /^09\d{9}$/,
    address: /^[A-Za-z0-9\s,.-]{5,100}$/
};

const PaymentForm = ({ totalAmount, setIsSuccess }) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [formData, setFormData] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardholderName: '',
        phoneNumber: '',
        address: ''
    });
    const [inputsStatus, setInputStatus] = useState({
        cardNumber: false,
        expiryDate: false,
        cvv: false,
        cardholderName: false,
        phoneNumber: false,
        address: false
    });

    const changeInputHandler = e => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData(prev => ({ ...prev, [name]: value }));
        setInputStatus(prev => ({ ...prev, [name]: RegExps[name].test(value) }))
    }

    const handlePayment = e => {
        e.preventDefault();
        console.log('HI, IM WORKING');
        setIsProcessing(true);

        // Simulation of payment processing
        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);
        }, 1500);
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <MdPayment className="size-5 mr-2 text-yellow-500" />
                Payment Details
            </h2>

            <form className="space-y-4" onSubmit={handlePayment}>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Card Number
                    </label>
                    <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={e => { changeInputHandler(e) }}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Expiry Date
                        </label>
                        <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={e => { changeInputHandler(e) }}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            CVV
                        </label>
                        <input
                            type="text"
                            placeholder="123"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                            name="cvv"
                            value={formData.cvv}
                            onChange={e => { changeInputHandler(e) }}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Cardholder Name
                        </label>
                        <input
                            type="text"
                            placeholder="Erfan Arezi"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                            name="cardholderName"
                            value={formData.cardholderName}
                            onChange={e => { changeInputHandler(e) }}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            placeholder="09123456789"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={e => { changeInputHandler(e) }}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address
                    </label>
                    <input
                        type="text"
                        placeholder="Av. de Concha Espina 1, 28036 Madrid, Spain"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                        name="address"
                        value={formData.address}
                        onChange={e => { changeInputHandler(e) }}
                    />
                </div>

                {/* Pay Button */}
                <button
                    // onClick={handlePayment}
                    disabled={isProcessing || Object.entries(inputsStatus).some(item => item[1] === false)}
                    className={`w-full mt-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${Object.entries(inputsStatus).some(item => item[1] === false)
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-yellow-500 hover:bg-yellow-600'
                        }`}
                >
                    {isProcessing ? (
                        <span className="flex items-center justify-center">
                            <RiLoader2Fill className="animate-spin size-5 mr-3 text-white" />
                            Processing Payment...
                        </span>
                    ) : (
                        `Pay $${totalAmount.toFixed(2)}`
                    )}
                </button>
            </form>
        </div>
    )
}

export default PaymentForm;