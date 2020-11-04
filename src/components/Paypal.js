import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

export default function Paypal() {

    const paypal = useRef();
    const history = useHistory();

    const [paid, setPaid] = React.useState(false);
    const [Paymenterror, setPaymentError] = React.useState(false);
    const cart = useSelector(state => state.auth.cart);
    const orderDetail = useSelector(state => state.products.orderDetail);

    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "Paypal Payment",
                                amount: {
                                    currency_code: "USD",
                                    value: `${orderDetail?.subtotal}`,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    setPaid(true);
                    console.log("Paypal Order Detail", order);

                },
                onError: (err) => {
                    console.log("Paypal Error", err);
                    setPaymentError(true);
                },

            })
            .render(paypal.current);
    }, []);



    if (paid) {
        return <Redirect to={"/orderconfirmed"} />
    }
    if (Paymenterror) {
        return <Redirect to={"/paymenterror"} />
    }


    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
}