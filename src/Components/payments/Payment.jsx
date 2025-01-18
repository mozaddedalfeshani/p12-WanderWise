import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import Checkout from "./Checkout";

//todo stripe promise
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
const Payment = () => {
  console.log(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
  return (
    <div className=" w-screen ">
      <h1 className="text-center text-black">Welcome to payment page </h1>
      <Elements stripe={stripePromise}>
        <Checkout />
      </Elements>
    </div>
  );
};

export default Payment;
