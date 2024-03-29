import Stripe from "stripe";
import {getSession} from "@auth0/nextjs-auth0";

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function handler(req, res) {
  const session = getSession(req, res);
  const user = session?.user;
  if (user) {
    const stripeId = user["http://localhost:3000/stripe_customer_id"];
    if (req.method === "POST") {
      try {
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
          submit_type: "pay",
          mode: "payment",
          payment_method_types: ["card"],
          customer: stripeId,
          shipping_address_collection: {allowed_countries: ['US', 'CA', 'DE']},
          shipping_options: [
            {
              shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {amount: 0, currency: 'usd'},
                display_name: 'Free Shipping',
                delivery_estimate: {
                  minimum: {unit: 'business_day', value: 3},
                  maximum: {unit: 'business_day', value: 7},
                },
              },
            },
          ],

          allow_promotion_codes: true,
          line_items: req.body.map((item) => {
            return {
              price_data: {
                currency: "usd",
                product_data: {
                  name: item.title,
                  images: [item.picture.data[0].attributes.formats.small.url],
                },
                unit_amount: item.price * 100,
              },
              adjustable_quantity: {
                enabled: true,
                minimum: 1,
              },
              quantity: item.quantity,
            };
          }),
          success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}/canceled`,
        });
        res.status(200).json(session);
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
    } else {
      res.setHeader("Allow", "POST");
      res.status(405).end("Method Not Allowed");
    }
  } else {
    if (req.method === "POST") {
      try {
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
          submit_type: "pay",
          mode: "payment",
          payment_method_types: ["card"],
          allow_promotion_codes: true,
          shipping_address_collection: {allowed_countries: ['US', 'CA', 'DE']},
          shipping_options: [
            {
              shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {amount: 0, currency: 'usd'},
                display_name: 'Free Shipping',
                delivery_estimate: {
                  minimum: {unit: 'business_day', value: 3},
                  maximum: {unit: 'business_day', value: 7},
                },
              },
            },
          ],

          line_items: req.body.map((item) => {
            return {
              price_data: {
                currency: "usd",
                product_data: {
                  name: item.title,
                  images: [item.picture.data[0].attributes.formats.small.url],
                },
                unit_amount: item.price * 100,
              },
              adjustable_quantity: {
                enabled: true,
                minimum: 1,
              },
              quantity: item.quantity,
            };
          }),
          success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}/canceled`,
        });
        res.status(200).json(session);
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
    } else {
      res.setHeader("Allow", "POST");
      res.status(405).end("Method Not Allowed");
    }
  }
}
