import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ShoppingCartContext } from '../../context';

function ProductDetailPage() {

  const { productDetails, setProductDetails, setLoading, loading ,handleAddToCart,cartItem} = useContext(ShoppingCartContext);
  const { id } = useParams();
  const navigate = useNavigate();

  async function fetchProductDetails() {
    setLoading(true);  // Set loading to true at the start of the fetch
    try {
      const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
      const result = await apiResponse.json(); // Await the JSON parsing
      
      if (result) {
        setProductDetails(result);
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    } finally {
      setLoading(false); // Always set loading to false in the end
    }
  }


  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  if (loading) return <h3>Fetching product details, please wait...</h3>;

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
            <div className='flex flex-wrap gap-6 justify-center mx-auto mt-6'>
              {
                productDetails?.images?.length > 0 ?
                  productDetails?.images.map(imageItem => (
                    <div className='p-4 rounded-xl shadow-lg' key={imageItem}>
                      <img
                        src={imageItem}
                        className='w-24 cursor-pointer'
                        alt={'product secondary image '}
                      />
                    </div>
                  )) :
                  <p>No additional images available.</p>
              }
            </div>
          </div>
          <div className='lg:col-span-2'>
            <h2 className='text-2xl font-extrabold text-[#3333]'> 
              {productDetails?.title}
            </h2>
            <div className='flex flex-wrap gap-4 mt-4'>
              <p className='text-xl font-bold'>${productDetails?.price}</p>
            </div>
            <div>
              <button
                disabled={cartItem?.findIndex(cartItem=>cartItem.id===productDetails.id)>-1}
                onClick={() => handleAddToCart(productDetails)}
                className='disabled:opacity-65 mt-5 min-w-[200px] px-4 py-3 border border-[#333] bg-transparent text-sm text-semibold rounded'>
                Add to cart
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
