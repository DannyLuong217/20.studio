import React from 'react'
import '.././styles/Home.css'
import img01 from '../asset/img.png'
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function Home() {
  return (
    <>
    <div data-scroll-section>
      <div className='warpper-content hero-section'>
       
        <div className='img-hero-sec'>
         
        </div>
        <div className='content'>
          <div className='title'>
            <span>Nơi thiết kế</span>
            <span>Thành hiện thực</span>
          </div>
          <div className='name'>
            <h2>20studio</h2>
          </div>
          <div className='more'>
              <p>We believe our industry is blinded by numbers. While buying decisions are based on emotion.</p>
              <a>Về chúng tôi<AiOutlineArrowRight/></a>
          </div>
        </div>
      </div>
      <div className='welcome-section'>
       <img src={img01} alt='' />
      </div>
     
        
     </div>
        
        
    </>
  )
}