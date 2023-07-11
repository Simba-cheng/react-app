import React, {ReactNode} from 'react'

interface Props {
    children: string;
    // 添加问号, 非必填
    // color?: string;
    // 只能是以下几个选项
    color?: 'primary' | 'secondary' | 'danger';
    onClick: () => void
}

export const Button = ({children, onClick, color = 'primary'}: Props) => {
    return (
        <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
    )
};
