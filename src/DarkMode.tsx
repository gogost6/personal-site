import './DarkMode.css';
import sun from './assets/sun.svg';
import cloud from './assets/cloud.svg';

import { MouseEvent, useState } from 'react';
import nodeTest from 'node:test';
// 4
const storedTheme = localStorage.getItem('theme');

const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

const defaultDark =
    storedTheme === 'dark' || (storedTheme === null && prefersDark);

const setDark = () => {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
};

const setLight = () => {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
};

if (defaultDark) {
    setDark();
}

const DarkMode = () => {
    const [mode, setMode] = useState<{ name: String; image: MediaImage }>({
        name: defaultDark ? 'Switch Light' : 'Switch Dark',
        image: defaultDark ? sun : cloud,
    });

    const toggleTheme = (e: MouseEvent<HTMLAnchorElement>) => {
        const defaultMode = document.documentElement.getAttribute('data-theme');

        if (defaultMode == 'dark') {
            setLight();
            setMode({ name: 'Switch Dark', image: cloud });
        } else {
            setDark();
            setMode({ name: 'Switch Light', image: sun });
        }
    };

    return (
        <a className="screen-mode-anchor" onClick={toggleTheme}>
            <div
                style={{
                    WebkitMaskImage: `url("${mode.image}")`,
                    maskImage: `url("${mode.image}")`,
                }}
                className="screen-mode-svg"
            ></div>{' '}
            {mode.name}
        </a>
    );
};

export default DarkMode;
