import React from 'react'

type Props = {
    label: string,
    type: string
}

const choiseType = (type: string) => {
    switch (type) {
        case 'primary':
            return 'bg-white-100 text-black'

        case 'secondary':
            return 'bg-yellow text-white-900'
    }
}

const Button = ({ label, type }: Props) => {

    const choosedType = choiseType(type)

    return (
        <button className={`w-full rounded-md ${choosedType}`}> {label} </button>
    )
}

export default Button