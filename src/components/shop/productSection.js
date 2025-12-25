import ProductCard from "./productCard";

const ProductSection = ({ productsData, currentTab, openModalMethod}) => {
    return (
        <div className="flex flex-wrap justify-evenly gap-6">
            {
                currentTab === 'all' ?
                    productsData.map(product => <ProductCard key={product.id} product={product} openModalMethod={openModalMethod}/>) :
                    productsData.filter(product => product.status === currentTab).map(product => <ProductCard key={product.id} product={product} openModalMethod={openModalMethod}/>)
            }
        </div>
    )
}

export default ProductSection;