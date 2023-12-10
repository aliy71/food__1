import React from 'react'
import ProductItem from '../product-item/productItem'

type Props = {}

const Article = (props: Props) => {
  return (
    <div className='w-75%'>
        <h2 className='text-2xl font-bold mb-2'>Kind of Product</h2>
        <div className='flex items-center justify-start gap-3'>
            <ProductItem />
        </div>
    </div>
  )
}

export default Article