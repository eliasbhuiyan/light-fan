import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
const Featured = () => {
  return (
    <section className='pb-40'>
        <div className="container">
            <div className='text-center pb-20'>
                <h2 className='title'>Featured Products</h2>
                <p className='peragraph w-[480px] m-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
            </div>
            <div className="flex gap-8">
                <div className="w-1/2 text-center py-12 rounded-lg border-[1px] border-primary">
                   <h3 className='text-xl font-bold text-secondary pb-2'>Wireless Microphone</h3>
                   <p className='peragraph'>$29.99 <span className='text-brand'>- $19.99</span></p>
                   <div className='w-[500px] m-auto my-8'>
                        <StaticImage
                            alt="Mobile"
                            src="../images/mic.png"
                            layout='fullWidth'
                        />
                   </div>
                   <div className="flex gap-8 justify-center">
                       <div className='py-2 px-6 rounded-3xl border-[1px] border-primary'>
                          <p className='text-2xl font-bold text-brand'>2</p>
                          <p className='peragraph2'>Hour</p>
                       </div>
                       <div className='py-2 px-6 rounded-3xl border-[1px] border-primary'>
                          <p className='text-2xl font-bold text-brand'>2</p>
                          <p className='peragraph2'>Hour</p>
                       </div>
                       <div className='py-2 px-6 rounded-3xl border-[1px] border-primary'>
                          <p className='text-2xl font-bold text-brand'>2</p>
                          <p className='peragraph2'>Hour</p>
                       </div>
                   </div>
                </div>
                <div className='w-1/2 flex flex-col justify-between'>
                    <div className="flex">
                        <div className="w-2/5 rounded-l-3xl overflow-hidden">
                            <StaticImage
                                    alt="Mobile"
                                    src="../images/watch.png"
                                    layout='fullWidth'
                                />
                        </div>
                        <div className="w-3/5 py-8 pl-8 flex flex-col justify-between border-[1px] border-primary rounded-r-3xl">
                            <p className='px-8 py-3 bg-brand w-fit rounded-md font-sans text-lg text-white font-normal'>Limited Offer</p>
                            <div>
                            <h3 className='text-lg font-semibold text-secondary pb-1'>Smart Watch New Series</h3>
                            <p className='font-sans text-lg text-secondary font-normal'>$29.99 <span className='text-brand'>- $19.99</span></p>
                            </div>
                            <div className="flex gap-8 text-center">
                                <div className='py-2 px-6 rounded-3xl border-[1px] border-primary'>
                                    <p className='text-2xl font-bold text-brand'>2</p>
                                    <p className='font-sans text-lg text-secondary font-normal'>Hour</p>
                                </div>
                                <div className='py-2 px-6 rounded-3xl border-[1px] border-primary'>
                                    <p className='text-2xl font-bold text-brand'>2</p>
                                    <p className='font-sans text-lg text-secondary font-normal'>Hour</p>
                                </div>
                                <div className='py-2 px-6 rounded-3xl border-[1px] border-primary'>
                                    <p className='text-2xl font-bold text-brand'>2</p>
                                    <p className='font-sans text-lg text-secondary font-normal'>Hour</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-2/5 rounded-l-3xl overflow-hidden">
                            <StaticImage
                                    alt="Mobile"
                                    src="../images/camera.png"
                                    layout='fullWidth'
                                />
                        </div>
                        <div className="w-3/5 py-8 pl-8 flex flex-col justify-between border-[1px] border-primary rounded-r-3xl">
                            <p className='px-8 py-3 bg-brand w-fit rounded-md font-sans text-lg text-white font-normal'>Limited Offer</p>
                            <div>
                            <h3 className='text-lg font-semibold text-secondary pb-1'>Camera HD + Lens</h3>
                            <p className='peragraph'>$29.99 <span className='text-brand'>- $19.99</span></p>
                            </div>
                            <div className="flex gap-8 text-center">
                                <div className='py-2 px-6 rounded-3xl border-[1px] border-primary'>
                                    <p className='text-2xl font-bold text-brand'>2</p>
                                    <p className='peragraph2'>Hour</p>
                                </div>
                                <div className='py-2 px-6 rounded-3xl border-[1px] border-primary'>
                                    <p className='text-2xl font-bold text-brand'>2</p>
                                    <p className='peragraph2'>Hour</p>
                                </div>
                                <div className='py-2 px-6 rounded-3xl border-[1px] border-primary'>
                                    <p className='text-2xl font-bold text-brand'>2</p>
                                    <p className='peragraph2'>Hour</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Featured
