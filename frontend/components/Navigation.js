import Link from "next/link";
import {useEffect, useState} from "react";
import {useStateContext} from "../lib/context";

//components
import Cart from "./Cart";
import User from "./User";
//styled components
import {Logo} from "../styles/IndexStyles";
import {MobileStyles, NavigationBar, NavItems, NavStyles} from "../styles/NavStyles";
//framer motion
import {AnimatePresence, motion} from "framer-motion";
//react Icons
import {FaBars} from "react-icons/fa";
import {BiCart} from "react-icons/bi";


const Navigation = ({showMobile, setShowMobile}) => {

    const {showCart, setShowCart, totalQuantities} = useStateContext();
    const size = useWindowSize();

    const MOBILE_BREAKPOINT = 768;

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState(undefined);
        useEffect(() => {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize(
                    window.innerWidth,
                );
            }

            // Add event listener
            window.addEventListener("resize", handleResize);
            // Call handler right away so state gets updated with initial window size
            handleResize();
            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount
        return windowSize;
    }

    //Framer motion
    const container = {
        hidden: {opacity: 0, scale: 0.8}, show: {
            opacity: 1, scale: 1, transition: {
                staggerChildren: 0.1, delayChildren: 0.4,
            }
        }
    }

    const item = {
        hidden: {opacity: 0}, show: {opacity: 1}
    }


    return (

        <div>
            {size > MOBILE_BREAKPOINT && (
                <NavStyles>
                    <Logo>
                        <Link href="/">Artlet</Link>
                    </Logo>
                    <NavigationBar>
                        <span>
                            <Link href="/">Home</Link>
                        </span>
                        <span>
                            <Link href="/about_us">About Us</Link>
                        </span>
                        <span>
                            <Link href="/products">Shop</Link>
                        </span>
                    </NavigationBar>
                    <NavItems>
                        <User/>
                        <div onClick={() => setShowCart(true)}>
                            {totalQuantities > 0 && (
                                <motion.span animate={{scale: 1}} initial={{scale: 0}}>
                                    {totalQuantities}
                                </motion.span>
                            )}
                            <BiCart/>
                        </div>
                    </NavItems>
                    <AnimatePresence>{showCart && <Cart/>}</AnimatePresence>
                </NavStyles>
            )}

            {size < MOBILE_BREAKPOINT && !showMobile && (
                <NavStyles>
                    <Link href="/">Artlet</Link>
                    <FaBars onClick={() => setShowMobile(true)}/>
                </NavStyles>
            )}


            {size < MOBILE_BREAKPOINT && showMobile && (
                <MobileStyles variants={container} initial={"hidden"} animate={"show"}>
                    <motion.div variants={item}
                                onClick={() => setShowMobile(false)}>
                        <Link href="/">Home</Link>
                    </motion.div>
                    <motion.div variants={item}
                                onClick={() => setShowMobile(false)}>
                        <Link href="/about_us">About Us</Link>
                    </motion.div>
                    <motion.div variants={item}
                                onClick={() => setShowMobile(false)}>
                        <Link href="/products">Shop</Link>
                    </motion.div>
                    <motion.div variants={item}
                                onClick={() => setShowMobile(false)}>
                        <Link href={"/profile"}>Profile</Link>
                    </motion.div>
                    <NavItems variants={item} onClick={() => {
                        setShowCart(true)
                    }}>
                        <div>
                            {totalQuantities > 0 && (
                                <motion.span animate={{scale: 1}} initial={{scale: 0}}>
                                    {totalQuantities}
                                </motion.span>
                            )}
                            <BiCart style={{fontSize: '3rem', padding: '0.5rem'}}/>
                        </div>
                    </NavItems>
                    <AnimatePresence>{showCart && <Cart/>}</AnimatePresence>
                </MobileStyles>
            )}
        </div>
    );
}

export default Navigation;