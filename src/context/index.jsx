// create the context(createContext and the providerFunction(with children in the props and .provider ))
// provide the state to the context
// wrap context in root component
// Consuming the context using useContext

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {

    const [loading, setLoading] = useState(true);
    const [listOfProducts, setListOfProducts] = useState([]);
    const [productDetails, setProductDetails] = useState(null);
    const [cartItem, setCartItem] = useState([]);

    const navigate = useNavigate();


    function handleAddToCart(getProductDetails) {
        // console.log(getProductDetails);

        let cpyExistingStateItems = [...cartItem];
        // check if the current product is already added in the cart
        const findIndexOfCurrentItem = cpyExistingStateItems.findIndex(cartItem => cartItem.id === getProductDetails.id);
        
        if (findIndexOfCurrentItem == -1) {
            cpyExistingStateItems.push({
                ...getProductDetails,
                quatity: 1,
                totalprice: getProductDetails?.price
            })


            
        } else {
            console.log('do something');
            
        }


        setCartItem(cpyExistingStateItems);
        localStorage.setItem('cartitems', JSON.stringify(cpyExistingStateItems));
        navigate('/cart')
        // /console.log(cartItem);

    }


    // function handleAddToCart(getProductDetails) {
    //     setCartItem((prevCartItems) => {
    //         // Create a copy of the previous state
    //         let updatedCartItems = [...prevCartItems];
            
    //         // Check if the current product is already added to the cart
    //         const findIndexOfCurrentItem = updatedCartItems.findIndex(cartItem => cartItem.id === getProductDetails.id);
            
    //         if (findIndexOfCurrentItem === -1) {
    //             // If item is not in the cart, add it
    //             updatedCartItems.push({
    //                 ...getProductDetails,
    //                 quantity: 1,
    //                 totalprice: getProductDetails?.price
    //             });
    //         } else {
    //             console.log('do something');
    //         }
    
    //         // Save to localStorage
    //         localStorage.setItem('cartitems', JSON.stringify(updatedCartItems));
    //         console.log(cartItem);
            
    //         // Return the updated cart items to set the new state
    //         return updatedCartItems;
    //     });
    // }
    

    async function fetchListOfProducts() {

        const apiResponse = await fetch('https://dummyjson.com/products');
        const result = await apiResponse.json();  

        // console.log(result?.products);

        if (result && result?.products) {
            setListOfProducts(result?.products);
            setLoading(false);
        }
        
             
    }
    
    // console.log(listOfProducts);
    

    useEffect(() => {
        fetchListOfProducts()
    }, [])

    // console.log(listOfProducts);
    
    
    return (
        <ShoppingCartContext.Provider value={
            {
                listOfProducts,
                loading,
                setLoading,
                productDetails,
                // setListOfProducts,
                setProductDetails,
                handleAddToCart,
                cartItem,
            }
        }>
            {children}
        </ShoppingCartContext.Provider>
    )
}
export default ShoppingCartProvider;