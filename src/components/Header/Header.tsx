import { NavLink } from 'react-router-dom';
import DarkMode from '../../DarkMode';
import './Header.css';

export default function Header() {
    return (
        <header>
            <nav>
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
            </nav>
            <DarkMode />
        </header>
    );
}
