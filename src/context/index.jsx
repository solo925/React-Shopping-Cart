// create the context(createContext and the providerFunction(with children in the props and .provider ))
// provide the state to the context
// wrap context in root component
// Consuming the context using useContext

import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {

    const [loading, setLoading] = useState(true);
    const [listOfProducts, setListOfProducts] = useState([]);

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
        <ShoppingCartContext.Provider value={{listOfProducts,loading}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
export default ShoppingCartProvider;