import './Projects.css'
// import { Link } from 'react-router-dom';
import React from 'react';
import Navbar from '../Util/Navbar';

const Projects: React.FC = () =>
{
    return (
        <>
            <Navbar
                brand='Stanley'
                choices={[
                    { label: 'Home', link:'/Home', active: false, openInNewTab: false, }, 
                    { label: 'About', link:'/About', active: false, openInNewTab: false, },
                    { label: 'Experiences', link:'/Experiences', active: false, openInNewTab: false, },
                    { label: 'Achievements', link:'/Achievements', active: false, openInNewTab: false, },
                    { label: 'Projects', link:'/Projects', active: true, openInNewTab: false, },
                    { label: 'Contact Me', link:'/Contacts', active: false, openInNewTab: false, },
                    { label: 'CV', link: '/CV', active: false, openInNewTab: true, },
                ]}
            />
        </>
    );
}

export default Projects;