import './Button.css'
import React from 'react'
import { Link } from 'react-router-dom'

type ButtonType = 'button' | 'submit' | 'reset' | undefined;

interface ButtonProps {
    label: string;
    link: string;
    id: string;
    // color: string;
    buttonType: ButtonType;
}

const Button: React.FC<ButtonProps> = ({id, label, link, buttonType}) =>
{
    return (
        <Link to={ link } className='no-underline'>
            <button id={'button' + id} className='w-auto h-auto p-[.75rem] box-content border-2 border-solid border-green text-green text-[1rem] no-underline hover:bg-green hover:text-background'  type={buttonType} >
                { label }
            </button>
        </Link>
    )
}

export default Button;