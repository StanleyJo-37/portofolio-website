import './ImageWithText.css'
import "animate.css/animate.compat.css"
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

interface ImageWithTextProps {
    src: string;
    alt?: string;
    link?:string
    backgroundColor: string;
    title: string
    children: React.ReactNode;
}

const ImageWithText: React.FC<ImageWithTextProps> = ({src, alt, link, backgroundColor, title, children}) =>
{
    return (
        <ScrollAnimation className='image-with-text' animateIn='fade-up'>
            <img
                src={src}
                alt={alt}
                className='image-prop'
                style={{
                    backgroundColor: backgroundColor
                }} />
            <div id="comp-text-content">
                <h1>{title}</h1>
                <a href={link}>
                    <p className='text-content'>
                        {children}
                    </p>
                </a>
            </div>
        </ScrollAnimation>
    )
}

export default ImageWithText;