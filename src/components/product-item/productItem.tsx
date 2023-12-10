import { Button } from '@/design'
import React from 'react'

type Props = {}

const ProductItem = (props: Props) => {
  return (
    <div className='bg-white-900 p-2 rounded-md'>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <h3 className='text-2xl font-semibold'>689₽</h3>
            <h5 className='text-sm'>Мясная бомба</h5>
            <span>300</span>
            <div>
                <Button label='Добавить' type='primary'/>
            </div>
        </div>
    </div>
  )
}

export default ProductItem