import { menuList } from '@/constants'
import React from 'react'

interface IMenuList {
    label: string,
    icon: string
}

const Menu = () => {
  return (
    <ul className='flex items-center gap-2 py-8'>
        {
            menuList.map(({label, icon}: IMenuList) => (
                <li key={label} className='flex items-center gap-1 py-1 px-2 rounded-full bg-white-900 cursor-pointer hover:bg-yellow' >
                    <img src={icon} alt={`${label} images`} />
                    <span className='text-sm'>{label}</span>
                </li>
            ))
        }
    </ul>
  )
}

export default Menu