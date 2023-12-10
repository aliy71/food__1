import React from 'react'
import ProductItem from '../product-item/productItem'
import { BurgerData } from '@/constants'
import { IProductData } from '@/constants/interface'

type Props = {}

const Article = (props: Props) => {
  return (
    <div className='w-[75%]'>
        <h2 className='text-2xl font-bold mb-2'>Burgers</h2>
        <div className='w-full flex items-center justify-start gap-3 flex-wrap'>
            {
                BurgerData.map(({ title, image, price, details }) => (
                    <ProductItem  title={title} image={image} price={price} details={details} key={title}/>
                ))
            }
        </div>
    </div>
  )
}

export default Article