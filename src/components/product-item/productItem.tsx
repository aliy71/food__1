import { IProductData } from '@/assets/interface'
import { Button } from '@/design'
import React from 'react'

const ProductItem = ({ title, price, details, image }: IProductData) => {
  return (
    <div className='w-[32%] bg-white-900 p-2 rounded-md'>
      <div className='rounded-lg overflow-hidden'>
        <img src={image.src} alt={`image`} loading='lazy' />
      </div>
      <div>
        <h3 className='text-2xl font-semibold'>{price.just}</h3>
        <h5 className='text-sm font-bold mb-3'>{title}</h5>
        <span className='text-white-500'>{details.benefits.massa}</span>
        <div>
          <Button label='Добавить' type='primary' />
        </div>
      </div>
    </div>
  )
}

export default ProductItem