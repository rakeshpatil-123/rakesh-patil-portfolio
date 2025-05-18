// import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { Header } from '../atoms/Header';
import { config } from '../../constants/config';

import linkedinLogo from '../../assets/linkedln.png';
import githubLogo from '../../assets/github.png';
import twitterLogo from '../../assets/twitter.png';
import telegramLogo from '../../assets/telegram.png';
import instagramLogo from '../../assets/instagram.jpeg';
import facebookLogo from '../../assets/facebook.png';
import emailLogo from '../../assets/email.png';
import youtubeLogo from '../../assets/youtubeLogo.png';

const socialLinks = [
  {
    id: 1,
    logo: linkedinLogo,
    url: 'https://www.linkedin.com/in/rakeshpatil123/',
    name: 'LinkedIn',
  },
  { id: 2, logo: githubLogo, url: 'https://github.com/rakeshpatil-123', name: 'GitHub' },
  { id: 3, logo: twitterLogo, url: 'https://x.com/RakeshP60742867', name: 'Twitter' },
  { id: 4, logo: telegramLogo, url: 'https://t.me/RakeshPatil2406', name: 'Telegram' },
  {
    id: 5,
    logo: instagramLogo,
    url: 'https://www.instagram.com/rakesh_patil_2406/profilecard/?igsh=MXJxZWFvbHhoYWZsaw%3D%3D',
    name: 'Instagram',
  },
  {
    id: 6,
    logo: facebookLogo,
    url: 'https://www.facebook.com/profile.php?id=100051238068351',
    name: 'Facebook',
  },
  { id: 7, logo: emailLogo, url: 'mailto:rakeshpatil7496@gmail.com', name: 'Email' },
  { id: 8, logo: youtubeLogo, url: 'https://www.youtube.com/@RakeshOfficialHub', name: 'Youtube' },
];

const SocialLinks = () => {
  return (
    <div className="flex w-full flex-col-reverse gap-16 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.social} />

        <div className="flex pb-12 flex-wrap gap-7.9 mt-8">
          {socialLinks.map(link => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative transition-transform duration-300 hover:scale-110"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.img
                src={link.logo}
                alt={`${link.name} logo`}
                className="w-16 h-16 md:w-20 ml-10 md:h-20 rounded-full shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: -5, transition: { duration: 0.3 } }}
              />
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="h-[50px] md:h-[550px] xl:h-auto xl:flex-1"
      ></motion.div>
    </div>
  );
};

export default SectionWrapper(SocialLinks, 'social');
