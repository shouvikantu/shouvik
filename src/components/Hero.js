import React from 'react'
import shouvik from "../asset/shouvik.webp"

const Hero = () => {
  return (
    <div className=' bg-stone-400 min-h-screen flex items-center justify-center snap-center'>
  <div className='container mx-auto px-4 py-10 flex flex-col sm:flex-row items-center'>
    <div className='sm:w-1/2 md:pr-10 text-center md:text-left'>
      <h1 className='text-3xl font-bold text-gray-800 mb-4 animate-pulse'>Hey, I'm Shouvik Ahmed Antu</h1>
      <p className='text-black leading-relaxed mb-8 text-justify'>Ambitious Computer Science student, passionate about AI and machine learning, with a focus on creating innovative solutions that leverage cutting-edge technology. With a strong foundation in frontend development, I seek to design intuitive and elegant user interfaces that harness the power of AI to solve complex problems.</p>
      <button className='bg-stone-500 hover:animate-bounce hover:bg-stone-700 text-white font-bold py-2 px-4 rounded-full transition duration-200 ease-in-out'>Projects</button>
    </div>
    <div className='sm:w-1/2 order-first sm:px-4'>
      <img className='rounded-full border border-stone-700 mx-auto mb-4 md:mb-0' src={shouvik} alt='headshot of Shouvik Ahmed Antu' height={450} width={450} />
    </div>
  </div>
</div>




  )
}

export default Hero