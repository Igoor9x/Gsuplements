import { useState } from 'react'
import Header from './Components/header/Header'
import Span from './Components/Span/Span'
import Categories from './Components/Categories/Categories'
import ShowImagesSlider from './Components/BannerHome/BannerHome'
import PitchBar from './Components/PitchBar/PitchBar'
import SearchBarResponsive from './Components/SearchBarResponsive/SearchBarResponsive'

function App() {
  
  return (
    <>
    <Span />
    <Header />
    <SearchBarResponsive />
    <Categories />
    <ShowImagesSlider />
    <PitchBar /> 
    </>
  )
}

export default App
