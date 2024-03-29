import {useQuery} from "urql";
import {PRODUCT_QUERY} from "../lib/query";
import {GalleryStyles} from "../styles/GalleryStyles";
import Skeleton from "react-loading-skeleton";
import Product from "../components/Product";
import {motion} from "framer-motion";
import {StyledHeader, StyledParagraph} from "../styles/AboutUsStyles";
import Head from "next/head";

export default function Products() {

    //Fetch products from strapi
    const [results] = useQuery({query: PRODUCT_QUERY});
    const {data, fetching, error} = results;

    //Checks for the data coming in
    if (fetching) return <p>Loading...</p>;
    if (error) return <p>Oh no... {error.message}</p>;
    const products = data.products.data;

    //Framer motion
    const container = {
        hidden: {opacity: 0, scale: 0.8},
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.4,
            }
        }
    }

    const item = {
        hidden: {opacity: 0},
        show: {opacity: 1}
    }

    return (
        <motion.section variants={container} initial={"hidden"} animate={"show"}>
            <Head href="../styles/globals.css">
                <title>Artlet | Shop</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <motion.div variants={item} initial={"hidden"} animate={"show"}>
                <StyledHeader>Shop</StyledHeader>
                <StyledParagraph>
                    "Style Meets Functionality with Artlet: The Slim Wallet for the Modern You"
                </StyledParagraph>
            </motion.div>
            <GalleryStyles variants={container} initial="hidden" animate="show">
                {fetching && <Skeleton/>}{products.map((product) => (
                <Product variant={item} key={product.attributes.slug} product={product}/>))}
            </GalleryStyles>
        </motion.section>
    )
}