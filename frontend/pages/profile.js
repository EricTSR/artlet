import {useRouter} from "next/router";
import {getSession, withPageAuthRequired} from "@auth0/nextjs-auth0";
import formatMoney from "../lib/formatMoney";
import {motion} from "framer-motion";
import Head from "next/head";
import {Order, Site, StyledButton, StyledHeader} from "../styles/ProfileStyles"
// Specify Stripe secret api key here
const stripe = require("stripe")(
    `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(ctx) {
        // access the user session
        const session = getSession(ctx.req, ctx.res);
        const stripeId = session.user[`${process.env.BASE_URL}/stripe_customer_id`];
        const paymentIntents = await stripe.paymentIntents.list({
            customer: stripeId,
        });
        return {props: {orders: paymentIntents.data}};
    },
});

function StyledUser(props) {
    return null;
}

export default function Profile({ user, orders }) {
    const route = useRouter();

    return (
        user && (
            <Site>
                <Head href="../styles/globals.css">
                    <title>Artlet | Profile</title>
                    <meta name="description" content="Generated by create next app"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <div>
                    <StyledHeader>
                        <StyledUser>
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                        </StyledUser>
                        <StyledButton>
                            <motion.button  whileHover={{ scale: 1.0 }}
                                            whileTap={{ scale: 0.95 }} onClick={() => route.push("/api/auth/logout")}>Log out</motion.button>
                        </StyledButton>
                    </StyledHeader>
                </div>
                <div>
                    {orders.map((order) => (
                        (order.receipt_email === user.email) ?
                            order && order.shipping ? (
                                <Order key={order.id}>
                                    <div>
                                        <h1>Order Details</h1>
                                        <p>ID: {order.id}</p>
                                        <p>Amount: {formatMoney(order.amount)}</p>
                                        <p>E-Mail: {order.receipt_email}</p>
                                    </div>
                                    <div>
                                        <h1>Shipping Address</h1>
                                        <p>{order.shipping.address.city}, {order.shipping.address.postal_code}</p>
                                        <p>{order.shipping.address.line1}</p>
                                    </div>
                                </Order>
                            ) : (
                                <Order key={order.id}>
                                    <div>
                                        <h1>Order Details</h1>
                                        <p>ID: null</p>
                                        <p>Amount: null</p>
                                    </div>
                                    <div>
                                        <h1>Shipping Address</h1>
                                        <p>null, null</p>
                                        <p>null</p>
                                    </div>
                                </Order>
                            ) : "")
                    )}
                </div>
            </Site>
        )
    );
}
