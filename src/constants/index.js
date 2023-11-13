import { meta, shopify, nq7, tesla, blackgem } from '../assets/images';
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl: motion,
    name: 'Motion',
    type: 'Animation',
  },
  {
    imageUrl: mui,
    name: 'Material-UI',
    type: 'Frontend',
  },
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    imageUrl: sass,
    name: 'Sass',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
];

export const experiences = [
  {
    title: 'Full Stack Developer',
    company_name: 'NQ7 Group',
    icon: nq7,
    iconBg: '#b69859',
    date: '10/2022 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Senior Frontend Developer',
    company_name: 'Unicom Group',
    icon: tesla,
    iconBg: '#3996c6',
    date: '11/2022 - 02/2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Meem Graphics',
    icon: shopify,
    iconBg: '#343537',
    date: '06/2022 - 10/2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },

  {
    title: 'React Developer',
    company_name: 'Blackgem Company',
    icon: blackgem,
    iconBg: '#fcf2e6',
    date: '11/2021 - 09/2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Front End Developer Remotely',
    company_name: 'Nerdo Yemen',
    icon: meta,
    iconBg: '#f6a019',
    date: '05/2021 - 06/2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: 'https://wa.me/+967730110440',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/anas110440',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/anascodex',
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: 'btn-back-yellow',
    name: 'next-tailwind-amazon',
    description:
      'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    link: 'https://github.com/anas110440/next-tailwind-amazon',
  },
  {
    iconUrl: threads,
    theme: 'btn-back-red',
    name: 'Full Stack Youtube Clone',
    description:
      'Created a full-stack replica of the popular discussion platform Youtube," enabling users to post and engage in threaded conversations.',
    link: 'https://github.com/anas110440/youtube_clone',
  },
  {
    iconUrl: car,
    theme: 'btn-back-pink',
    name: 'Dashboard With React & Tailwind ',
    description:
      'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    link: 'https://github.com/anas110440/React-Tailwind-Dashboard',
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-black',
    name: 'Fullstack App In React, Nodejs And MySQL',
    description:
      'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    link: 'https://github.com/anas110440/Fullstack-App-In-React-Nodejs-MySQL',
  },
  {
    iconUrl: estate,
    theme: 'btn-back-green',
    name: 'Yemen Red Crescent Society',
    description:
      'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    link: 'https://github.com/anas110440/YCRC',
  },
  {
    iconUrl: summiz,
    theme: 'btn-back-blue',
    name: 'Responsive React Portfolio',
    description:
      'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    link: 'https://github.com/anas110440/Responsive-React-Portfolio',
  },
];
