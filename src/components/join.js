import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
const Join = () => {
  return (
    <section className=' pb-20'>
      <div className="container relative">
        <StaticImage
            alt="Mobile"
            src="../images/joinbg.png"
            layout='fullWidth'
            className='rounded-xl'
        />
        <div className='absolute top-1/2 left-32 -translate-y-1/2'>
        <h2 className='text-4xl font-bold text-white pb-4'>Join our newsletter now!</h2>
        <p className='peragraph'>Register now and get our latest updates and promos.</p>
        <div className='mt-14 bg-white flex rounded-xl'>
            <input type="email" placeholder='Enter your email' className='pl-8 w-full rounded-xl'/>
            <button className=' py-4 px-8 bg-brand rounded-xl font-sans text-lg text-white font-normal'>Join</button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Join
