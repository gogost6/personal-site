import './Resume.css';
export default function Resume() {
    return (
        <>
            <h1>Resume page</h1>
            <h2 style={{ marginBottom: '40px' }}>
                A summary of my education, work history, credentials,
                <br /> and other accomplishments and skills
            </h2>
            <ul className="history-list">
                <li>
                    <h4>2020-2021</h4>
                    <div className="description">
                        <h5>Front end developer</h5>
                        <h6>Grind Web Studio</h6>
                        <ul>
                            <li>Work with Wordpress, PHP, JS and Tailwind</li>
                            <li>Implement responsive design</li>
                            <li>Solve problems on different sites</li>
                            <li>Upload new feautures</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <h4>2020-2021</h4>
                    <div className="description">
                        <h5>Front end developer</h5>
                        <h6>Grind Web Studio</h6>
                        <ul>
                            <li>Work with Wordpress, PHP, JS and Tailwind</li>
                            <li>Implement responsive design</li>
                            <li>Solve problems on different sites</li>
                            <li>Upload new feautures</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <h4>2020-2021</h4>
                    <div className="description">
                        <h5>Front end developer</h5>
                        <h6>Grind Web Studio</h6>
                        <ul>
                            <li>Work with Wordpress, PHP, JS and Tailwind</li>
                            <li>Implement responsive design</li>
                            <li>Solve problems on different sites</li>
                            <li>Upload new feautures</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </>
    );
}
