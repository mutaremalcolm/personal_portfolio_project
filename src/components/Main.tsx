import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
  <div id='main'>
    <div className='w-full h-screen absolute top-0 left-0 bg-blue/50'>
    <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
        <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Malcolm Mutare</h1>
        <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
        <TypeAnimation
           sequence={[
        // Same substring at the start will only be typed out once, initially
        '<Full Stack Developer </>',
        3000, // wait 1s before replacing "Mice" with "Hamsters"
        '<With an Object Oriented Approach </>',
        3000,
        '<Full Stack Developer </>',
        3000,
        '<With an Object Oriented Approach </>',
        3000
      ]}
      wrapper="div"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
      repeat={Infinity}
    />
        </h2>
        <div className='flex justify-between  pt-6 max-w-[200px] w-full'>
            <FaTwitter classname='cursor-pointer' size={20}/>
            <FaFacebookF classname='cursor-pointer' size={20}/>
            <FaInstagram classname='cursor-pointer' size={20}/>
            <FaLinkedinIn classname='cursor-pointer' size={20}/>

        </div>
    </div>
    </div>
  </div>
  );
};

export default Main;