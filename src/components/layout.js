import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import {AiOutlineInstagram,AiFillFacebook,AiOutlineTwitter,AiFillLinkedin,AiOutlineMail} from "react-icons/ai" 
import {IoCallOutline} from "react-icons/io5" 
import {RxDashboard} from "react-icons/rx" 
import {BsFillSearchHeartFill,BsFillBagHeartFill} from "react-icons/bs" 
const Layout = ({ pageTitle, children }) => {
 
  return (
    <div>
       <header>
           <div className='container'>
             <div className='flex items-center border-b-[1px] border-b-primary py-4'>
                <div className='w-1/2'>
                    <ul className='flex gap-8 text-primary text-xl'>
                      <li><Link to='#'><AiOutlineInstagram/></Link></li>
                      <li><Link to='#'><AiFillFacebook/></Link></li>
                      <li><Link to='#'><AiOutlineTwitter/></Link></li>
                      <li><Link to='#'><AiFillLinkedin/></Link></li>
                    </ul>
                  </div>
                  <div className='w-1/2'>
                    <ul className='flex justify-end gap-8'>
                      <li><Link to='tel: +098709875' className='flex gap-4 items-center font-sans text-lg'><IoCallOutline className='text-brand'/><span className='text-secondary'>+098709875</span></Link></li>
                      <li><Link to='mailto: support@tronix.com' className='flex gap-4 items-center font-sans text-lg'><AiOutlineMail className='text-brand'/><span>support@tronix.com</span></Link></li>
                    </ul>
                  </div>              
             </div>
             <div className="flex py-8 items-center">
               <div className='w-3/12'>
                 <Link to='/'><StaticImage src="../images/logo.png" width={120} alt="Logo" /></Link>
               </div>
               <div className=' w-[45%] flex items-center gap-8'>
                  <div className='p-3 bg-[rgba(208,208,210,0.26)] rounded-lg w-fit'>
                    <RxDashboard className='text-secondary text-md '/>
                  </div>
                  <div className='bg-[rgba(208,208,210,0.26)] rounded-lg flex items-stretch w-full'>
                    <input type="text" placeholder='Search here' className='w-full border-none bg-transparent py-2 px-8'/>
                    <span className='px-3 bg-brand flex items-center rounded-r-lg'><BsFillSearchHeartFill className='text-white'/></span>
                  </div>
               </div>
               <div className='w-[30%] flex justify-end items-center gap-16'>
                   <ul className='flex gap-8 text-3xl text-secondary'>
                      <li className='relative h-fit w-fit'><BsFillBagHeartFill/>
                       <span class="absolute -top-3 -right-3 inline-flex rounded-full p-1 bg-brand text-white text-xs">99
                         <span class="animate-ping absolute top-0 left-0 h-full w-full rounded-full bg-brand opacity-75"></span>
                       </span>
                      </li>
                      <li><AiOutlineMail/></li>
                   </ul>
                   <div className='flex gap-10 items-center'>
                     <Link to='#' className='text-brand underline'>Sign In</Link>
                     <Link to='#' className=' py-4 px-10 bg-brand rounded-md text-white'>Sign Up</Link>
                   </div>
               </div>
             </div>
           </div>
       </header>
       <nav>
        <div className="container">
            <ul className='flex justify-center gap-12 text-secondary font-normal text-lg py-9'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link>Product</Link></li>
                <li><Link>Blog</Link></li>
                <li><Link>Contact</Link></li>
            </ul>
        </div>
       </nav>
      <main>
        {/* <h1>{pageTitle}</h1> */}
        {children}
      </main>
    </div>
  )
}

export default Layout