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
        let cpyExistingStateItems = [...cartItem];
        const findIndexOfCurrentItem = cpyExistingStateItems.findIndex(cartItem => cartItem.id === getProductDetails.id);

        if (findIndexOfCurrentItem === -1) {
            cpyExistingStateItems.push({
                ...getProductDetails,
                quantity: 1,
                totalprice: getProductDetails?.price
            });
        } else {
            console.log('do something');
        }

        setCartItem(cpyExistingStateItems);
        localStorage.setItem('cartitems', JSON.stringify(cpyExistingStateItems));
        navigate('/cart');
    }

    function handleRemoveFromCart(getProductDetails, isFullyRemove) {
        let cpyExistingCartItems = [...cartItem];
        const findIndexOfCurrentItem = cpyExistingCartItems.findIndex(cartItem => cartItem.id === getProductDetails.id);

        if (isFullyRemove) {
            cpyExistingCartItems.splice(findIndexOfCurrentItem, 1);
        } else {
            cpyExistingCartItems[findIndexOfCurrentItem] = {
                ...cpyExistingCartItems[findIndexOfCurrentItem],
                quantity: cpyExistingCartItems[findIndexOfCurrentItem].quantity - 1,
                totalprice: (cpyExistingCartItems[findIndexOfCurrentItem].quantity - 1) * cpyExistingCartItems[findIndexOfCurrentItem].price,
            };
        }
        setCartItem(cpyExistingCartItems);
        localStorage.setItem('cartitems', JSON.stringify(cpyExistingCartItems));
    }

    async function fetchListOfProducts() {
        const apiResponse = await fetch('https://dummyjson.com/products');
        const result = await apiResponse.json();
        if (result && result?.products) {
            setListOfProducts(result?.products);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchListOfProducts();
        setCartItem(JSON.parse(localStorage.getItem('cartitems') || '[]'));
    }, []);

    return (
        <ShoppingCartContext.Provider value={{
            listOfProducts,
            loading,
            setLoading,
            productDetails,
            setProductDetails,
            handleAddToCart,
            cartItem,
            handleRemoveFromCart,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export default ShoppingCartProvider;
