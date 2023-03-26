import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div>
            <div className='text-center'>
                <p className="text-2xl text-orange-600 font-bold">Popular Products</p>
                <p className="my-5 text-5xl font-bold">Browse Our Products</p>
                <p className='mb-12 text-xl text-gray-500'>We can help you with everything from an oil change to an engine change.
                    We can handle <br /> any problem on both foreign and domestic vehicles.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 justify-items-center'>
                {
                    products.map(product => <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
            <div className='flex justify-center'>
                <button className="btn btn-outline btn-warning ">More Products</button>
            </div>
        </div>
    );
};

export default Products;