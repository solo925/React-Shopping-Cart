import React, { useContext } from 'react';
import ProductTile from '../../components/productTile';
import { ShoppingCartContext } from '../../context';

function ProductListPage() {

  const {listOfProducts,loading} = useContext(ShoppingCartContext);
  // console.log(listOfProducts);
  

  if (loading) return <h2>Loading data ! please Wait</h2>


  return (
    <section className='py-12 bg-white sm:py-16 ly:py-20'>
      <div className='px-4 mx-auto sm:py-4 lg:px-8 mx-w-7xl'>
        <div className='mx-auto max-w-md text-centre'>
          <h2 className='text-3xl font-extralight text-gray-950 sm:text-4xl'>
            Our Featured products
          </h2>
          
        </div>
        <div className='grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4'>
          {
            listOfProducts && listOfProducts.length > 0 ? listOfProducts.map(singleProductTile => <ProductTile />) :
              <h3>No products found</h3>
          }

        </div>

        
      </div>
      
   </section>
  )
}

export default ProductListPage;
