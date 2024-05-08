import './About.css'
import React from 'react'
// import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

import './About.css'

const About: React.FC = () =>
{
    return (
        <>
            <>
                <Navbar
                    brand='Stanley'
                    choices={[
                        { label: 'Home', link:'/Home', active: false }, 
                        { label: 'About', link:'/About', active: true },
                        { label: 'Experiences', link:'/Experiences', active: false },
                        { label: 'Achievements', link:'/Achievements', active: false },
                        { label: 'Projects', link:'/Projects', active: false },
                        { label: 'Contact Me', link:'/Contacts', active: false },
                    ]}
                />
            </>
        </>
    );
}

export default About;