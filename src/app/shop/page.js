'use client';
import ProductCard from '@/components/shop/productCard';
import ProductModal from '@/components/shop/productModal';
import FilterTabs from '@/components/ui/filterTabs';
import PageTitle from '@/components/ui/pageTitle';
import useTabsMenu from '@/hooks/useTabsMenu';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const Shop = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [input, setInput] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);
    const previousPathname = usePathname();

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const products = {
        groups: ['kits', 'training', 'accessories', 'collectibles'],
        data: [
            {
                id: 1,
                name: "Home Kit 2023/24",
                price: 89.99,
                originalPrice: 109.99,
                image: "/images/shop/homeKit.webp",
                type: "kits",
                sizes: ["S", "M", "L", "XL"],
                colors: ["White"],
                description: "Official home kit for the 2023/24 season with authentic details",
                featured: true,
                stock: 15
            },
            {
                id: 2,
                name: "Away Kit 2023/24",
                price: 84.99,
                originalPrice: 104.99,
                image: "/images/shop/awayKit.avif",
                type: "kits",
                sizes: ["S", "M", "L", "XL"],
                colors: ["Purple", "Black"],
                description: "Stunning away kit featuring modern design and premium materials",
                featured: false,
                stock: 8
            }, {
                id: 3,
                name: "Training Jacket",
                price: 69.99,
                originalPrice: 89.99,
                image: "/images/shop/trainingJacket.webp",
                type: "training",
                sizes: ["S", "M", "L", "XL"],
                colors: ["Black", "Navy"],
                description: "Professional training jacket worn by the first team",
                featured: true,
                stock: 0
            },
            {
                id: 4,
                name: "Training Shorts",
                price: 39.99,
                originalPrice: 49.99,
                image: "/images/shop/trainingShorts.avif",
                type: "training",
                sizes: ["S", "M", "L", "XL"],
                colors: ["Black", "White"],
                description: "Lightweight training shorts with moisture-wicking technology",
                featured: false,
                stock: 20
            }, {
                id: 5,
                name: "Official Scarf",
                price: 24.99,
                originalPrice: 29.99,
                image: "/images/shop/officialScarf.webp",
                type: "accessories",
                sizes: ["One Size"],
                colors: ["White/Gold", "Black/Gold"],
                description: "Classic wool scarf perfect for match days",
                featured: false,
                stock: 25
            },
            {
                id: 6,
                name: "Team Cap",
                price: 29.99,
                originalPrice: 34.99,
                image: "/images/shop/teamCap.avif",
                type: "accessories",
                sizes: ["S/M", "L/XL"],
                colors: ["Black", "White", "Navy"],
                description: "Adjustable cap with embroidered club crest",
                featured: true,
                stock: 18
            }, {
                id: 7,
                name: "Signed Football",
                price: 199.99,
                originalPrice: 249.99,
                image: "/images/shop/signedFootball.avif",
                type: "collectibles",
                sizes: ["Official Size 5"],
                colors: ["White"],
                description: "Official match ball signed by the 2023/24 squad",
                featured: true,
                stock: 0
            },
            {
                id: 8,
                name: "UCL Trophy Replica",
                price: 149.99,
                originalPrice: 179.99,
                image: "/images/shop/championsLeagueTrophyReplica.jpg",
                type: "collectibles",
                sizes: ["30cm", "45cm"],
                colors: ["Silver"],
                description: "Detailed replica of the famous Champions League trophy",
                featured: false,
                stock: 10
            }
        ]
    };

    const staticData = [
        {
            icon: '🚚',
            title: 'Free Shipping',
            description: 'Free worldwide shipping on orders over $100'
        },
        {
            icon: '✅',
            title: 'Authentic Products',
            description: '100% official merchandise with quality guarantee'
        },
        {
            icon: '💳',
            title: 'Secure Payment',
            description: 'Safe and secure payment processing'
        }
    ];

    const getTabsMenu = useTabsMenu(products);

    const emailButtonHandler = () => {
        console.log('Hi, im working!');
    }

    return (
        <>
            {/* Hero Section */}
            <PageTitle
                title={'OFFICIAL STORE'}
                description={'Wear your pride with official Real Madrid merchandise'}
            />

            {/* Main Content */}
            <main className="w-11/12 mx-auto px-4 py-16">
                <FilterTabs
                    tabs={getTabsMenu}
                    currentTab={activeTab}
                    changeTabMethod={setActiveTab}
                />

                {/* Products Grid */}
                <div className="flex flex-wrap justify-evenly gap-6">
                    {activeTab === 'all' ?
                        products.data.map(product => <ProductCard key={product.id} product={product} openModalMethod={setSelectedProduct} previousPathname={previousPathname} />) :
                        products.data.filter(product => product.type === activeTab).map(product => <ProductCard key={product.id} product={product} openModalMethod={setSelectedProduct} previousPathname={previousPathname} />)}
                </div>

                {/* Features */}
                <div className='mt-16'>
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                        WHY SHOP WITH US?
                    </h2>
                    <div className="flex flex-wrap gap-8 justify-center items-center">
                        {staticData.map(feature => (
                            <div key={feature.title} className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 min-w-[370px] flex-1 h-48">
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Newsletter */}
                <div className="lg:w-3/4 w-full mx-auto mt-20 text-center rounded-2xl overflow-hidden">
                    <div className="bg-gray-900 text-white rounded-2xl">
                        <div className="w-full h-full p-12 bg-gradient-to-r from-yellow-600/20 to-purple-600/20">
                            <h3 className="text-3xl font-bold mb-4">STAY UPDATED</h3>
                            <p className="text-xl leading-relaxed mb-6">
                                Get notified about new products, exclusive offers, and special promotions
                            </p>
                            {
                                isEmailSent ?
                                    <h3 className='px-4 py-3 text-yellow-500 font-bold'>
                                        The Email Was Sent
                                    </h3> :
                                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full px-4 py-3 rounded-lg text-yellow-500 border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 font-bold"
                                            value={input}
                                            onChange={(e) => { setInput(e.target.value) }}
                                        />
                                        <button className={` font-bold py-3 px-6 rounded-lg transition-all duration-300 ${emailRegex.test(input) ?
                                            'bg-yellow-500 hover:bg-yellow-600 text-white transform hover:scale-105'
                                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`
                                        }
                                            disabled={!emailRegex.test(input)}
                                            onClick={() => { setIsEmailSent(true) }}
                                        >
                                            SUBSCRIBE
                                        </button>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </main>

            {/* Product Modal */}
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                    previousPathname={previousPathname}
                />
            )}
        </>
    );
};

export default Shop;