import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate=useNavigate();
    
    return (
        <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-lg hover:shadow-gray-500  hover:shadow-2xl hover:border-white border'>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img className='w-5[rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/x/f/6/xxl-new-white-nofilter-original-imaghzggudfezpr8.jpeg?q=70"></img>
                        <div className='ml-5 space-y-2'>
                            <p className=''>Red cotton saree with line net print</p>
                            <p className='opacity-50 text-xs font-semibold'>Size: S</p>
                            <p className='opacity-50 text-xs font-semibold'>Color: Red</p>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={2}>
                    <p>1223rs</p>
                </Grid>

                <Grid item xs={4}>
                    {true && <div>
                            <p>
                            <span>
                                <AdjustIcon sx={{width:'15px',height:"15px"}} className='text-green-600 mr-2'/>
                                Delevered on March 03
                            </span>
                            
                        </p>
                        <p className='text xs'>Your item is delevered</p>
                        </div>}

                   {false && <p>
                        <span>
                            Expected Delivery On Mar 03
                        </span>
                    </p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard
