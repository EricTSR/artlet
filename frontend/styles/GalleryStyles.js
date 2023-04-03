import styled from "styled-components";
import {motion} from "framer-motion";

export const GalleryStyles = styled(motion.div)`
  margin: 0 25%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 2rem;
  margin-bottom: 2rem;

  @media only screen and (max-width: 600px) {
    margin: 0 10%;
  }

`;
