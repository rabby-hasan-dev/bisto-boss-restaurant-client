import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import UseCart from "../../../hooks/UseCart";

// TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);
const Payment = () => {
    const [cart] = UseCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const price = parseFloat(total.toFixed(2));



    return (
        <div className="w-full">
            <SectionTitle
                subHeading="Please Process"
                heading="payment"
            ></SectionTitle>

            <Elements stripe={stripePromise} >
                <CheckoutForm
                    cart={cart}
                    price={price}
                ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;