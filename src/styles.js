import styled from 'styled-components';
import { motion } from 'framer-motion';
// Styled components
export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 10rem;
  color: white;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
`;

export const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    /* it stretch image back and keep the same aspect ratio, to check disbale it and check */
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
