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
            const csscls = 'no-underline hover:text-green hover: after:block after:bg-green hover:transition-ease-in-out hover:duration-300 after:mt-[.3rem] after:w-full after:h-[.1rem] after:border-green after:scale-x-0 hover:after:scale-x-100 hover:after:transition-ease-in-out hover:after:duration-300 hover:after:scale-x-100;'
            return (
                <>
                    { choice.active ? (
                        <Link className='no-underline text-green' to={ choice.link } key={ choice.label }>{ choice.label }</Link>
                    ) : choice.openInNewTab ? (
                        <Link className={ csscls + ' text-secondary' } to={ choice.link } key={ choice.label } target="_blank" rel="noopener noreferrer">{ choice.label }</Link>
                    ) : (
                        <Link className={ csscls + ' text-secondary' } to={ choice.link } key={ choice.label }>{ choice.label }</Link>
                    )}
                </>
            );
        }
    );

    return (
        <>
            <nav className='flex flex-row justify-between items-center w-full h-auto px-8 py-4'>
                <div className='text-secondary'>
                    { brand }
                </div>
                <div className='space-x-6 text-xs flex flex-row flex-nowrap'>
                    { choice_list }
                </div>
            </nav>
        </>
    );
}

export default Navbar;