import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";

const FlashSale = () => {
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
            <h2 className='title'>Flash Sale</h2>
            <div className='flex gap-8'>
                <div className='w-1/4 h-full relative'>
                    <StaticImage
                            alt="Mobile"
                            src="../images/flashSale.png"
                            layout='fullWidth'
                            
                    />
                    <div className="flex gap-6 justify-center text-center absolute bottom-8 left-1/2 -translate-x-1/2">
                       <div className='py-1 px-2 rounded-xl border-[1px] border-white'>
                          <p className='text-xl font-bold text-white'>2</p>
                          <p className='font-sans text-lg font-normal text-white'>Hour</p>
                       </div>
                       <div className='py-1 px-2 rounded-xl border-[1px] border-white'>
                          <p className='text-xl font-bold text-white'>2</p>
                          <p className='font-sans text-lg font-normal text-white'>Hour</p>
                       </div>
                       <div className='py-1 px-2 rounded-xl border-[1px] border-white'>
                          <p className='text-xl font-bold text-white'>2</p>
                          <p className='font-sans text-lg font-normal text-white'>Hour</p>
                       </div>
                   </div>
                </div>
                <div className='w-3/4 relative'>
                    <Slider {...settings} className='gap-8'>
                        <div className='rounded-xl px-4'>
                            <div className=' overflow-hidden rounded-t-xl'>
                            <StaticImage
                                alt="Mobile"
                                src="../images/flsh-1.png"
                                layout='fullWidth'
                            />
                            </div>
                            <div className='text-center pb-8 px-8 border-b-[1px] border-r-[1px] border-l-[1px] border-primary'>
                                <h3 className='font-sans text-lg text-secondary font-medium pt-8 pb-2'>Wireless Headphone</h3>
                                <p className='font-sans text-lg text-brand font-normal'>$299</p>
                                  <div className='flex justify-between pt-8 pb-2'>
                                    <h4>Available: 10 </h4>
                                    <span>Sold: 5</span>
                                  </div>
                                  <div className='w-full h-4 rounded-lg bg-primary relative'>
                                    <span className=' absolute top-0 left-0 w-[40%] h-full rounded-lg bg-brand'></span>
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
                            <div className='text-center pb-8 px-8 border-b-[1px] border-r-[1px] border-l-[1px] border-primary'>
                                <h3 className='font-sans text-lg text-secondary font-medium pt-8 pb-2'>Air Purifier</h3>
                                <p className='font-sans text-lg text-brand font-normal'>$299</p>
                                <div className='flex justify-between pt-8 pb-2'>
                                    <h4>Available: 10 </h4>
                                    <span>Sold: 5</span>
                                  </div>
                                  <div className='w-full h-4 rounded-lg bg-primary relative'>
                                    <span className=' absolute top-0 left-0 w-[50%] h-full rounded-lg bg-brand'></span>
                                  </div>
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
                            <div className='text-center pb-8 px-8 border-b-[1px] border-r-[1px] border-l-[1px] border-primary'>
                                <h3 className='font-sans text-lg text-secondary font-medium pt-8 pb-2'>Bluetooth Printer</h3>
                                <p className='font-sans text-lg text-brand font-normal'>$299</p>
                                <div className='flex justify-between pt-8 pb-2'>
                                    <h4>Available: 10 </h4>
                                    <span>Sold: 5</span>
                                  </div>
                                  <div className='w-full h-4 rounded-lg bg-primary relative'>
                                    <span className=' absolute top-0 left-0 w-[60%] h-full rounded-lg bg-brand'></span>
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
                            <div className='text-center pb-8 px-8 border-b-[1px] border-r-[1px] border-l-[1px] border-primary'>
                                <h3 className='font-sans text-lg text-secondary font-medium pt-8 pb-2'>Air Purifier</h3>
                                <p className='font-sans text-lg text-brand font-normal'>$299</p>
                                <div className='flex justify-between pt-8 pb-2'>
                                    <h4>Available: 10 </h4>
                                    <span>Sold: 5</span>
                                  </div>
                                  <div className='w-full h-4 rounded-lg bg-primary relative'>
                                    <span className=' absolute top-0 left-0 w-[30%] h-full rounded-lg bg-brand'></span>
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
                            <div className='text-center pb-8 px-8 border-b-[1px] border-r-[1px] border-l-[1px] border-primary'>
                                <h3 className='font-sans text-lg text-secondary font-medium pt-8 pb-2'>Air Purifier</h3>
                                <p className='font-sans text-lg text-brand font-normal'>$299</p>
                                <div className='flex justify-between pt-8 pb-2'>
                                    <h4>Available: 10 </h4>
                                    <span>Sold: 5</span>
                                  </div>
                                  <div className='w-full h-4 rounded-lg bg-primary relative'>
                                    <span className=' absolute top-0 left-0 w-[70%] h-full rounded-lg bg-brand'></span>
                                  </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FlashSale
