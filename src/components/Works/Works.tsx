import './Works.scss';
import saltImg from '../../assets/projects/salt.png';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import '../../common/slider.scss';

function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

export default function Works() {
    let imagesArray = [];
    const categories = [
        { id: 1, text: 'All' },
        { id: 2, text: 'E-commerce' },
        { id: 3, text: 'Coorperate' },
        { id: 4, text: 'Mobile app' },
    ];
    const [activeId, setActiveId] = useState<number>(1);

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    for (let i = 0; i < 10; i++) {
        imagesArray.push(saltImg);
    }

    return (
        <div className="works-container">
            <h1>Works page</h1>
            <h2>Repository of projects that I worked before.</h2>
            <ul>
                {windowSize.innerWidth > 1024 ? (
                    <>
                        {categories.map((x) => (
                            <li
                                key={x.id}
                                onClick={() => setActiveId(x.id)}
                                className={activeId === x.id ? 'active' : ''}
                            >
                                <a>{x.text}</a>
                            </li>
                        ))}
                    </>
                ) : (
                    <Slider
                        {...{
                            variableWidth: true,
                            infinite: false,
                            slidesToScroll: 1,
                            arrows: false,
                            focusOnSelect: true,
                            mobileFirst: true,
                            swipeToSlide: true,
                        }}
                    >
                        {categories.map((x) => (
                            <li
                                key={x.id}
                                onClick={() => setActiveId(x.id)}
                                className={activeId === x.id ? 'active' : ''}
                            >
                                <a>{x.text}</a>
                            </li>
                        ))}
                    </Slider>
                )}
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
