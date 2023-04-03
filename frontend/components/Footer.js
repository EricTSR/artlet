import {motion} from "framer-motion";
import styled from "styled-components";
import Link from "next/link";

export default function footer() {
    return (
        <StyledFooter initial={{opacity: 0}} animate={{opacity: 1}} transition={{
            delay: 0.5,
        }}>
            <div>
                <Link href="/about_us"><h3>legal notice</h3></Link>
                <p> 🤍 </p>
                <Link href="/about_us"><h3>privacy-policy</h3></Link>
            </div>
        </StyledFooter>
    )
}

const StyledFooter = styled(motion.footer)`
  background-color: var(--primary);
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  z-index: -100;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    padding: 0 1rem;
    font-size: 1rem;
    color: #535353;
    font-weight: 800;
  }
  
  h3 {
    color: white;
  }
`;