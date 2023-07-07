import React, {ReactNode} from 'react'

interface Props {
    children: string
}

export const Button = ({children}: Props) => {
    return (
        <button className='btn btn-primary'>{children}</button>
    )
}
