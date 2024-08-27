import React from 'react';

function ProductTile({singleProductTile}) {
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
              
          </div>
          
    </div>
  )
}

export default ProductTile;