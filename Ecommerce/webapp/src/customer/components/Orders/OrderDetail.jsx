import React from 'react'
import AddressCard from '../Cart/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder'

const OrderDetail = () => {
  return (
    <div className='px-5 lg:px-20'>
      <div>
        <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
        <AddressCard/>
      </div>

      <div className='py-20'>
        <OrderTracker activeStep={3}/>
      </div>

      <Grid className='space-y-5' container>
        {[1,1,1,1,1,1].map((item)=>
        <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:'space-between'}}>
            <Grid item xs={6}>
                <div className='flex items-cneter space-x-4'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/x/f/6/xxl-new-white-nofilter-original-imaghzggudfezpr8.jpeg?q=70" alt="" />

                    <div className='space-y-2 ml-5 '>
                        <p className='font-semibold'>Purple silk saree with blue border</p>
                        <p className='space-x-5 opacity-50 text-xs'>
                            <span >Color : Purple</span> 
                            <span>Size : S</span>
                            </p>
                        <p>Seller : linaria</p>
                        <p>Price : 2243rs</p>
                    </div>
                </div>
            </Grid>

            <Grid item >
                <Box sx={{color:deepPurple[500]}}>
                    <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 text-5xl' />
                    <span>Rate & Review Product</span>
                </Box>
            </Grid>
        </Grid>)}
      </Grid>
    </div>
  )
}

export default OrderDetail
