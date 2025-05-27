import { Skill, SkillCategory } from '@/types';

export const allSkills: Skill[] = [
  {
    title: "C",
    logo: "https://img.icons8.com/color/480/c-programming.png",
    level: 3
  },
  {
    title: "C++",
    logo: "https://img.icons8.com/color/480/c-plus-plus-logo.png",
    level: 4
  },
  {
    title: "SpringBoot",
    logo: "https://img.icons8.com/color/480/spring-logo.png",
    level: 3
  },
  {
    title: "Python",
    logo: "https://img.icons8.com/color/480/python--v1.png",
    level: 5
  },
  {
    title: "Jupyter Notebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1200px-Jupyter_logo.svg.png",
    level: 5
  },
  {
    title: "Flask",
    logo: "https://img.icons8.com/color/480/flask.png",
    level: 3
  },
  {
    title: "Django",
    logo: "https://img.icons8.com/color/480/django.png",
    level: 3
  },
  {
    title: "HTML5",
    logo: "https://img.icons8.com/color/480/html-5--v1.png",
    level: 5
  },
  {
    title: "CSS3",
    logo: "https://img.icons8.com/color/480/css3.png",
    level: 4
  },
  {
    title: "Tailwind CSS",
    logo: "https://img.icons8.com/color/480/tailwindcss.png",
    level: 3
  },
  {
    title: "Bootstrap",
    logo: "https://img.icons8.com/color/480/bootstrap.png",
    level: 3
  },
  {
    title: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    level: 5
  },
  {
    title: "Next.js",
    logo: "https://img.icons8.com/color/480/nextjs.png",
    level: 3
  },
  {
    title: "Angular",
    logo: "https://img.icons8.com/color/480/angularjs.png",
    level: 4
  },
  {
    title: "JavaScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/320px-Unofficial_JavaScript_logo_2.svg.png",
    level: 5
  },
  {
    title: "TypeScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/260px-Typescript.svg.png",
    level: 4
  },
  {
    title: "Node",
    logo: "https://img.icons8.com/fluency/240/node-js.png",
    level: 4
  },
  {
    title: "Express",
    logo: "https://img.icons8.com/ios/500/FFFFFF/express-js.png",
    level: 4
  },
  {
    title: "SQL",
    logo: "https://img.icons8.com/external-soft-fill-juicy-fish/480/external-sql-coding-and-development-soft-fill-soft-fill-juicy-fish.png",
    level: 5
  },
  {
    title: "PostgreSQL",
    logo: "https://img.icons8.com/color/480/postgreesql.png",
    level: 4
  },
  {
    title: "MySQL",
    logo: "https://img.icons8.com/color/480/mysql.png",
    level: 4
  },
  {
    title: "MongoDB",
    logo: "https://img.icons8.com/color/480/mongodb.png",
    level: 5
  },
  {
    title: "Bash & Terminal",
    logo: "https://img.icons8.com/color/480/bash.png",
    level: 4
  },
  {
    title: "Git",
    logo: "https://img.icons8.com/color/480/git.png",
    level: 5
  },
  {
    title: "GitHub",
    logo: "https://img.icons8.com/m_sharp/200/FFFFFF/github.png",
    level: 5
  },
  {
    title: "Amazon Web Services",
    logo: "https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png",
    level: 3
  },
  {
    title: "Microsoft Azure",
    logo: "https://img.icons8.com/fluency/240/azure-1.png",
    level: 3
  },
  {
    title: "Docker",
    logo: "https://img.icons8.com/color/480/docker.png",
    level: 4
  },
  {
    title: "Postman",
    logo: "https://nocodestartup.io/wp-content/uploads/2024/01/postman-nocode.webp",
    level: 5
  },
  {
    title: "Linux",
    logo: "https://img.icons8.com/color/480/linux.png",
    level: 4
  },
  {
    title: "Scrum",
    logo: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-scrum-ux-and-ui-icons-flaticons-lineal-color-flat-icons.png",
    level: 4
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Key languages for software development that I master with experience and technical depth.",
    skills: allSkills.filter(skill => 
      ['C', 'C++', 'Python', 'JavaScript', 'TypeScript'].includes(skill.title)
    )
  },
  {
    category: "Frontend Development",
    description: "Technologies and frameworks for building modern, responsive, and visually appealing user interfaces.",
    skills: allSkills.filter(skill => 
      ['HTML5', 'CSS3', 'React', 'Next.js', 'Angular', 'Tailwind CSS', 'Bootstrap'].includes(skill.title)
    )
  },
  {
    category: "Backend Development",
    description: "Frameworks and technologies for building robust server-side applications and efficient APIs.",
    skills: allSkills.filter(skill => 
      ['Node', 'Express', 'SpringBoot', 'Flask', 'Django'].includes(skill.title)
    )
  },
  {
    category: "Databases",
    description: "Relational and NoSQL database management systems for efficient data storage and retrieval.",
    skills: allSkills.filter(skill => 
      ['SQL', 'PostgreSQL', 'MySQL', 'MongoDB'].includes(skill.title)
    )
  },
  {
    category: "Cloud & DevOps",
    description: "Platforms and tools for deployment, automation, and cloud infrastructure management.",
    skills: allSkills.filter(skill => 
      ['Amazon Web Services', 'Microsoft Azure', 'Docker', 'Linux'].includes(skill.title)
    )
  },
  {
    category: "Tools & Others",
    description: "Development tools, version control, and methodologies that complement my daily workflow.",
    skills: allSkills.filter(skill => 
      ['Git', 'GitHub', 'Bash & Terminal', 'Postman', 'Jupyter Notebook', 'Scrum'].includes(skill.title)
    )
  }
];
