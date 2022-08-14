import 'swiper/css/bundle';
import img from '../../assets/projects/img.png';
import rabit from '../../assets/projects/rabit.jpeg';
import sample from '../../assets/projects/sample.png';
import linkSvg from '../../assets/link-2.svg';
import Slider from 'react-slick';

export default function Home() {
    const images = [
        { path: img, key: Math.random() * 100 * Math.random(), alt: 'img' },
        { path: rabit, key: Math.random() * 100 * Math.random(), alt: 'rabit' },
        {
            path: sample,
            key: Math.random() * 100 * Math.random(),
            alt: 'sample',
        },
    ];

    return (
        <>
            <h1 style={{ maxWidth: '34.8125rem' }}>
                Welcome to my not so original portfolio!
            </h1>
            <h3 style={{ marginBottom: '2.5rem' }}>Some jokes here...!</h3>
            <h2 style={{ maxWidth: '31.75rem', paddingBottom: '1.5rem' }}>
                Based in <b>Sofia, Bulgaria.</b> I am currently working with{' '}
                <b> React, JS, some Wordpress, PHP and Tailwind.</b>
            </h2>
            <h2 style={{ maxWidth: '31.75rem', marginBottom: '4rem' }}>
                Working from the middle of 2022 year at <b>Grind Web Studio</b>{' '}
                as FE developer. Happy to be in an experinced and frindly team.
            </h2>

            <Slider
                {...{
                    variableWidth: true,
                    infinite: true,
                    autoplay: true,
                }}
            >
                {images.map((image, i) => {
                    return (
                        <a
                            key={image.key}
                            className="img-wrap"
                            target={'_blank'}
                            href="https://facebook.com"
                        >
                            <p>
                                <img src={linkSvg} alt="link" />
                                view project
                            </p>
                            <img
                                className="slide-image"
                                src={image.path}
                                alt={image.alt}
                            />
                        </a>
                    );
                })}
            </Slider>
        </>
    );
}
