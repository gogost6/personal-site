import './Contact.scss';
export default function Contact() {
    return (
        <>
            <h1>Contact page</h1>
            <h2 style={{ marginBottom: '3.75rem' }}>Let’s Chat!</h2>
            <form className="contact-me" action="">
                <div className="row">
                    <div className="col">
                        <p>
                            Name<span className="star">*</span>
                        </p>
                        <input name="name" type="text" placeholder="Pesho..." />
                    </div>
                    <div className="col">
                        <p>
                            Title<span className="star">*</span>
                        </p>
                        <select name="title" id="title">
                            <option value="Food">Food</option>
                        </select>
                    </div>
                </div>
                <div className="col">
                    <p>
                        Email<span className="star">*</span>
                    </p>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="col">
                    <p>
                        Message<span className="star">*</span>
                    </p>
                    <textarea
                        name="email"
                        placeholder="Anything I can help? Let me know"
                    />
                </div>
                <button>Send</button>
            </form>
        </>
    );
}
