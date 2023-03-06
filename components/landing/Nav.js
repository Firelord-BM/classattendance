import React from "react";
import Link from "next/link"
import { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Nav() {
  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Students",
      link: "/students",
    },
    {
      name: "Staff",
      link: "/staff",
    },
  ];

  const [nav,setNav]=useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('green');


  const handleNav = () =>{
    setNav(!nav)
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  
  return (
    <nav className="absolute flex  items-center justify-between top-0 w-full py-6 md:px-10 px-2 z-10">
      <h1 className="text-green-400 font-bold text-xl">Class Attendance</h1>

      <ul className=" sm:flex hidden items-center justify-between">
        {navLinks.map((l) => (
          <Link href={l.link} key={l.name}>
            <li className="py-2 px-4  hover:cursor-pointer">{l.name}</li>
          </Link>
        ))}
      </ul>

      
         <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
          {navLinks.map((l) => (
          <Link href={l.link} key={l.name}>
            <li className="py-2 px-4  hover:cursor-pointer">{l.name}</li>
          </Link>
        ))}


            {/* <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/students'>Students</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/staff'>Staff</Link>
            </li> */}
          
          </ul>
        </div> 
    </nav>
  );
}