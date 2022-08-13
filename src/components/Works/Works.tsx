import './Works.css';
import saltImg from '../../assets/projects/salt.png';
import { MouseEvent } from 'react';

export default function Works() {
    let imagesArray = [];

    for (let i = 0; i < 10; i++) {
        imagesArray.push(saltImg);
    }
    const onClick = (e: MouseEvent<HTMLElement>) => {
        if (e.target instanceof HTMLElement) {
            const el: HTMLElement = e.target;

            if (el.tagName == 'A') {
                const children = Array.from(e.currentTarget.children);
                children.forEach((x) => {
                    x.children[0].className = '';
                });
                el.className = 'active';
            }
        }
    };

    return (
        <div className="works-container">
            <h1>Works page</h1>
            <h2>Repository of projects that I worked before.</h2>
            <ul onClick={onClick}>
                <li>
                    <a className="active">All</a>
                </li>
                <li>
                    <a>E-Commerce</a>
                </li>
                <li>
                    <a>Coorperate</a>
                </li>
                <li>
                    <a>Mobile app</a>
                </li>
            </ul>
            <div className="images-container">
                {imagesArray.map((x) => {
                    const array = new Uint32Array(10);
                    return (
                        <img
                            key={window.crypto.getRandomValues(array)[0]}
                            src={x}
                            alt="salt"
                        />
                    );
                })}
            </div>
        </div>
    );
}
