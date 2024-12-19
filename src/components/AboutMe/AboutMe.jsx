import { Link } from 'react-router-dom';
import './AboutMe.css';

export const AboutMe = () => {
    return (
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
                            I'm Santiago, a passionate web developer, I'm always eager to learn new skills and improve my craft.
                        </p>
                        <div className="details">
                            <ul>
                                <li>System Engineer Student</li>
                                <li>Passionate Programmer</li>
                            </ul>
                        </div>
                        <p className="mailto-link">
                            {/* <Link to="mailto:santiagoiturrivargas04@gmail.com">Contact me via Email</Link> */}
                            <a href="mailto:santiagoiturrivargas04@gmail.com">Contact me via Email</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};