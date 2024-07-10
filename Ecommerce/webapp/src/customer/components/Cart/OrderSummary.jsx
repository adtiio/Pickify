import React from 'react'
import AddressCard from './AddressCard'
import { Button } from '@mui/material'
import CartItem from './CartItem'

const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard/>
      </div>

      <div>
        <div className='lg:grid grid-cols-3 relative'>
            <div className='col-span-2'>
                {[1,1,1,1].map((item)=><CartItem/>)}
            </div>
            <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                <div className='border'>
                    <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
                    <hr/>
                    <div className='space-y-3 font-semibold mb-10'>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Price</span>
                            <span>4343rs</span>
                        </div>

                        <div className='flex justify-between pt-3 '>
                            <span>Disccount</span>
                            <span className='text-green-600'>2343rs</span>
                        </div>

                        <div className='flex justify-between pt-3 '>
                            <span>Delivery charge</span>
                            <span className='text-green-600'>Free</span>
                        </div>

                        <div className='flex justify-between pt-3  font-bold'>
                            <span>Total Ammount</span>
                            <span className='text-green-600'>2000</span>
                        </div>
                    </div>

                    <Button className='w-full mt-5'  variant='contained' sx={{px:"2.5rem",py:".7rem",bgcolor:"#9155fd", mt: "2rem"}}>
                        Checkout
                    </Button>
                </div>
            </div>
        </div>
        
      
    </div>
    </div>
  )
}

export default OrderSummary
