import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../context';

function ProductTile({ singleProductTile }) {
    const navigate = useNavigate();
    const { handleAddToCart, cartItem } = useContext(ShoppingCartContext);

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
                <button
                    disabled={cartItem?.findIndex(cartItem => cartItem.id === singleProductTile?.id) > -1}
                    onClick={() => handleAddToCart(singleProductTile)}
                    className='px-5 py-2 mt-5 w-full text-lg font-bold text-white bg-black rounded-none disabled:opacity-65'>
                    Add to cart
                </button>

            </div>

        </div>
    )
}

export default ProductTile;