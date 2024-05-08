import './Experiences.css'
// import { Link } from 'react-router-dom';
import React from 'react';
import Navbar from '../Navbar/Navbar';

const Experiences: React.FC = () =>
{
    return (
        <>
            <Navbar
                brand='Stanley'
                choices={[
                    { label: 'Home', link:'/Home', active: false }, 
                    { label: 'About', link:'/About', active: false },
                    { label: 'Experiences', link:'/Experiences', active: true },
                    { label: 'Achievements', link:'/Achievements', active: false },
                    { label: 'Projects', link:'/Projects', active: false },
                    { label: 'Contact Me', link:'/Contacts', active: false },
                ]}
            />
        </>
    );
}

export default Experiences;