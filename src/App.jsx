import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import CartListPage from "./pages/cartList"
import ProductDetailPage from "./pages/productDetails"
import ProductListPage from "./pages/productlist"


function App() {
  

  return (
    <Fragment>
      <Routes>
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/product-detail/:id" element={ <ProductDetailPage/>} />
        <Route path="/cart" element={<CartListPage/>} />
      </Routes>
    </Fragment>
 
  )
}

export default App
