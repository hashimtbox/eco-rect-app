import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import {placeOrder} from "../store/auth";

export default function Paypal() {

    const paypal = useRef();
    const history = useHistory();
    const dispatch = useDispatch();

    const [paid, setPaid] = React.useState(false);
    const [Paymenterror, setPaymentError] = React.useState(false);
    const cart = useSelector(state => state.auth.cart);
    const {orderDetail, checkout} = useSelector(state => state.products);
    console.log({checkout})
    useEffect(() => {
        if (!checkout) return
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
                    dispatch(placeOrder(JSON.stringify(checkout?.userdata) , JSON.stringify(checkout?.orderdata) ,JSON.stringify( checkout?.cartdata))) ;
                    setPaid(true);
                    console.log("Paypal Order Detail", order);

                },
                onError: (err) => {
                    console.log("Paypal Error", err);
                    setPaymentError(true);
                },

            })
            .render(paypal.current);
    }, [checkout]);






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