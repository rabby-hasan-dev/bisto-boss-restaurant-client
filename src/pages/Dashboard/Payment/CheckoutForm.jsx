import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useEffect } from "react";
import UseAuth from "../../../hooks/UseAuth";
// import './checkoutFrom.css'


const CheckoutForm = ({ cart, price }) => {
    const { user } = UseAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    console.log(transactionId);

    useEffect(() => {

        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return
        }

        console.log(card);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('error', error);
            setCardError(error.message)
        }
        else {
            setCardError('')
            console.log('paymentMethod', paymentMethod)
        }
        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'Anonymous user',
                    email: user?.email || 'Anonymous user',
                },
            },
        })

        if (confirmError) {
            console.log(confirmError);
        }

        // console.log(paymentIntent);

        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);

            const transactionId = paymentIntent.id;
            console.log(transactionId);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: transactionId,
                Date: new Date(),
                price,
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemId),
                itemName: cart.map(item => item.name),
                status: 'service pending'
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        // display confirm
                    }
                })

        }


    }
    return (
        <>
            <form className="w-2/3 mx-auto " onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-outline btn-primary w-full btn-sm mt-4 " type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-600 text-center ">{cardError}</p>
            }
            {
                transactionId && <p className="text-green-500 text-center "> TransactionId:{transactionId}</p>
            }
        </>
    );
};

export default CheckoutForm;