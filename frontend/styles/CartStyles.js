import styled from "styled-components";
//Animation
const {motion} = require("framer-motion");

export const CartWrapper = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  text-align: center;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: flex-end;
`;

export const CartStyle = styled(motion.div)`
  width: 40%;
  background: #f1f1f1;
  box-shadow: rgba(254, 205, 211, 0.1) 0 4px 16px, rgba(254, 205, 211, 0.1) 0 8px 24px, rgba(254, 205, 211, 0.1) 0 16px 56px;
  padding: 2rem 2rem;
  overflow-y: scroll;


  @media only screen and (max-width: 1024px) {
    right: 0;
    top: 0;
    height: 100vh;
    position: absolute;
    text-align: center;
    width: 50%;
    justify-content: center;
  }

  @media only screen and (max-width: 624px) {
    right: 0;
    top: 0;
    height: 100vh;
    position: absolute;
    width: 70%;
  }
`;

export const StyledCard = styled(motion.section)`
  background: #FFFFFF;
  border-radius: 15px;
  padding: 2rem;
  width: 100%;
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  &&last-child {
    margin-bottom: 0;
  }
  img {
    width: 40%;
    object-fit: cover;

    @media only screen and (max-width: 992px) {
      width: 50%;
    }
  }

  @media only screen and (max-width: 992px) {
    padding: 1rem;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column; img {
    justify-content: center;
  }
  }
`

export const StyledCardInfo = styled(motion.section)`
  width: 100%;

  h3 {
    color: #000000;
    padding: 1rem 0 0 0;
  }

  div {
    display: flex;
    gap: 1rem;
    justify-content: center;
    padding-bottom: 1rem;

    button {
      background: transparent;
      border: none;
      display: flex;
      font-size: 1.5rem;
      padding: 0;
      cursor: pointer;

      svg {
        color: #000;
        line-height: 1rem;
      }
    }
`

export const EmptyStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  h1 {
    font-size: 1.5rem;
  }

  svg {
    font-size: 4rem;
    color: var(--secondary);
  }

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const BackToShopping = styled(motion.button)`
  background: white !important;
  width: 100%;
  color: black !important;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  margin: 0 !important;
`

export const MobileResStyle = styled(motion.span)`
  display: none;
  @media only screen and (max-width: 624px) {
    display: block;
  }
`

export const Checkout = styled(motion.div)`
  button {
    background: var(--primary);
    padding: 1rem 2rem;
    width: 100%;
    color: white;
    margin-top: 2rem;
    cursor: pointer;
    border-radius: 15px;
    margin-bottom: 2rem;
  }

  p {
    text-align: center;
    padding: 0.5rem;
  }
`;
