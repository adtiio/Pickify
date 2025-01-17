import React from 'react'
import MainCerosel from '../../components/HomeCerosel/MainCerosel'
import HomeSectionCarousel from '../../components/HomeSectionCerousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/mens_kurta'
import { women_section } from '../../../Data/women_section'
import { useSelector } from 'react-redux'
import ProductCart from '../../components/Product/ProductCart'

const HomePage = () => {
  
  return (
    <div>
      <MainCerosel/>

      <div className=' space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel data={women_section} sectionName={"women's saree"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's kurta"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's kurta"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's kurta"}/>
      </div>
    </div>
  )
}

export default HomePage
