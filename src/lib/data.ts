import { Project, Experience } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with modern web technologies. Features include user authentication, shopping cart, payment integration, and admin dashboard.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://your-ecommerce-demo.vercel.app',
    imageUrl: '/projects/ecommerce.jpg'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI', 'Socket.io'],
    githubUrl: 'https://github.com/yourusername/task-manager',
    liveUrl: 'https://your-taskmanager-demo.vercel.app',
    imageUrl: '/projects/taskmanager.jpg'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'Weather API', 'Chart.js'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://your-weather-demo.vercel.app',
    imageUrl: '/projects/weather.jpg'
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Startup Inc.',
    position: 'Junior Frontend Developer',
    duration: '2023 - Present',
    description: 'Developing responsive web applications using React and TypeScript. Collaborating with design and backend teams to deliver high-quality user experiences.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Git', 'Agile']
  },
  {
    id: '2',
    company: 'Freelance',
    position: 'Web Developer',
    duration: '2022 - 2023',
    description: 'Built custom websites for small businesses and startups. Focused on creating modern, responsive designs with excellent performance.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'PHP']
  }
];

export const personalInfo = {
  name: 'Santiago Iturri',
  title: 'System Engineer Student & Software Developer',
  email: 'santiagoiturribsnss@gmail.com',
  phone: '+591 78184211',
  location: 'Cochabamba, Bolivia',
  github: 'https://github.com/Ichurri',
  linkedin: 'https://www.linkedin.com/in/santiago-iturri-969003320/',
  bio: `I'm a passionate System Engineering student with a strong focus on software development. 
        I enjoy creating modern, efficient web applications and am always eager to learn new technologies. 
        My goal is to build solutions that make a positive impact while continuously growing as a developer.`,
  bioAbout: `I'm an enthusiastic System Engineering student with a keen interest in software development. 
             I love building sleek and effective web applications and am constantly looking to expand my knowledge of new technologies. 
             My aim is to develop impactful solutions while evolving both personally and professionally as a developer.`
};