import './Works.scss';
import saltImg from '../../assets/projects/salt.png';
import { MouseEvent, useState } from 'react';

export default function Works() {
    let imagesArray = [];
    const categories = [
        { id: 1, text: 'All' },
        { id: 2, text: 'E-commerce' },
        { id: 3, text: 'Coorperate' },
        { id: 4, text: 'Mobile app' },
    ];
    const [activeId, setActiveId] = useState<number>(1);

    for (let i = 0; i < 10; i++) {
        imagesArray.push(saltImg);
    }

    return (
        <div className="works-container">
            <h1>Works page</h1>
            <h2>Repository of projects that I worked before.</h2>
            <ul>
                {categories.map((x) => (
                    <li
                        onClick={() => setActiveId(x.id)}
                        className={activeId === x.id ? 'active' : ''}
                    >
                        <a>{x.text}</a>
                    </li>
                ))}
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
