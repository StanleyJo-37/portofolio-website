import './CV.css'
import React from 'react';

const CV: React.FC = () =>
{
    return (
        <>
            <iframe 
                title='CV Stanley Jonathan Wahjudi-Mei-2024'
                src="/pdf/CV Stanley Jonathan Wahjudi-Mei-2024.pdf"
                style={{
                    width: "100vw",
                    height: "100vh",
                }}
            ></iframe>
        </>
    );
}

export default CV;