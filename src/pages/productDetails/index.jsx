import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCartContext } from '../../context';

function ProductDetailPage() {

  const { productDetails, setProductDetails,setLoading,loading } = useContext(ShoppingCartContext);
  
  const { id } = useParams();
  
  async function fetchProductDetails() {
    const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
    const result = apiResponse.json();
    
    if (result) {
      setProductDetails(result)
      setLoading(false)
    } 
    
  }
 

  useEffect(() => {
    fetchProductDetails();
  },[id])

  
  
if (loading) return<h3>fetching products details please wait</h3>


  return (
    <div>
      <div className='p-6 mx-auto max-w-4xl lg:max-w-7xl'>
        <div className='grid grid-cols-1 gap-12 p-6 shadow-lg item-center lg:grid-cols-5'>
          <div className='top-0 w-full text-center lg:col-span-3 lg:sticky'>
            <div className='relative px-4 py-10 rounded-xl shadow-sm'>
              <img
                className='object-cover w-4/5 rounded'
                src={productDetails?.thumbnail}
                alt={productDetails?.title}
              />
            </div>
            <div className='flex flex-wrap gap-6 mx-auto mt-6 justify-centre'>
              {
                productDetails?.images?.length ?
                  productDetails?.images?.map(imageItem =>
                    <div className='p-4 rounded-xl shadow-md' key={imageItem}>
                      <img
                        src={imageItem}
                        className='w-24 cursor-pointer'
                        alt="product secondary image"
                      
                      />
                    </div>
                  ) :
                  null
              }
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductDetailPage;