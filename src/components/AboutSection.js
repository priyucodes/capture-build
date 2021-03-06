import home1 from '../img/home1.png';
// Styled

import { About, Description, Image, Hide } from '../styles';

// Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, buttonAnim, fade, photoAnim } from '../animation';

import Wave from './Wave';

import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <Link to="/contact">
          <motion.button variants={buttonAnim}>Contact us</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

// Styled components

export default AboutSection;
