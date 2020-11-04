import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Grid, Typography } from "@material-ui/core";
import Paypal from "../components/Paypal";
import { countryNames } from "../utils/countries";
import Modal from '@material-ui/core/Modal';
import { useDispatch, useSelector } from "react-redux";
import productSlice from "../store/product";

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid Email Address')
        .required('Email Address is Required!'),
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('First Name is Required!'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Last Name is Required!'),
    streetAddress: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Street Address is Required!'),
    country: Yup.string()
        .required('Country is Required!'),
    cityTown: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('City/Town is Required!'),
    zipCode: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Zip Code is Required!'),
    phoneNumber: Yup.string()
        .min(7, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Phone Number is Required!'),
});



function CheckoutForm() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.auth.cart);
    const orderDetail = useSelector(state => state.products.orderDetail);
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => {
        setOpenModal(true);
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };


    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    firstName: '',
                    lastName: '',
                    streetAddress: '',
                    country: '',
                    cityTown: '',
                    zipCode: '',
                    phoneNumber: ''
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    let data = {};
                    data.userdata = values;
                    data.cartdata = cart;
                    data.orderdata = orderDetail;
                    let checkoutdata = [];
                    checkoutdata.push(data);
                    console.log(checkoutdata);
                    dispatch(productSlice.actions.setCheckout(checkoutdata));
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Typography className="checkout-heading" variant="h6" style={{ color: "#448aff" }}>Shipping Details</Typography>

                        <Field className="form-input" placeholder="Your e-mail address*" name="email" type="email" />
                        {errors.email && touched.email ? (
                            <div className="form-validation-input">{errors.email}</div>
                        ) : null}

                        <Typography className="checkout-heading" variant="h6" style={{ color: "#448aff" }}>Send my Order to</Typography>

                        <Field className="form-input" placeholder="First Name*" name="firstName" />
                        {errors.firstName && touched.firstName ? (
                            <div className="form-validation-input">{errors.firstName}</div>
                        ) : null}

                        <Field className="form-input" placeholder="Last Name*" name="lastName" />
                        {errors.lastName && touched.lastName ? (
                            <div className="form-validation-input">{errors.lastName}</div>
                        ) : null}

                        <Field className="form-input" placeholder="Street Address*" name="streetAddress" />
                        {errors.streetAddress && touched.streetAddress ? (
                            <div className="form-validation-input">{errors.streetAddress}</div>
                        ) : null}

                        <Field className="form-input-select form-input" as="select" name="country">
                            <option value="" label="Select a Country" />
                            {
                                countryNames?.map((option) => (
                                    <option key={option.id} value={option.value}>
                                        {option.value}
                                    </option>
                                ))
                            }
                        </Field>
                        {errors.country && touched.country ? (
                            <div className="form-validation-input">{errors.country}</div>
                        ) : null}

                        <Field className="form-input" placeholder="City/Town*" name="cityTown" />
                        {errors.cityTown && touched.cityTown ? (
                            <div className="form-validation-input">{errors.cityTown}</div>
                        ) : null}



                        <Field className="form-input" placeholder="Zip Code" name="zipCode" />
                        {errors.zipCode && touched.zipCode ? (
                            <div className="form-validation-input">{errors.zipCode}</div>
                        ) : null}

                        <Field className="form-input" placeholder="Phone Number*" name="phoneNumber" />
                        {errors.phoneNumber && touched.phoneNumber ? (
                            <div className="form-validation-input">{errors.phoneNumber}</div>
                        ) : null}

                        <Button onClick={handleOpenModal}
                            type="submit"
                            className="form-input checkout-btn-primary-pay"
                            style={{ background: "#448aff" }}
                            variant="contained"
                            color="secondary">
                            Checkout
                    </Button>
                        <Modal
                            style={{ margin: "auto" }}
                            open={openModal}
                            onClose={handleCloseModal}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            <div className="paypalModalWidth">
                                <Paypal />
                            </div>
                        </Modal>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default CheckoutForm;