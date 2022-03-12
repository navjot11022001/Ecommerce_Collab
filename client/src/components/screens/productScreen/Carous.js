import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carous.css'

function Carous(props) {
    return (
        <div>
            

    <Carousel className='carousel'>

    <Carousel.Item>
    <img
      className="d-block w-100 Carouseimage"
      src="https://assets.ajio.com/cms/AJIO/WEB/11032022-D-Unisex-topbannercarousel-p1-puma-4070.jpg"
      alt="Second slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 Carouseimage"
      src= "https://assets.ajio.com/cms/AJIO/WEB/11032022-D-Unisex-topbannercarousel-p2-trends-upto70.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 Carouseimage"
      // src="https://scoopempire.com/wp-content/uploads/2019/01/majid-mall-dubai1.png"
      src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/9ce82891-515e-4781-a427-a95fef24902e1646751364756-Kurtas---Sets_Desk.jpg'
      alt="Third slide"
    />


  </Carousel.Item>


  <Carousel.Item>
    <img
      className="d-block w-100 Carouseimage"
      src='https://assets.ajio.com/cms/AJIO/WEB/11032022-D-Unisex-topbannercarousel-p5-brands-min55.jpg'
      // src="https://scoopempire.com/wp-content/uploads/2019/01/majid-mall-dubai1.png"
      // src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/9ce82891-515e-4781-a427-a95fef24902e1646751364756-Kurtas---Sets_Desk.jpg'
      alt="Third slide"
    />


  </Carousel.Item>

</Carousel>



        </div>
    );
}

export default Carous;