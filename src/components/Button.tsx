import React, {ReactNode} from 'react'

interface Props {
    children: string;
    // 添加问号, 非必填
    // color?: string;
    // 只能是以下几个选项
    color?: 'primary' | 'secondary' | 'danger';
    // 类似 Java 中的行为参数化, 将行为(需要执行的动作方法)通过参数传递
    onClick: () => void
}

export const Button = ({children, onClick, color = 'primary'}: Props) => {
    return (
        <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
    )
};
