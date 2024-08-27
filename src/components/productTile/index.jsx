import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductTile({ singleProductTile }) {
    const navigate = useNavigate();

    function handleNavigateToProductDetailsPage(getProductId) {
        // console.log(getProductId,navigate);
        navigate(`/product-detail/${getProductId}`)
    }

  return (
      <div className='relative border border-cyan-700 cursor-pointer group'>
          <div className='overflow aspect-w-1 aspect-h-1'>
              <img
                  src={singleProductTile?.thumbnail}
                  alt={singleProductTile?.title}
                  className='object-cover w-full h-full transition-all duration-300 group-hover:scale-125'
              />
          </div>
          <div className='flex justify-between items-start mt-4 space-x-4'>
              
              <div className='text-xs font-bold text-gray-900 sm:text-sm md:text-base'>
                <p className='w-[100px] overflow-hidden text-ellipsis whitespace-nowrap'>
                    {singleProductTile?.title}
                </p>
              </div>
              <div className='text-right'>
                  <p className='text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]' >
                      ${singleProductTile?.price}
                  </p>
              </div>
              <button
                onClick={() => handleNavigateToProductDetailsPage(singleProductTile?.id)}
                className='px-5 py-2 mt-5 w-full text-lg font-bold text-white bg-black rounded-none'>
                View Details
              </button>
              
          </div>
          
    </div>
  )
}

export default ProductTile;