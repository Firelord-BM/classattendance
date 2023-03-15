import React from 'react'
import Meta from '../Meta'
import Nav from './Nav'
import { icons } from 'react-icons'


const layout = ({ children }) => {
  return (
    <main id='dashboardLayout' className='flex'>
      <Meta title="Dashboard" />
      <Nav />
      <section className='flex-1 bg-white rounded-tl-[20px] rounded-bl-[20px]'>
      <div className=" flex  items-center justify-between w-full py-6 md:px-10 px-2 relative">
          <h1 className='text-left text-black text-2xl pt-8 pl-4 font-black'>Dashboard</h1>
          <h1 className='text-right text-black text-2xl pt-8 pr-4 font-black'>John Doe</h1>
        </div>
        <div className=" md:w-4/5 w-full flex flex-col items-center border-l-8 md:pl-10 mt-10 ">
          <div
            className=" w-full flex flex-wrap items-start justify-between"
            id="cards wrapper"
          >
            {/*container 1*/}
            <div className="md:w-80 w-full   bg-blue-200 md:p-10 p-5  md:mt-0 mt-5 rounded-2xl box-shadow-2xl text-white shadow-blue">
              <i class="fa-solid fa-screen-users"></i>
              <h1 className="text-2xl text-white text-right"> Classes <br/><br/> 00</h1>
              <br />
              
              <br />
            </div>

            {/*container 2 */}
            <br />

            <div className="md:w-80 w-full   bg-purple-200 md:p-10 p-5 md:mt-0 mt-5 rounded-2xl box-shadow-2xl text-white shadow-blue">
              <i class="fa-solid fa-screen-users"></i>
              <h1 className="text-2xl text-white text-right"> Classes <br/><br/>00</h1>
              <br />
              
              <br />
            </div>

            {/*container 3*/}
            <br />

            <div className="md:w-80 w-full   bg-red-300 md:p-10 p-5 md:mt-0 mt-5 rounded-2xl box-shadow-2xl text-white shadow-blue">
              <i className="fa-solid fa-screen-users"></i>
              <h1 className="text-2xl text-white text-right"> Classes <br/><br/> 00</h1>
              <br />
              
              <br />
            </div>
          </div>

          <br />
          <br />
          <br />

        </div>



      </section>
    </main>
  )
}

export default layout