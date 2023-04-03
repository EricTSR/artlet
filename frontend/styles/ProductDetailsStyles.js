import styled from "styled-components";
import {motion} from "framer-motion";

export const DetailsStyle = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2% 5%;

  img {
    width: 40%;
  }

  @media only screen and (max-width: 600px) {
    display: block;
    margin: 0;
    padding: 2rem;
    justify-content: center;
    img {
      justify-content: center;
      width: 100%;
      align-items: center;
      margin: auto;
      box-shadow: rgba(254, 205, 211, 0.1) 0 4px 16px, rgba(254, 205, 211, 0.1) 0 8px 24px, rgba(254, 205, 211, 0.1) 0 16px 56px;
    }
  }
`;

export const ProductInfo = styled(motion.section)`
  width: 40%;
  
  h2 span {
    margin: 0 1rem;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: auto;
  }

  button {
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  p {
    hyphens: auto;
    text-align: justify;
  }
`;

export const QuantitySection = styled(motion.section)`

  h3 {
    color: #000000;
    padding: 1rem 0;
  }

  div {
    display: flex;
    gap: 1rem;
    padding-bottom: 1rem;

    button {
      background: transparent;
      border: none;
      display: flex;
      font-size: 1.5rem;
      padding: 0;

      svg {
        color: #000;
        line-height: 1rem;
      }
    }
    
    p {
      inline-size: 1.4rem;
      text-align: center;
    }
  }

`;

export const Buy = styled(motion.button)`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  height: 54px;
  left: 182px;
  top: 709px;
  color: white;
  background: #171616;
  cursor: pointer;
  border-radius: 15px;
  width: 100%;
`;
