import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
const Arrival = () => {
  return (
    <section className='pb-40'>
        <div className="container">
           <div className='text-center mb-20'>
             <h2 className=' text-3xl font-bold text-secondary pb-6'>New Arrival</h2>
             <p className='font-sans text-lg text-secondary font-normal w-[480px] m-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
           </div>
           <div className="flex gap-8">
            <div className=' rounded-xl'>
                <div className=' overflow-hidden rounded-t-xl'>
                  <StaticImage
                    alt="Mobile"
                    src="../images/mbl.png"
                   />
                </div>
                <div className='text-center pb-8 border-b-[1px] border-r-[1px] border-l-[1px] border-primary'>
                    <h3 className='font-sans text-lg text-secondary font-normal pt-8 pb-2'>Smartphone 5G</h3>
                    <p className='font-sans text-lg text-brand font-normal'>$299</p>
                </div>
            </div>
            <div className=' rounded-xl'>
                <div className=' overflow-hidden rounded-t-xl'>
                  <StaticImage
                    alt="Mobile"
                    src="../images/tv.png"
                   />
                </div>
                <div className='text-center pb-8 border-b-[1px] border-r-[1px] border-l-[1px] border-primary'>
                    <h3 className='font-sans text-lg text-secondary font-normal pt-8 pb-2'>Smart TV</h3>
                    <p className='font-sans text-lg text-brand font-normal'>$299</p>
                </div>
            </div>
            <div className=' rounded-xl'>
                <div className=' overflow-hidden rounded-t-xl'>
                  <StaticImage
                    alt="Mobile"
                    src="../images/spkr.png"
                   />
                </div>
                <div className='text-center pb-8 border-b-[1px] border-r-[1px] border-l-[1px] border-primary'>
                    <h3 className='font-sans text-lg text-secondary font-normal pt-8 pb-2'>USB Speaker Portable
</h3>
                    <p className='font-sans text-lg text-brand font-normal'>$299</p>
                </div>
            </div>
           </div>
        </div>
    </section>
  )
}

export default Arrival
