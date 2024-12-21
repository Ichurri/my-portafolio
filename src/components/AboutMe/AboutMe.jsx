import './AboutMe.css';

export const AboutMe = () => {
    return (
        <section id="about-me">
            <div className="about-me-wrapper">
                <div className="about-me-header">
                    <header className='animate__animated animate__backInRight'>
                        <h2>About Me</h2>
                    </header>
                </div>
                <div className="profile-container animate__animated animate__fadeInLeft">
                        <img src='https://github.com/Ichurri/my-portafolio/blob/main/src/assets/images/profile.png?raw=true' alt="Profile" className="profile-pic" />
                </div>
                <div className="content">
                    <div className="text-container animate__animated animate__backInRight">
                        <p>
                            I'm Santiago Iturri, a passionate web developer, always eager to learn new skills and improve my craft.
                        </p>
                        <div className="details">
                            <ul>
                                <li>System Engineer Student</li>
                                <li>Passionate Programmer</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};