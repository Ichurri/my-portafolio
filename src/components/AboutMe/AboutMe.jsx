import { CustomLink } from '../CustomLink';
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