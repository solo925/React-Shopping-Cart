import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartTile from '../../components/cartTile';
import { ShoppingCartContext } from '../../context';

function CartListPage() {
  const navigate = useNavigate()
  const { cartItem } = useContext(ShoppingCartContext);
  return (
    <div className='py-4 mx-auto max-w-5xl max-md:max-w-xl'>
      <h1 className='text-2xl font-bold text-gray-800 text-centre'>
        My cart Page
      </h1>
      <div className='grid gap-8 mt-12 md:grid-cols-3'>
        <div className="space-y-4 md:col-span-2">
          {
            cartItem?.length ?
              cartItem.map(singleCartItem => <CartTile singleCartItem={singleCartItem} />)
              : <h1>No items added to cart</h1>
          }
        </div>
        <div className='p-4 bg-gray-100 rounded-sm h-max'>
          <h3 className='text-xl font-extrabold border border-b border-gray-300 text-gray-950 bp-2'>
            Order Summary
          </h3>
          <ul className='mt-4 space-y-2 text-gray-700'>
            <p className='flex flex-wrap gap-4 text-sm font-bold'>
              Total<span>
                ${cartItem.reduce((acc, curr) => acc + curr.totalprice, 0).toFixed(2)}
              </span>
            </p>
          </ul>
          <div className='flex gap-2 mt-5'>
            <button
              disabled={cartItem?.length === 0}
              className='px-4 py-3 text-sm font-extrabold text-white bg-black disabled:opacity-65'>
              Checkout
            </button>
            <button onClick={() => navigate("/products")} className='px-4 py-3 text-sm font-extrabold text-white bg-black'>
              continue shopping
            </button>

          </div>
        </div>

      </div>

    </div>
  )
}

export default CartListPage;