'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import PageTitle from '@/components/ui/pageTitle';
import OrderSummary from "@/components/invoice/orderSummary";
import PaymentForm from "@/components/invoice/paymentForm";
import { FaCheck } from "react-icons/fa6";

const Checkout = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isSuccess, setIsSuccess] = useState(false);

    //Getting information from URL
    const productName = searchParams.get('productName') || '';
    const price = searchParams.get('price') || 0;
    const totalAmount = parseFloat(price) + 5.99;
    const previousPathname = searchParams.get('previousPathname');

    useEffect(() => {
        // Checking the validity of the information
        if (!productName || !price) {
            router.back();
        }
    }, [productName, price, router]);

    return (
        <>
            <PageTitle
                title={'Complete Purchase'}
                description={'Secure checkout for your Real Madrid merchandise'}
            />

            <div className="w-11/12 mx-auto py-16">

                {/* Order Summary */}
                <OrderSummary price={price} productName={productName} totalAmount={totalAmount} />

                {/* Payment Form */}
                <PaymentForm totalAmount={totalAmount} setIsSuccess={setIsSuccess} />

            </div>

            {/* Success Modal */}
            {isSuccess && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl max-w-sm w-full p-8 text-center animate-fade-in">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaCheck className='size-10 text-green-500' />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Successful!</h2>

                        <div className="bg-gray-50 rounded-lg p-4 mb-6">
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-600">Product:</span>
                                <span className="font-semibold">{productName}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-600">Amount:</span>
                                <span className="font-semibold">${totalAmount.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Status:</span>
                                <span className="font-semibold text-green-600">Confirmed</span>
                            </div>
                        </div>

                        <p className="text-gray-600 mb-6">
                            Thank you for your purchase! A confirmation email has been sent.
                        </p>

                        <button
                            onClick={() => router.replace(previousPathname)}
                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                        >
                            Continue Shopping
                        </button>

                        <button
                            onClick={() => router.replace('/')}
                            className="w-full mt-3 border border-gray-300 hover:border-yellow-500 text-gray-600 hover:text-yellow-600 font-medium py-2 px-6 rounded-lg transition-colors"
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Checkout;