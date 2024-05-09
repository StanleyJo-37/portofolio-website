import './About.css'
import React from 'react'
// import { Link } from 'react-router-dom';
import Navbar from '../Util/Navbar';

import './About.css'

const About: React.FC = () =>
{
    return (
        <>
            <>
                <Navbar
                    brand='Stanley'
                    choices={[
                        { label: 'Home', link:'/Home', active: false, openInNewTab: false, }, 
                        { label: 'About', link:'/About', active: true, openInNewTab: false, },
                        { label: 'Experiences', link:'/Experiences', active: false, openInNewTab: false, },
                        { label: 'Achievements', link:'/Achievements', active: false, openInNewTab: false, },
                        { label: 'Projects', link:'/Projects', active: false, openInNewTab: false, },
                        { label: 'Contact Me', link:'/Contacts', active: false, openInNewTab: false, },
                        { label: 'CV', link: '/CV', active: false, openInNewTab: true, },
                    ]}
                />
            </>
        </>
    );
}

export default About;