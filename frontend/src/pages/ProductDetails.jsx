
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppCOntext } from '../context/AppContext'
import {assets} from '../assets/assets'
import ProductCard from '../components/ProductCard'

const ProductDetails = () => {

    const { products, navigate, addToCard, currency } = useAppCOntext();
    const { id } = useParams();

    const [relatedProducts, setRelatedProducts] = useState([]);
    const [thumbnail, setThumbnail] = useState(null);

    const product = products.find((item) => item._id === id);

    useEffect(() => {
        if(products.length > 0) {
            let productCopy = products.slice();
            productCopy = productCopy.filter((item) => product.category === item.category);
            setRelatedProducts(productCopy.slice(0, 5));
        }
    }, [products]);

    useEffect(() => {
        setThumbnail(product?.image[0] ? product.image[0] : null);
    }, [product]);

    return product && (
        <div className="md:my-20 my-12">
            <p>
                <Link to={"/"}>Home</Link> /
                <Link to={"/products"}>Products</Link> /
                <Link to={`/products/${product.category.toLowerCase()}`}>{product.category}</Link> /
                <span className="text-indigo-500"> {product.name}</span>
            </p>

            <div className="flex flex-col md:flex-row gap-16 mt-4">
                <div className="flex gap-3">
                    <div className="flex flex-col gap-3">
                        {product.image.map((image, index) => (
                            <div key={index} onClick={() => setThumbnail(image)} className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer" >
                                <img src={image} alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>

                    <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
                        <img src={thumbnail} alt="Selected product" />
                    </div>
                </div>

                <div className="text-sm w-full md:w-1/2">
                    <h1 className="text-3xl font-medium">{product.name}</h1>

                    <div className="flex items-center gap-0.5 mt-1">
                        {Array(5).fill('').map((_, i) => (
                            <img key={i} src={i < 4 ? assets.star_icon : assets.star_dull_icon} alt="Star" className="w-4" />

                        ))}
                        <p className="text-base ml-2">(4)</p>
                    </div>

                    <div className="mt-6">
                        <p className="text-gray-500/70 line-through">MRP: {currency}{product.price}</p>
                        <p className="text-2xl font-medium">MRP: {currency}{product.offerPrice}</p>
                        <span className="text-gray-500/70">(inclusive of all taxes)</span>
                    </div>

                    <p className="text-base font-medium mt-6">About Product</p>
                    <ul className="list-disc ml-4 text-gray-500/70">
                        {product.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>

                    <div className="flex items-center mt-10 gap-4 text-base">
                        <button onClick={() => addToCard(product._id)} className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition" >
                            Add to Cart
                        </button>
                        <button onClick={() => {addToCard(product._id); navigate('/cart');}} className="w-full py-3.5 cursor-pointer font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition" >
                            Buy now
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <div className="flex items-center justify-center">
                    <p className="text-3xl font-medium mx-auto">Related Products</p>
                </div>
                <div className="mx-auto w-16 h-1 bg-primary rounded-full mb-6"></div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-5 lg:grid-cols-5 lg:gap-6 mt-12">
                    {relatedProducts.filter((product) => product.inStock).map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}            
                </div>    
            </div> 

            <div className="flex justify-center mt-6">
                <button onClick={() => {navigate("/products"); scrollTo(0, 0);}} className="mx-auto cursor-pointer px-12 my-10 py-2.5 border rounded text-primary bg-primary/40 hover:bg-primary hover:text-white transition">
                    See more
                </button>
            </div>
        </div>
    );
}

export default ProductDetails
