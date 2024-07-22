import React from 'react'
import { MainCarouselData } from './MainCarouselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import {useNavigate} from 'react-router-dom'

const MainCerosel = () => {
    const navigate=useNavigate();
    const items = MainCarouselData.map((item)=> <img className='cursor-pointer z-10' role='presentation'  src={item.imageUrl} alt=""  
    onClick={()=>navigate(`/${item.topLevelCategory}/${item.secondLevelCategory}/${item.thrirdLevelCategory}`)}/> )
  return (
    <AliceCarousel 
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
  )
}

export default MainCerosel
