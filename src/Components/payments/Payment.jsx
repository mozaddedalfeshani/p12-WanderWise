import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect } from "react";
import Checkout from "./Checkout";
import axios from "axios";
import HOST from "../../constant/HOST";
//todo stripe promise
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
const Payment = ({ price }) => {
  console.log("Price from parent:", price);
  console.log(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
  useEffect(() => {
    axios
      .post(`${HOST}/create-payment-intent`, {
        price: 100,
      })
      .then((res) => {
        console.log(res.data);
      });
  }, []);
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
