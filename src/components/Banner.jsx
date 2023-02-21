import React from 'react'

const Banner = ({bannerAPI:{title,text, imgSrc, btnText}}) => {
  return (
    <>
    <div className='relative w-full max-w-5xl xl:w-[95vw] ml-auto mr-auto mt-0 mb-2 rounded-lg '>
        <div className='relative flex items-center'>
            <img src={imgSrc} alt="banner/api" className='h-[35] w-full rounded-lg'/>
        </div>
        <div className='absolute top-24 left-12 w-full flex flex-col items-start md:items-center md:justify-center md:left-0 md:top-14'>
            <h1 className='text-3xl font-bold text-slate-900 drop-shadow-lg filter'>{title}</h1>
            <p className='text-base sm:text-sm'>{text}</p>
        <button className='py-1.5 px-5 bg-gradient-to-b from-gray-900 to-slate-800 text-slate-300 text-sm rounded-full shadow-lg shadow-slate-900 transition-all duration-300 active:scale-110'>{btnText}</button>
        </div>
    </div>
    </>
  )
}

export default Banner