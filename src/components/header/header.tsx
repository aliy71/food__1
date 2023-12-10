import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='container py-4 pb-8' >
        <p className='text-center text-white-900 text-sm'>Meal Foods</p>
        <div className='flex items-start justify-center py-2 gap-4'>
            <div className='w-[50%] flex justify-end pr-4'>
                <img src="/images/main__logo.svg" alt="main_logo" loading='lazy' />
            </div>
            <div className='w-[50%] py-6'>
                <h1 className='text-white-900 text-5xl font-bold leading-[60px]'>Только самые <span className='text-orange-500'>сочные бургеры!</span></h1>
                <p className='text-[12px] text-white-900 mt-8'>Бесплатная доставка от 599₽</p>
            </div>
        </div>
    </div>
  )
}

export default Header