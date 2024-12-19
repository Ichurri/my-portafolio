import { skills } from '../../data';
import { Card } from '../Card';
import './Skills.css';

export const Skills = () => {

    return (
        <>
            <section id="skills">
                <div className="wrapper">
                    <header>
                        <h2>Skills</h2>
                    </header>
                    <div className="cards">
                        {
                            skills.map((skill, index) => (
                                <Card
                                    key={ index }
                                    logoSrcFront={ skill.logoSrcFront }
                                    logoSrcBack={ skill.logoSrcBack }
                                    title={ skill.title }
                                    description={ skill.description }
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};
