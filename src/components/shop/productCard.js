import Image from "next/image";
import Link from "next/link";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const ProductCard = ({ product, openModalMethod, previousPathname }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group w-[23%] min-w-60 max-sm:w-full">
            {/* Product Image */}
            <div className="relative overflow-hidden">
                <div className="w-full h-64 relative">
                    <Image
                        src={product.image}
                        alt={product.name}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        fill
                    />
                </div>
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-y-2">
                    {product.featured && (
                        <span className="w-24 flex justify-center items-center bg-yellow-500 text-white py-1 rounded-full text-sm font-bold">
                            FEATURED
                        </span>
                    )}
                    {product.originalPrice > product.price && (
                        <span className="w-24 flex justify-center items-center bg-red-500 text-white py-1 rounded-full text-sm font-bold">
                            SALE
                        </span>
                    )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors"
                        onClick={() => openModalMethod(product)}
                    >
                        <MdOutlineRemoveRedEye />
                    </button>
                </div>

                {/* Stock Status */}
                <div className="absolute bottom-4 left-4">
                    {product.stock > 0 ? (
                        <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                            In Stock ({product.stock})
                        </span>
                    ) : (
                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                            Out of Stock
                        </span>
                    )}
                </div>
            </div>

            {/* Product Info */}
            <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                    {product.originalPrice > product.price && (
                        <span className="text-gray-400 line-through text-sm">${product.originalPrice}</span>
                    )}
                    <span className="text-2xl font-bold text-gray-800">${product.price}</span>
                </div>

                {/* Sizes */}
                <div className="flex gap-2 mb-4">
                    {product.sizes.map(size => (
                        <span key={size} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {size}
                        </span>
                    ))}
                </div>

                {/* Add to Cart Button */}
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
            </div>
        </div>
    )
}

export default ProductCard;