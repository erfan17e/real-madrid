import Image from "next/image";
import Link from "next/link";
import { IoMdCloseCircleOutline } from "react-icons/io";

const ProductModal = ({ product, onClose, previousPathname }) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="relative">
                    {/* Header */}
                    <div className="bg-gray-900 text-white p-6 rounded-t-2xl">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-3xl font-bold">{product.name}</h2>
                                <p className="text-yellow-400 text-lg">{product.type.toUpperCase()}</p>
                            </div>
                            <button onClick={onClose}>
                                <IoMdCloseCircleOutline
                                    className="text-white hover:text-yellow-400 size-7"
                                />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Product Image */}
                            <div className="lg:w-1/2">
                                <div className="w-full h-96 relative">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        className="object-cover rounded-xl shadow-lg"
                                        fill
                                    />
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="lg:w-1/2">
                                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                    {product.description}
                                </p>

                                {/* Price */}
                                <div className="flex items-center space-x-4 mb-6">
                                    {product.originalPrice > product.price && (
                                        <span className="text-gray-400 line-through text-xl">${product.originalPrice}</span>
                                    )}
                                    <span className="text-3xl font-bold text-gray-800">${product.price}</span>
                                </div>

                                {/* Size Selection */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-bold mb-3">Size</h3>
                                    <div className="flex space-x-3">
                                        {product.sizes.map((size) => (
                                            <div
                                                key={size}
                                                className="border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg "
                                            >
                                                {size}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Color Selection */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-bold mb-3">Color</h3>
                                    <div className="flex space-x-3">
                                        {product.colors.map((color) => (
                                            <div
                                                key={color}
                                                className="border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                                            >
                                                {color}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Add to Cart */}
                                {
                                    product.stock ?
                                        <Link href={{
                                            pathname: '/invoice',
                                            query: { productName: product.name, price: product.price, previousPathname }
                                        }}
                                            className="w-full h-12 rounded-lg font-bold transition-all duration-300 bg-yellow-500 hover:bg-yellow-600 text-white transform hover:scale-105 flex justify-center items-center select-none"
                                        >
                                            SHOP NOW
                                        </Link> : <div className="w-full h-12 rounded-lg font-bold bg-gray-300 text-gray-500 cursor-not-allowed flex justify-center items-center select-none">OUT OF STOCK</div>
                                }

                                {/* Stock Info */}
                                <div className="mt-4 text-center text-sm text-gray-600">
                                    {product.stock > 0
                                        ? `${product.stock} items left in stock`
                                        : 'This item is currently out of stock'
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductModal;