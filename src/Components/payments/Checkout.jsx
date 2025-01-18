import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = React.useState(null);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);

      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
      });
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      toast.success("Payment successful", {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="m-5 w-1/2">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },

              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button type="submit" className="btn btn-ghost" disabled={!stripe}>
          Pay
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
