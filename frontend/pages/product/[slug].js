import {Buy, DetailsStyle, ProductInfo, QuantitySection,} from "../../styles/ProductDetailsStyles";
import {AiFillMinusCircle, AiFillPlusCircle} from "react-icons/ai";
import {GET_PRODUCT_QUERY} from "../../lib/query";
import {useQuery} from "urql";
import {useRouter} from "next/router";
import {useStateContext} from "../../lib/context";
import toast from "react-hot-toast";
import {useEffect} from "react";
import {FiPackage} from "react-icons/fi";
import {motion} from "framer-motion";
import styled from "styled-components";
import {IoIosReturnLeft} from "react-icons/io";

export default function ProductDetails() {
    //Use state
    const {increaseQty, decreaseQty, qty, onAdd, setQty} = useStateContext();

    const resetQuantity = () => {
        setQty(1);
    };
    useEffect(() => {
        resetQuantity();
    }, []);

    //Fetch slug
    const {query} = useRouter();
    //Fetch Graphql data
    const [results] = useQuery({
        query: GET_PRODUCT_QUERY, variables: {slug: query.slug},
    });
    const {data, fetching, error} = results;
    if (fetching) return <p>Loading...</p>;
    if (error) return <p>Oh no... {error.message}</p>;
    //Extract Data
    const {title, description, picture, price} = data.products.data[0].attributes;

    //Create Toast
    const notify = () => {
        toast.success(`${title} added to your cart.`, {
            duration: 1500,
        });
    };

    //Framer motion
    const container = {
        hidden: {opacity: 0, scale: 0.8}, show: {
            opacity: 1, scale: 1, transition: {
                ease: "easeOut", duration: 0.2,
            }
        }
    }

    return (<DetailsStyle variants={container} initial={"hidden"} animate={"show"}>
        <motion.img src={picture.data[0].attributes.formats.small.url} alt={title}/>
        <ProductInfo>
            <h2>{title}<span>-</span>{price}$</h2>
            <p>{description}</p>
            <ShippingInfoSection>
                <h3>Shipping Info</h3>
                <ShippingInfoDiv>
                    <FiPackage/>
                    <p>Free Shipping & Returns</p>
                </ShippingInfoDiv>
                <ShippingInfoDiv>
                    <IoIosReturnLeft/>
                    <p>100 days return policy</p>
                </ShippingInfoDiv>
            </ShippingInfoSection>
            <QuantitySection>
                <h3>Quantity</h3>
                <div>
                    <button onClick={decreaseQty}>
                        <AiFillMinusCircle/>
                    </button>
                    <p>{qty}</p>
                    <button>
                        <AiFillPlusCircle onClick={increaseQty}/>
                    </button>
                </div>
            </QuantitySection>
            <Buy
                whileHover={{scale: 1.0}}
                whileTap={{scale: 0.9}}
                onClick={() => {
                    onAdd(data.products.data[0].attributes, qty);
                    notify();
                }}
            >
                Add To Cart
            </Buy>
        </ProductInfo>
    </DetailsStyle>);
}


const ShippingInfoSection = styled(motion.section)`
  h3 {
    color: #000000;
    padding: 1rem 0;
  }

`
const ShippingInfoDiv = styled(motion.div)`
  display: flex;
  gap: 1rem;

  svg {
    font-size: 1.5rem;
  }

  p {
    line-height: 1.5rem
  }

`
