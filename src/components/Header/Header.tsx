import { NavLink } from 'react-router-dom';
import DarkMode from '../../DarkMode';
import './Header.css';
import hamburger from '../../assets/hamburger.svg';
import xIcon from '../../assets/x-icon.svg';

import { MouseEvent, useRef, useState } from 'react';

export default function Header() {
    const [navRef, setNavRef] = useState('');

    const OnClick = (e: MouseEvent<HTMLElement>) => {
        if (e.target instanceof HTMLImageElement) {
            const el = e.target;
            if (el.classList.contains('hamburger')) {
                if (el.src.includes('hamburger')) {
                    el.src = xIcon;
                } else {
                    el.src = hamburger;
                }
            }
        }
        if (navRef == '') {
            setNavRef('shown');
        } else {
            setNavRef('');
        }
    };

    return (
        <header onClick={OnClick}>
            <NavLink
                className={(isActive) =>
                    'logo mobile nav-link' + (!isActive ? '' : ' active')
                }
                to="/"
            >
                GS.
            </NavLink>
            <img className="hamburger" src={hamburger} alt="hamburger" />
            <nav className={navRef}>
                <NavLink
                    className={(isActive) =>
                        'logo nav-link' + (!isActive ? '' : ' active')
                    }
                    to="/"
                >
                    GS.
                </NavLink>
                <NavLink
                    className={(isActive) =>
                        'nav-link' + (!isActive.isActive ? '' : ' active')
                    }
                    to="/"
                >
                    about
                </NavLink>
                <NavLink
                    className={(isActive) =>
                        'nav-link' + (!isActive.isActive ? '' : ' active')
                    }
                    to="/works"
                >
                    works
                </NavLink>
                <NavLink
                    className={(isActive) =>
                        'nav-link' + (!isActive.isActive ? '' : ' active')
                    }
                    to="/resume"
                >
                    resume
                </NavLink>
                <NavLink
                    className={(isActive) =>
                        'nav-link' + (!isActive.isActive ? '' : ' active')
                    }
                    to="/contact"
                >
                    contact
                </NavLink>
                <DarkMode />
            </nav>
        </header>
    );
}
