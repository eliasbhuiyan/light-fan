import * as React from 'react'
import {GrPersonalComputer} from 'react-icons/gr'

const Catagory = () => {
  return (
    <section className=' pt-20 pb-40'>
        <div className="container">
            <h2 className=' font-sans text-2xl text-secondary font-bold'>Category</h2>
            <div className="flex justify-between mt-8">
                <div className='flex gap-2 items-center px-3 py-1 border-2 border-primary rounded-md font-sans text-xl text-secondary font-normal'>
                    <GrPersonalComputer/>
                    <p>Computer & Laptop</p>
                </div>
                <div className='flex gap-2 items-center px-3 py-1 border-2 border-primary rounded-md font-sans text-xl text-secondary font-normal'>
                    <GrPersonalComputer/>
                    <p>Mobile & Tablet</p>
                </div>
                <div className='flex gap-2 items-center px-3 py-1 border-2 border-primary rounded-md font-sans text-xl text-secondary font-normal'>
                    <GrPersonalComputer/>
                    <p>Camera</p>
                </div>
                <div className='flex gap-2 items-center px-3 py-1 border-2 border-primary rounded-md font-sans text-xl text-secondary font-normal'>
                    <GrPersonalComputer/>
                    <p>TV & Smart Box</p>
                </div>
                <div className='flex gap-2 items-center px-3 py-1 border-2 border-primary rounded-md font-sans text-xl text-secondary font-normal'>
                    <GrPersonalComputer/>
                    <p>Home Appliance</p>
                </div>
                <div className='flex gap-2 items-center px-3 py-1 border-2 border-primary rounded-md font-sans text-xl text-secondary font-normal'>
                    <GrPersonalComputer/>
                    <p>Accessories</p>
                </div>
                <div className='flex gap-2 items-center px-3 py-1 border-2 border-primary rounded-md font-sans text-xl text-secondary font-normal'>
                    <GrPersonalComputer/>
                    <p>Other Categories</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Catagory
