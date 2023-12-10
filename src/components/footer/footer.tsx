import { Logo } from '@/assets'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
        <div className='flex items-start justify-between'>
            <div>
                <Logo />
            </div>
            <div>
                <h4>Номер для заказа</h4>
                <p>
                    
                    <span>+7(930)833-38-11</span>
                </p>
            </div>
        </div>
        <p>© YouMeal, 2023</p>
    </div>
  )
}

export default Footer