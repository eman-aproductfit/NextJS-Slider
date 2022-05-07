
import Image from 'next/image'
import Slider from "react-slick";

import styles from '../styles/Layout.module.css'
import Layout from '../components/Layout';

export default function Home() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    
  };

  return (
    <div>
   
    <div className="container">
        <Slider {...settings}>
          <div>
            <img src="http://placekitten.com/g/700/400" />
          </div>
          <div>
            <img src="http://placekitten.com/g/700/400" />
          </div>
          <div>
            <img src="http://placekitten.com/g/700/400" />
          </div>
          <div>
            <img src="http://placekitten.com/g/700/400" />
          </div>
        </Slider>
      </div>
      </div>
  )
}
