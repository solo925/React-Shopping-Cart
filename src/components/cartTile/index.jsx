import React, { Fragment, useContext } from 'react';
import { ShoppingCartContext } from '../../context';

function CartTile({ singleCartItem }) {
    const { handleRemoveFromCart,handleAddToCart } = useContext(ShoppingCartContext);
   
    
    return (
      <Fragment>
      <div className='grid grid-cols-3 gap-5 items-start'>
          <div className='flex col-span-2 gap-4 items-start'>
              <div className='p-1 w-28 h-28 bg-gray-400 rounded-sm max-sm:w-20 shrink-0'>
                  <img
                      src={singleCartItem?.thumbnail}
                      className='object-contain w-full h-full'
                      alt={singleCartItem?.title}
                  />
              </div>
              <div> 
                <h3
                    className='text-base font-bold text-gray-900'>
                    {singleCartItem?.title}
                  </h3>
                        <button
                            onClick={() => handleRemoveFromCart(singleCartItem, true)}
                            className='px-4 py-3 text-sm font-extrabold text-white bg-black'>
                      REMOVE
                  </button>
                 
              </div>
          </div>
          <div className='ml-auto'> 
              <h3 className='text-lg font-bold text-gray-900'>
                  ${
                  singleCartItem?.totalprice?.toFixed(2)
                  }
                    </h3>
                    <p className='mt-2 mb-3 font-bold text-[16px]'>Quantity: { singleCartItem?.quantity}</p>
              <div className='mt-3'>
                        <button
                            onClick={()=>handleAddToCart(singleCartItem)}
                            className='border border-[#000]'
                        >+
                        </button>
                        <button
                            onClick={() => handleRemoveFromCart(singleCartItem, false)}
                            className='disabled:opacity-65 border border-[#000]'
                            disabled={singleCartItem?.quantity===1}>
                            -
                        </button>
              </div>
          </div>
         
          
            </div>
            <hr className='border-gray-500'></hr>
            </Fragment>
  )
}

export default CartTile;