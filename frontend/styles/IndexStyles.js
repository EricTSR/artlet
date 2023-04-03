import styled from "styled-components";

import {motion} from "framer-motion";

export const Logo = styled(motion.div)`
  font-weight: 900;
  color: #171616;
  text-align: center;
`

export const StyledH1 = styled(motion.div)`
  font-weight: 1000;
  color: #171616;
  text-align: center;
  font-size: 4rem;
`

export const StyledIndex = styled(motion.div)`
  margin: 0 5%;
  position: relative;
  top: 10%;
  display: grid;
  grid-template-columns: repeat(2fr, 1fr, 2fr); /* changed from grid-template-columns: 1fr 1fr 1fr; */
  gap: 2rem 0;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  height: 100%;


  @media only screen and (max-width: 600px) {
    margin: 0 5%;
    display: block;

    section section div:last-child {
      padding-top: 0;
    }
  }

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 3rem;
    line-height: 60px;
    color: #171616;
  }

  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 50px;
  }

  h3 {
    font-style: normal;
    font-weight: 800;
    font-size: 1rem;
    color: #171616;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #515151;
  }
  
  section section div:last-child {
    padding-top: 4rem;
  }
  

  button {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    height: 54px;
    width: 134px;
    left: 182px;
    top: 709px;
    margin-top: 1rem;
    color: white;
    background: #171616;
    cursor: pointer;
    border-radius: 50px;
  }
  img {
    overflow: hidden;
    width: 100%;
    display: block;
    margin: auto;
    border-radius: 50% 50% 0 0;
    object-fit: cover;
    padding: 0 5%;
    height: 67vh;
  }
`


export const StyledBox = styled(motion.section)`
  width: 100%;
  
  button {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
  }

`
export const StyledImg = styled(motion.section)`

  @media only screen and (min-width: 1024px) {
    height: 76vh;
    position: relative;

    img {
      overflow: hidden;
      width: 100%;
      display: block;
      margin: auto;
      border-radius: 50% 50% 0 0;
      object-fit: cover;
      padding: 0 5%;
      position: absolute;
      bottom: 0;
    }
  }

`;



export const StyledHero = styled(motion.section)`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  section div {
    width: 100%;
  }


  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    button {
      margin-bottom: 3rem;
    }
    img {
      width: 100%;
      padding: 0 !important;
      height: 40rem;
      object-fit: cover;
      
      border-radius: 0;
    }

 
    #flexI {
      justify-content: center;
      text-align: center;
      display: flex;
      flex-direction: column-reverse;
      div {
        margin-top: 0 !important;
        margin-bottom: 3rem;
      }
    }
  }
`

