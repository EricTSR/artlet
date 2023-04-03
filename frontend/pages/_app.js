import "../styles/globals.css";
import {createClient, Provider} from "urql";
import Navigation from "../components/Navigation";
import {StateContext} from "../lib/context";
import {UserProvider} from "@auth0/nextjs-auth0";
import {Toaster} from "react-hot-toast";
import {useEffect, useState} from "react";

const client = createClient({url: process.env.NEXT_PUBLIC_BACKEND_API});

function MyApp({Component, pageProps}) {

    const [showMobile, setShowMobile] = useState(false);

    useEffect(() => {
        return () => {
            document.body.style.overflow = showMobile ? 'hidden' : 'scroll';
        };
    }, []);

    useEffect(() => {
        const body = document.body;
        if (showMobile) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'scroll';
        }
        return () => {
            body.style.overflow = 'scroll';
        };
    }, [showMobile]);

    return (
            <UserProvider>
                <StateContext>
                    <Provider value={client}>
                        <Toaster/>
                        <Navigation showMobile={showMobile} setShowMobile={setShowMobile}/>
                            <Component {...pageProps} />
                    </Provider>
                </StateContext>
            </UserProvider>
    );
}

export default MyApp;
