import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
const Collection = () => {
  return (
   <section className='pb-40'>
        <div className="container">
            <div className='text-center pb-20'>
                <h2 className='title'>Our Collections</h2>
                <p className='peragraph w-[480px] m-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
            </div>
            <div className="flex gap-8">
                <div className='w-1/2'>
                    <StaticImage
                        alt="Mobile"
                        src="../images/collection.png"
                        layout='fullWidth'
                    />
                </div>
                <div className='w-1/2'>
                <StaticImage
                    alt="Mobile"
                    src="../images/collection-2.png"
                    layout='fullWidth'
                />
                </div>
            </div>
        </div>
   </section>
  )
}

export default Collection
