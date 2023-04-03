import styled from "styled-components";
import {motion} from "framer-motion";

export const ProductStyles = styled(motion.div)`
  background: white;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 15px;
  cursor: pointer;

  
  img {
    width: 100%;
    object-fit: cover;
  }

  h2 {
    padding: 0.5rem 0;
  }
`;
