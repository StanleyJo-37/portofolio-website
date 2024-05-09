import './ImageWithText.css'
import React from 'react'

interface ImageWithTextProps {
    src: string;
    alt?: string;
    backgroundColor: string;
    children: React.ReactNode;
}

const ImageWithText: React.FC<ImageWithTextProps> = ({src, alt, backgroundColor, children}) =>
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
            <p className='text-content'>
                {children}
            </p>
        </div>
    )
}

export default ImageWithText;