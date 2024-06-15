import './ImageWithText.css'
import "animate.css/animate.css"
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

interface ImageWithTextProps {
    src: string;
    alt?: string;
    link?:string;
    backgroundColor: string;
    title: string;
    children: React.ReactNode;
}

const ImageWithText: React.FC<ImageWithTextProps> = ({src, alt, link, backgroundColor, title, children}) =>
{
    return (
        <ScrollAnimation className='image-with-text' animateIn='fadeInUp' animateOnce={true} offset={0} animatePreScroll={false}>
            <div className="ImageWithText">
                <img
                    src={src}
                    alt={alt}
                    className='image-prop'
                    style={{
                        backgroundColor: backgroundColor
                    }} />
                <div className="comp-text-content">
                    <h1>{title}</h1>
                    <a href={link} className='text-content'>
                        <p>
                            {children}
                        </p>
                    </a>
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default ImageWithText;