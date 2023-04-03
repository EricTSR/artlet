import styled from "styled-components";
import {motion} from "framer-motion";

export const NavStyles = styled.nav`
  margin: 0 5%;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  min-height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  color: #303030;

  a {
    font-size: 1.2rem;
  }
`;

export const NavigationBar = styled.div`
  list-style: none;
  text-decoration: none;
  display: flex;
  font-weight: 400;
  line-height: 45px;
  width: 40%;
  min-height: 15vh;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  color: #303030;
  padding: 1rem;
  gap: 1rem;

  span {
    &:hover {
      text-decoration: #171616 underline;
    }
  }


`

export const NavItems = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;

  div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }

  h3 {
    font-size: 0.75rem;
    padding: 0.25rem;
  }

  svg {
    font-size: 1.5rem;
  }

  span {
    background: #ff2626;
    color: white;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.75rem;
    position: absolute;
    right: -10%;
    top: -20%;
    font-weight: 700;
    pointer-events: none;

    @media only screen and (max-width: 600px) {
      top: 0;
      right: 0;
    }



`;

export const MobileStyles = styled(motion.nav)`
  position: absolute;
  background: white;
  padding: 20rem 0;
  font-size: 1.4rem;
  top: 0;
  justify-content: space-between;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  div {
    margin: auto;

    div {
      font-size: 10em;
    }

  }


`;

