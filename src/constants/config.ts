type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  social: {
    h2: string;
    p: string;
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: 'Rakesh Patil Portfolio',
    fullName: 'Rakesh Patil',
    email: 'rakeshpatil7496@gmail.com',
  },
  hero: {
    name: 'Rakesh Patil',
    p: ['I develop responsive, user', 'interfaces and web applications'],
  },

  social: {
    h2: 'Social Media',
    p: 'Connect with me on social media!',
  },
  contact: {
    p: 'Get in touch',
    h2: 'Contact.',
    form: {
      name: {
        span: 'Your Name',
        placeholder: "What's your name?",
      },
      email: { span: 'Your Email', placeholder: "What's your email?" },
      message: {
        span: 'Your Message',
        placeholder: 'What do you want to say?',
      },
    },
  },

  sections: {
    about: {
      p: 'Introduction',
      h2: 'Overview.',
      content: `I'm a skilled software developer with experience in TypeScript, Angular, AG-Grid, Material UI for Angular JavaScript, SQL, C++, Java, and expertise in frameworks like React, Angular, Node.js, Express, Three.js, and tools like AWS, Docker, Git, and GitHub. I use MongoDB for database solutions and have subject expertise in DBMS, operating systems, computer networks, and machine learning. I collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. My proficiency in HTML, CSS, Bootstrap, Tailwind CSS, Material UI, Redux, and Figma helps bring designs to life. Let's work together to bring your ideas to life!`,
    },
    experience: {
      p: 'What I have done so far',
      h2: 'Work Experience.',
    },
    feedbacks: {
      p: 'Technical',
      h2: 'Certifications.',
    },
    works: {
      p: 'My work',
      h2: 'Projects.',
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
