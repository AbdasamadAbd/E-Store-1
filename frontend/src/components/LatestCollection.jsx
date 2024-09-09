import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);
    // console.log(latestProducts);

    useEffect(() => {
        setLatestProducts(products.slice(0,10));
    },[])

    return (
        <div className='my-10'>
            <div className="text-center py-8 text-3xl">
                <Title text_1={"LATEST"} text_2={"COLLECTIONS"} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut, delectus rem ab corporis totam aperiam eius mollitia repudiandae? Voluptatum quia neque dolores expedita, at iusto praesentium illo beatae accusantium.</p>
            </div>

            {/* Rendering Products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {
                    latestProducts.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                    ))
                }
            </div>

        </div>
    )
}

export default LatestCollection