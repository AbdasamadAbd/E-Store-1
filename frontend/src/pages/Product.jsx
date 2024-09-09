import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProdcts from "../components/RelatedProdcts";

const Product = () => {
  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);

  const [productsData, setProductsData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map(item => {
      if (item._id === productId) {
        setProductsData(item) ;
        setImage(item.image[0]);
        // console.log(item);
        return null ;
      }
    })
  }

  useEffect(()=> {
    fetchProductData();
  }, [productId, products])


  return productsData ? (
    <div className="border-t-2 pt-2 transition-opacity ease-in duration-500 opacity-100">
      {/* ------------------ Product Data ------------------------*/}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">

        {/* ---------------------- Product Images ---------------------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal w-full sm:w-[18.7%]">
            {
              productsData.image.map((image, index)=> (
                <img key={index} src={image} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" alt="" 
                  onClick={()=> setImage(image)}
                />
              ))
            }
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>

        {/* ------------------ Product info ------------------------*/}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productsData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className="w-3" alt="" />
            <img src={assets.star_icon} className="w-3" alt="" />
            <img src={assets.star_icon} className="w-3" alt="" />
            <img src={assets.star_icon} className="w-3" alt="" />
            <img src={assets.star_dull_icon} className="w-3" alt="" />
            <span className="pl-2">(112)</span>
          </div>
          <p className="mt-5 text-3xl font-medium">{currency}{productsData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productsData.description}</p>

          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productsData.sizes.map((item, index)=> (
                <button key={index} className={`${item === size && "border-orange-500"} border py-2 px-4 bg-gray-100`}
                  onClick={()=> setSize(item)}
                >{item}</button>
              ))}
            </div>
          </div>

          <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
            onClick={()=> addToCart(productsData._id, size)}
          >ADD TO CARt</button>
          
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>

        </div>
      </div>


      {/* ------------------ Product info ------------------------*/}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews(122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>An e-commerce website is an online platform that facilitates the buying and selling Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel qui, sapiente nulla unde nemo sint quod, totam nostrum dolores nam nobis distinctio quas, consequuntur quasi. Explicabo earum deserunt animi laudantium!</p>
          <p>An e-commerce website is an online platform that facilitates the buying and selling Lorem ipsum dolor sit amet cons</p>
        </div>
      </div>


      {/* ------------------ Related Products ------------------------*/}
      <RelatedProdcts category={productsData.category} subCategory={productsData.subCategory} />

    </div>
  ) : <div className=""></div>
}

export default Product