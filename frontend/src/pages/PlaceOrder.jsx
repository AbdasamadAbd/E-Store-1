import { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets"
import CartAmount from "../components/CartAmount"
import Title from "../components/Title"
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {

  const [method, setMethod] = useState("cod");
  const {navigate} = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
        {/* ==================== Left Side =============== */}
        <div className="flex flex-col gap-4 sm:max-w-[480px] ">
          <div className="text-xl sm:text-2xl my-3">
            <Title text_1={"DELIVERY"} text_2={"INFORMATION"} />
          </div>
          <div className="flex gap-3">
            <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First name"/>
            <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last name"/>
          </div>
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email address"/>
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street"/>
          <div className="flex gap-3">
            <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City"/>
            <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State"/>
          </div>
          <div className="flex gap-3">
            <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Zipcode"/>
            <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country"/>
          </div>
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Phone"/>
        </div>

        {/* ==================== Right Side =============== */}
        <div className="mt-8">
          <div className="mt-8 min-w-80">
            <CartAmount />
          </div>

          <div className="mt-12">
            <Title text_1={"PAYMENT"} text_2={"METHOD"} />

            {/* ==================== Payyment method =============== */}
            <div className="flex gap-3 flex-col lg:flex-row">
              <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer "
                onClick={()=> setMethod("stripe")}
              >
                <p className={`${method === "stripe" && "bg-green-400"} min-w-3.5 h-3.5 border rounded-full`}></p>
                <img src={assets.stripe_logo} className="h-5 mx-4" alt="" />
              </div>
              
              <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer "
                onClick={()=> setMethod("razorpay")}
              >
                <p className={`${method === "razorpay" && "bg-green-400"} min-w-3.5 h-3.5 border rounded-full`}></p>
                <img src={assets.razorpay_logo} className="h-5 mx-4" alt="" />
              </div>

              <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer "
                onClick={()=> setMethod("cod")}
              >
                <p className={`${method === "cod" && "bg-green-400"} min-w-3.5 h-3.5 border rounded-full`}></p>
                <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
              </div>
            </div>

            <div className="w-full text-end mt-8">
              <button onClick={()=> navigate("/orders")} className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PlaceOrder