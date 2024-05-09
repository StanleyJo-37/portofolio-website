import './ImageWithText.css'
import 'animate.css'
import React from 'react'

interface ImageWithTextProps {
    src: string;
    alt?: string;
    link?:string
    backgroundColor: string;
    children: React.ReactNode;
}

const ImageWithText: React.FC<ImageWithTextProps> = ({src, alt, link, backgroundColor, children}) =>
{
    return (
        <div className='image-with-text'>
            <img
                src={src}
                alt={alt}
                className='image-prop'
                style={{
                    backgroundColor: backgroundColor
                }} />
            <a href={link}>
                <p className='text-content'>
                    {children}
                </p>
            </a>
        </div>
    )
}

export default ImageWithText;