import './AboutMe.css';

export const AboutMe = () => {
    return (
        <>
            <section id="about-me">
                <div className="wrapper">
                    <header>
                        <h2>About Me</h2>
                    </header>
                    <div className="content">
                        <div className="profile-container">
                            <img src="/assets/images/profile.jpeg" alt="Profile" className="profile-pic" />
                        </div>
                        <div className="text-container">
                            <p>
                                I am Santiago Iturri, a passionate web developer, I am always eager to learn new skills and improve my craft.
                            </p>
                            <div className="details">
                                <ul>
                                    <li>System Engineer Student</li>
                                    <li>Passionate Programmer</li>
                                    <li>Contact: santiagoiturrivargas04@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
