// create the context(createContext and the providerFunction(with children in the props and .provider ))
// provide the state to the context
// wrap context in root component
// Consuming the context using useContext

import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {

    const [loading, setLoading] = useState(false);
    const [listOfProducts, setListOfProducts] = useState([]);

    async function fetchListOfProducts() {
        try {
            const apiResponse = await fetch("https://dumyjson.com/products");
            const result = await apiResponse.json()

            if (result && result?.products) {
                setListOfProducts(result?.products);  
            }
        } catch (e) {
            console.log(e); 
        }

        // return


        
    }

    useEffect(() => {
        fetchListOfProducts()
    }, [])
    
    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
export default ShoppingCartProvider;