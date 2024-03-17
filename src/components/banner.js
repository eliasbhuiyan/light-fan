import * as React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from "react-icons/md" 
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='text-brand text-3xl p-3 bg-white shadow-md w-fit rounded-lg absolute top-1/2 -right-2 cursor-pointer'
      onClick={onClick}
    ><MdKeyboardArrowRight/></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className='text-brand text-3xl p-3 bg-white shadow-md w-fit rounded-lg absolute top-1/2 -left-2 z-10 cursor-pointer'
      onClick={onClick}
      
    ><MdKeyboardArrowLeft/></div>
  );
}
const Banner = ({data}) => {
  const image = data.allFile.nodes
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
     <section>
      <div className="container">
      <Slider {...settings}>
        {
          image?.map((image, index)=>(
            <GatsbyImage image={image.childImageSharp?.gatsbyImageData} alt={index}/>
          ))
          }          
        </Slider>
      </div>
     </section>
  )
}

export default Banner