import './CV.css'
// import { Link } from 'react-router-dom';
import React from 'react';
// import Navbar from '../Navbar/Navbar';

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