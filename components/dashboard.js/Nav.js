import Link from 'next/link'
import React,{useState} from 'react'
import { icons } from 'react-icons'

const nav = () => {
  const [active,setActive]=useState(0);

const dashboardLinks =[
  {
    id:0,
    name:"Dashboard",
    link:"/dashboard",
    icon:"fa-gauge"
  },
  {
    id:1,
    name:"Attendance",
    link:"/dashboard",
    icon:"fa-clipboard-user"
  },
  {
    id:2,
    name:"Register",
    link:"/dashboard",
    icon:" fa-address-card"
  },
  {
    id:3,
    name:"Profile",
    link:"/dashboard",
    icon:"fa-user"
  },

]


  return (
<nav className='w-1/5 pl-20 pt-10 relative'id='navDashboard'>
     <h1 className='text-4xl text-white font-black'>CAMS</h1>
     <ul className='mt-20 w-full'>
     {
      dashboardLinks.map((link)=>(
        <Link key={link.name} href={link.link}>
          <li onClick={()=>{setActive(link.id)}} className={`flex items-center mb-4 text-2xl ${active==link.id?'bg-white text-green-400':'text-white'}  rounded-tl-[20px] rounded-bl-[20px] py-3 pl-2`}>
          <i className={`fa-solid ${link.icon}  pr-4`}></i>&nbsp;
          {link.name}

          </li>
        </Link>
      ))
     }

     </ul>
     <h3 className=' text-white italic absolute bottom-10 '>All rights reserved</h3>
      </nav>  )
}

export default nav