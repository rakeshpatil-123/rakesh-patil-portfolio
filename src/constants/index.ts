import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  // celebal,
  // hackveda,
  // intern_army,
  salesforce,
  bigscal,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nptel,
  great,
  hackerrank,
  google,
  microsoft,
  oracle,
  greeskterm,
  codechef,
  infosys,
  aws,
  portfolio,
  dragi,
  saaqi,
  snap,
  infoorigin,
  angular,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
  {
    id: 'resume',
    title: 'Resume',
  },
];

const services: TService[] = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Database Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Software Engineer',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'angular',
    icon: angular,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Angular Developer',
    companyName: 'Bigscal Technologies',
    icon: bigscal,
    iconBg: '#383E56',
    date: 'Oct 2024 - July 2025',
    points: [
      'Built scalable Angular apps using AngularJS, Material UI, and AG Grid for Healthray – a multi-specialty hospital management system.',
      'Delivered intuitive interfaces for OPD/IPD workflows, enhancing patient care and hospital efficiency.',
      'Integrated real-time data features with AG Grid for advanced filtering, sorting, and interactive patient records.',
      'Streamlined module-based development for appointments, billing, and patient tracking using Angular best practices.',
    ],
  },
  {
    title: 'Full Stack Developer',
    companyName: 'Info Origin Technologies Pvt Ltd',
    icon: infoorigin,
    iconBg: '#383E56',
    date: 'Nov 2024 - Feb 2025',
    points: [
      'Delivered scalable web and enterprise apps using Angular and Spring Boot.',
      'Contributed to AI-powered and cloud-integrated digital solutions.',
      'Worked on modern tech stacks to solve real business challenges.',
      'Collaborated in agile teams to drive innovation and product efficiency.',
    ],
  },
  {
    title: 'Salesforce Developer',
    companyName: 'Smart Internz',
    icon: salesforce,
    iconBg: '#383E56',
    date: 'Jul 2024 - Aug 2024',
    points: [
      'Developed skills in creating efficient data models and workflows for Salesforce applications.',
      'Customized interfaces using Visualforce and the Lightning framework to enhance user experience.',
      'Integrated Salesforce with external platforms for seamless data exchange and enhanced functionality.',
      'Gained hands-on experience to address business challenges with Salesforce solutions.',
    ],
  },
  {
    title: 'React.js Developer',
    companyName: 'Hackveda limited',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'May 2024 - Jul 2024',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Database Developer',
    companyName: 'Celebal Technologies',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'May 2024 - Jul 2024',
    points: [
      'Gained hands-on experience with real-world data projects, applying SQL skills to analyze and manage complex datasets.',
      'Developed and optimized SQL queries for data extraction, reporting, and analysis, improving data retrieval times and accuracy.',
      'Addressed and resolved data-related issues, including data quality and consistency challenges, enhancing overall database reliability.',
      'Documented database structures, queries, and processes to ensure clarity and ease of maintenance for future development.',
    ],
  },
  {
    title: 'Web Developer',
    companyName: 'Intern Army Pvt. Ltd.',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Dec 2023 - Jan 2024',
    points: [
      'Developing and maintaining dynamic web applications using React.js and other related technologies, ensuring robust and scalable solutions.',
      'Collaborating with cross-functional teams, including designers, product managers, and fellow developers, to deliver high-quality, user-centric products.',
      'Implementing responsive design principles and ensuring cross-browser compatibility to provide a seamless experience across various devices and platforms.',
      'Participating in code reviews and offering constructive feedback to peers, contributing to code quality and overall project excellence.',
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   companyName: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I earned a certificate from IIT Kharagpur, enhancing my skills and my confidence in databases.',
    name: 'Database Systems',
    designation: 'IIT KGP',
    company: 'Jan-Mar 2024',
    image: nptel,
  },
  {
    testimonial:
      'I earned a certificate from Great Learning, Karnataka, enhancing my skills and my confidence in security.',
    name: 'Cyber Security',
    designation: 'KA',
    company: 'Aug 2024',
    image: great,
  },
  {
    testimonial:
      'I earned a certificate in Machine Learning from IIT Kharagpur, enhancing my skills and my confidence in ML.',
    name: 'Machine Learning',
    designation: 'IIT KGP',
    company: 'Jul-Sept 2024',
    image: nptel,
  },
  {
    testimonial:
      'I obtained a certificate in SQL from HackerRank, improving expertise and confidence in database management.',
    name: 'SQL',
    designation: 'Hackerrank',
    company: 'Feb 2024',
    image: hackerrank,
  },
  {
    testimonial:
      'I received a certificate in Cyber Security from Google, boosted knowledge in online security.',
    name: 'Network Security',
    designation: 'Google',
    company: 'Aug 2024',
    image: google,
  },
  {
    testimonial:
      'I earned a certificate in AI from Microsoft, enhancing my expertise and boosting my confidence in AI.',
    name: 'Artificial Intelligence',
    designation: 'Microsoft',
    company: 'Aug 2024',
    image: microsoft,
  },
  {
    testimonial:
      'I obtained a certificate in STL from CodeChef, sharpening my skills in efficient coding techniques.',
    name: 'STL Library',
    designation: 'Codechef',
    company: 'Jun 2024',
    image: codechef,
  },
  {
    testimonial:
      'I earned a certificate in SQL Database from Geekster, enhancing my skills in database management.',
    name: 'Database',
    designation: 'Greekster',
    company: 'May 2024',
    image: greeskterm,
  },
  {
    testimonial:
      'I received an Oracle certification, improving my proficiency and building confidence in advanced DBMS.',
    name: 'Oracle Foundation',
    designation: 'Oracle',
    company: 'June 2024',
    image: oracle,
  },
  {
    testimonial:
      'I earned a certificate in Time Management from Infosys, enhancing my skills in effective productivity strategies.',
    name: 'Time Management',
    designation: 'Infosys',
    company: 'Aug 2024',
    image: infosys,
  },
  {
    testimonial:
      'I received a certificate in AWS Foundations from AWS, enhancing my knowledge in cloud computing.',
    name: 'AWS Foundation',
    designation: 'AWS',
    company: 'Oct 2024',
    image: aws,
  },
];

const projects: TProject[] = [
  {
    name: 'Saaqi',
    description:
      'Saaqi: A multi-page social media web based app designed for seamless user experience and vibrant UI, connecting people with innovative features.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'material ui',
        color: 'pink-text-gradient',
      },
    ],
    image: saaqi,
    sourceCodeLink: 'https://github.com/rakeshpatil-123',
  },
  {
    name: 'Snap',
    description:
      'Snap – a versatile assessment platform for coders and students to evaluate skills across domains with insightful performance feedback & helping you track progress.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind css',
        color: 'pink-text-gradient',
      },
    ],
    image: snap,
    sourceCodeLink: 'https://github.com/rakeshpatil-123',
  },
  {
    name: 'Portfolio',
    description:
      'Crafting dynamic portfolios using React, TypeScript, Three.js, Framer Motion, and Tailwind CSS, Email.js showcasing creativity, precision, and modern web expertise.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'threejs',
        color: 'green-text-gradient',
      },
      {
        name: 'typescript',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    sourceCodeLink: 'https://github.com/rakeshpatil-123',
  },
  {
    name: 'Dragi',
    description:
      'Expert in crafting responsive, dynamic web experiences with modern tools like Next, Tailwind CSS, and Framer Motion for seamless UI/UX in web development.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'framer-motion',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: dragi,
    sourceCodeLink: 'https://github.com/rakeshpatil-123/Dragi',
  },
];

export { services, technologies, experiences, testimonials, projects };
