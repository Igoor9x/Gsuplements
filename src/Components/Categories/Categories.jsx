import React from 'react';
import './Categories.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Pagination, Navigation } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

function Categories() {

  const navLinks = [
    {id:1, name: 'Top20', url:""},
    {id:2, name: 'Lançamentos', url:"https://www.gsuplementos.com.br/lancamentos"},
    {id:3, name: 'Whey Protein', url:"https://www.gsuplementos.com.br/whey-protein"},
    {id:4, name: 'Creatina', url:"https://www.gsuplementos.com.br/creatina/"},
    {id:5, name: 'Pré-Treino', url:"https://www.gsuplementos.com.br/pre-treino/"},
    {id:6, name: 'Roupas', url:""},
    {id:7, name: 'Top20', url:""},
    {id:8, name: 'Lançamentos', url:""},
    {id:9, name: 'Whey Protein', url:""},
    {id:10, name: 'Creatina', url:""},
    {id:11, name: 'Pré-Treino', url:""}
  ]

  function clickRedirection(link){
    window.location.href = link;
  }

  return (
    
    <div className='containerCategories'>
      <nav className='maxWidthCategories'>
        <li className='fisrtCategory'> <FontAwesomeIcon icon={faBars} /> <span> CATEGORIAS</span></li>
        <li><span> TOP 20</span></li>
        <li><span> LANÇAMENTOS</span></li>
        <li><span> WHEY PROTEIN</span></li>
        <li><span> CREATINA</span></li>
        <li><span> PRÉ-TREINO</span></li>
        <li><span> OBJETIVOS</span></li>
        <li><span> ROUPAS</span></li>
      </nav>
      <div className='sliderCategory'>
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={7}
          loop={true}
          navigation={true}
        >
        {navLinks.map((link) =>(
          <SwiperSlide key={link.id}>
            <span onClick={() => clickRedirection(link.url)} >{link.name}</span>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Categories

