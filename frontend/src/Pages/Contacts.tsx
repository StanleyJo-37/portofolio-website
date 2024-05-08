import './Contacts.css'
// import { Link } from 'react-router-dom';
import React from 'react';
import Navbar from '../Navbar/Navbar';

const Contacts: React.FC = () =>
{
    return (
        <>
            <Navbar
                brand='Stanley'
                choices={[
                    { label: 'Home', link:'/Home', active: false }, 
                    { label: 'About', link:'/About', active: false },
                    { label: 'Experiences', link:'/Experiences', active: false },
                    { label: 'Achievements', link:'/Achievements', active: false },
                    { label: 'Projects', link:'/Projects', active: false },
                    { label: 'Contact Me', link:'/Contacts', active: true },
                ]}
            />
        </>
    );
}

export default Contacts;