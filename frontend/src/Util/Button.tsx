import './Button.css'
import React from 'react'
import { Link } from 'react-router-dom'

type ButtonType = 'button' | 'submit' | 'reset' | undefined;

interface ButtonProps {
    label: string;
    link: string;
    id: string;
    color: string;
    buttonType: ButtonType;
}

const Button: React.FC<ButtonProps> = ({id, label, link, color, buttonType}) =>
{
    return (
        <Link to={link} className='button-link' style={{color: color}}>
            <button id={'button' + id} className={'button ' + color}  type={buttonType} >
                {label}
            </button>
        </Link>
    )
}

export default Button;