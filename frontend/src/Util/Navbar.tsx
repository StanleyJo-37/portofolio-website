import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom';

interface NavbarTexts {
    brand: string;
    choices: { label: string; link: string; active: boolean, openInNewTab: boolean }[];
}

const Navbar: React.FC<NavbarTexts> = ({brand, choices}) =>
{
    const choice_list = choices.map((choice) =>
        {
            return (
                <>
                    { choice.active ? (
                        <Link to={choice.link} id='active-choice' className='choice' key={choice.label}>{choice.label}</Link>
                    ) : choice.openInNewTab ? (
                        <Link to={choice.link} className='choice' key={choice.label} target="_blank" rel="noopener noreferrer">{choice.label}</Link>
                    ) : (
                        <Link to={choice.link} className='choice' key={choice.label}>{choice.label}</Link>
                    )}
                </>
            );
        }
    );

    return (
        <>
            <nav id='navbar'>
                <div id="navbar-brand">
                    {brand}
                </div>
                <div id='navbar-choices'>
                    {choice_list}
                </div>
            </nav>

            <div id='content'>
                
            </div>
        </>
    );
}

export default Navbar;