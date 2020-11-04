import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

export default function Paypal() {

    const paypal = useRef();
    const history = useHistory();

    const [paid, setPaid] = React.useState(false);
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
                                description: "Cool looking table",
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

                },
                onError: (err) => {
                    console.log(err);
                },

            })
            .render(paypal.current);
    }, []);



    if (paid) {
        return <Redirect to={"/orderConfirmed"} />
    }


    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
}