import React, { createContext, useEffect, useState } from 'react';
import { products } from '../assets/frontend_assets/assets';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "$";
    const delivery_fee = 10;

    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate() ;

    const addToCart = async (itemId, size) => {
        let cartData = structuredClone(cartItems); // copy this obj

        if (!size) {
            toast.error("Select Product Size");
            return ;  // to stop the execution of this func
        }

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1 ;
            }
            else {
                cartData[itemId][size] = 1 ;
            }
        }
        else {
            cartData[itemId] = {} ;
            cartData[itemId][size] = 1 ;
        }

        setCartItems(cartData);
    }


    // useEffect(()=> {
    //     console.log(cartItems);
    // },[cartItems])

    const getCardCount = () => {
        let totalCount = 0;

        // example :
        // cartItems = {
        //     id_product_1 : {
        //         size_1 : 3,
        //         size_2 : 1,
        //     },
        //     id_product_2 : {
        //         size_2 : 2,
        //         size_3 : 4,
        //     }
        // }

        // ===>totalCount = 3+1+2+4 = 10

        for (const IDs in cartItems) {
            for (const size in cartItems[IDs]) {
                try {
                    if (cartItems[IDs][size] > 0) {
                        totalCount += cartItems[IDs][size]
                    }
                } catch (error) {
                    
                }
                
            }  
        }
        return totalCount ;
    }


    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity ;
        setCartItems(cartData) ;
        // console.log(cartData);
    }



    const getCartAmount = () => {
        let totalAmount = 0 ;
        for(const ID in cartItems){
            let itemInfo = products.find(product => product._id === ID)

            for(const size in cartItems[ID]){
                try {
                    if (cartItems[ID][size] > 0) {
                        totalAmount += itemInfo.price * cartItems[ID][size] ;
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount ;
    }

    const value = {
        products, currency, delivery_fee,
        search,setSearch, showSearch,setShowSearch,
        cartItems, addToCart,
        getCardCount, updateQuantity,
        getCartAmount, navigate
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider ;