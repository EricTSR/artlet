import {
    BackToShopping,
    CartStyle,
    CartWrapper,
    Checkout,
    EmptyStyle,
    MobileResStyle,
    StyledCard,
    StyledCardInfo,
} from "../styles/CartStyles";
import {FaShoppingCart} from "react-icons/fa";
import {AiFillMinusCircle, AiFillPlusCircle} from "react-icons/ai";

//Import State
import {useStateContext} from "../lib/context";
import getStripe from "../lib/getStripe";

export default function Cart() {
    const {cartItems, setShowCart, onAdd, onRemove, totalPrice} =
        useStateContext();

    //Payment
    const handleCheckout = async () => {
        const stripePromise = await getStripe();
        const response = await fetch('/api/stripe', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cartItems),
        });
        const data = await response.json();
        await stripePromise.redirectToCheckout({sessionId: data.id});
    };

    return (
        <CartWrapper
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            onClick={() => setShowCart(false)}
        >
            <CartStyle
                layout
                initial={{x: "50%"}}
                animate={{x: 0}}
                transition={{type: "tween"}}
                onClick={(e) => e.stopPropagation()}
            >
                {cartItems.length < 1 && (
                    <EmptyStyle
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{delay: 0.4}}
                    >
                        <h1>You have more shopping to do 😉</h1>
                        <FaShoppingCart/>
                    </EmptyStyle>
                )}
                {cartItems.length >= 1 &&
                    cartItems.map((item) => {
                        return (
                            <StyledCard
                                layout
                                initial={{opacity: 0, scale: 0.8}}
                                animate={{opacity: 1, scale: 1, transition: {delay: 0.4}}}
                                key={item.slug}
                            >
                                <img src={item.picture.data[0].attributes.formats.small.url} alt={"pictureInfo"}/>
                                <StyledCardInfo>
                                    <h3>{item.title}</h3>
                                    <h3>{item.price}$</h3>
                                    <h3>Quantity</h3>
                                    <div>
                                        <button onClick={() => onRemove(item)}>
                                            <AiFillMinusCircle/>
                                        </button>
                                        <p>{item.quantity}</p>
                                        <button onClick={() => onAdd(item, 1)}>
                                            <AiFillPlusCircle/>
                                        </button>
                                    </div>
                                </StyledCardInfo>
                            </StyledCard>
                        );
                    })}


                <Checkout layout>
                    {cartItems.length >= 1 && (
                        <div>
                            <h3>Subtotal ${totalPrice}</h3>
                            <button onClick={handleCheckout}>Purchase</button>
                            <MobileResStyle>
                                <p>or</p>
                                <BackToShopping onClick={() => setShowCart(false)}>Continue Shopping</BackToShopping>
                            </MobileResStyle>
                        </div>
                    )}
                </Checkout>
            </CartStyle>
        </CartWrapper>
    );
}