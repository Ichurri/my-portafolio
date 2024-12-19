import { CustomLink } from '../CustomLink';
import './AboutMe.css';

export const AboutMe = () => {
    return (
        <section id="about-me">
            <div className="wrapper">
                <div className="about-me-header">
                    <header>
                        <h2>About Me</h2>
                    </header>
                </div>
                <div className="profile-container">
                        <img src='src/assets/images/profile.png' alt="Profile" className="profile-pic" />
                </div>
                <div className="content">
                    <div className="text-container">
                        <p>
                            I'm Santiago Iturri, a passionate web developer, always eager to learn new skills and improve my craft.
                        </p>
                        <div className="details">
                            <ul>
                                <li>System Engineer Student</li>
                                <li>Passionate Programmer</li>
                            </ul>
                        </div>
                        <p className="mailto-link">
                            <CustomLink to="mailto:santiagoiturrivargas04@gmail.com">Contact me via Email</CustomLink>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};