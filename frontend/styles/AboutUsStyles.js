import styled from "styled-components";
import {motion} from "framer-motion";


export const StyledAboutUsPage = styled(motion.div)`

`
export const StyledHeader = styled(motion.h1)`
  text-align: center;
  font-size: 2rem;
  font-weight: 1000;
  padding-top: 0 !important;
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
`

export const StyledParagraph = styled(motion.p)`
  text-align: center;
  padding-bottom: 4rem;
`


export const Content = styled(motion.div)`
  margin: auto;
  width: 50%;
  
  @media only screen and (max-width: 1280px) {
    width: 70%;
  }
  
  
  @media only screen and (max-width: 768px) {
      width: 90%;
  }
`

export const StyledAbout = styled(motion.section)`
  display: flex;
  margin-bottom: 2rem;
  
`

export const StyledResult = styled(motion.section)`
  margin-bottom: 2rem;
`