import React from 'react'

const Memory = ({memory:{title, subtitle, text, img, experience}}) => {
  return (
    <>
       <div className='relative my-16 md:mb-7'>
        <div className='travigo-container flex items-center justify-between gap-16 xl:gap-9 lg:flex-col-reverse'>
          <div className='flex items-center justify-start lg:justify-center w-full max-w-md'>
            <img src={img} alt="memory/img" className='w-auto h-[55vh] object-fill'/>
          </div>
          <div className='grid items-center w-full max-w-2xl lg:text-center'>
            <h1 className='text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg'>{title}</h1>
            <h1 className='text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg'>{subtitle}</h1>
            <p className='text-base my-5 sm:text-sm'>{text}</p>
            <div className='grid items-center grid-cols-3 gap-7 xl:gap-3'>
              {
                experience?.map((val,i)=>(
                  <div key={i} className='bg-gradient-to-b from-emerald-300 to-green-300 rounded-lg  flex items-center justify-center flex-col text-slate-900 text-center py-7 px-4.5 xl:p-5 filter cursor-pointer hover:scale-105 transition-all duration-400'>
                    <h1 className='text-3xl xl:text-2xl sm:text-1xl font-bold'>{val.number}</h1>
                    <p className='text-lg xl:text-base sm:text-sm xsm:text-sm font-medium'>{val.title}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
       </div>
    </>
  )
}

export default Memory