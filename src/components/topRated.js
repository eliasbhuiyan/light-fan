import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";

const TopRated = () => {
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: (dots) => (
            <div>
              <ul className='flex gap-2 absolute -top-12 right-0 cursor-pointer'>{dots}</ul>
            </div>
          ),
          customPaging: i => (
            <div
             className='w-3 h-3 bg-secondary text-[0px] rounded-full'
            >
              {i + 1}
            </div>
          )
      
      };
  return (
    <section className='pb-40'>
        <div className="container">
            <h2 className='title'>Top Rated Product</h2>
            <div className='relative'>
                <Slider {...settings} className='gap-8'>
                    <div className='rounded-xl px-4'>
                        <div className=' overflow-hidden rounded-t-xl'>
                        <StaticImage
                            alt="Mobile"
                            src="../images/flsh-1.png"
                            layout='fullWidth'
                        />
                        </div>
                        <div className='text-center pb-8 border-b-[1px] border-r-[1px] border-l-[1px] border-primary'>
                            <h3 className='font-sans text-lg text-secondary font-medium pt-8 pb-2'>Wireless Headphone</h3>
                            <p className='font-sans text-lg text-brand font-normal'>$299</p>
                            <div>
                                <h4>Available: 10 </h4>
                            </div>
                        </div>
                        
                    </div>
                    <div className='rounded-xl px-4'>
                        <div className=' overflow-hidden rounded-t-xl'>
                        <StaticImage
                            alt="Mobile"
                            src="../images/flsh-2.png"
                            layout='fullWidth'
                        />
                        </div>
                        <div className='text-center pb-8 border-b-[1px] border-r-[1px] border-l-[1px] border-primary'>
                            <h3 className='font-sans text-lg text-secondary font-medium pt-8 pb-2'>Air Purifier</h3>
                            <p className='font-sans text-lg text-brand font-normal'>$299</p>
                        </div>
                    </div>
                    <div className='rounded-xl px-4'>
                        <div className=' overflow-hidden rounded-t-xl'>
                        <StaticImage
                            alt="Mobile"
                            src="../images/flsh-3.png"
                            layout='fullWidth'
                        />
                        </div>
                        <div className='text-center pb-8 border-b-[1px] border-r-[1px] border-l-[1px] border-primary'>
                            <h3 className='font-sans text-lg text-secondary font-medium pt-8 pb-2'>Bluetooth Printer</h3>
                            <p className='font-sans text-lg text-brand font-normal'>$299</p>
                        </div>
                    </div>
                    <div className='rounded-xl px-4'>
                        <div className=' overflow-hidden rounded-t-xl'>
                        <StaticImage
                            alt="Mobile"
                            src="../images/flsh-2.png"
                            layout='fullWidth'
                        />
                        </div>
                        <div className='text-center pb-8 border-b-[1px] border-r-[1px] border-l-[1px] border-primary'>
                            <h3 className='font-sans text-lg text-secondary font-medium pt-8 pb-2'>Air Purifier</h3>
                            <p className='font-sans text-lg text-brand font-normal'>$299</p>
                        </div>
                    </div>
                    <div className='rounded-xl px-4'>
                        <div className=' overflow-hidden rounded-t-xl'>
                        <StaticImage
                            alt="Mobile"
                            src="../images/flsh-3.png"
                            layout='fullWidth'
                        />
                        </div>
                        <div className='text-center pb-8 border-b-[1px] border-r-[1px] border-l-[1px] border-primary'>
                            <h3 className='font-sans text-lg text-secondary font-medium pt-8 pb-2'>Bluetooth Printer</h3>
                            <p className='font-sans text-lg text-brand font-normal'>$299</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    </section>
  )
}

export default TopRated
