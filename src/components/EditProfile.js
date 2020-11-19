import React from "react";
import Template from "../components/Template";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { countryNames } from "../utils/countries";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    marginLeft: 0,
  },
  width50: {
    width: "calc(50% - 8px)",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  width100: {
    width: "calc(100% - 8px)",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const EditProfileSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email Address is Required!"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First Name is Required!"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last Name is Required!"),
  streetAddress: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("Street Address is Required!"),
  country: Yup.string().required("Country is Required!"),
  cityTown: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("City/Town is Required!"),
  zipCode: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("Zip Code is Required!"),
  phoneNumber: Yup.string()
    .min(7, "Too Short!")
    .max(20, "Too Long!")
    .required("Phone Number is Required!"),
});

function EditProfile() {
  const classes = useStyles();
  return (
    <Template>
      <Grid
        container
        style={{ height: "100%" }}
        style={{
          padding: 35,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography style={{ marginBottom: 20, fontWeight: 500 }} variant="h4">
          Edit Profile
        </Typography>

        <Formik
          initialValues={{
            email: "",
            firstName: "",
            lastName: "",
            streetAddress: "",
            country: "",
            cityTown: "",
            zipCode: "",
            phoneNumber: "",
          }}
          validationSchema={EditProfileSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="form-profile-edit">
              <Field
                className="form-input"
                placeholder="Your e-mail address*"
                name="email"
                type="email"
              />
              {errors.email && touched.email ? (
                <div className="form-validation-input">{errors.email}</div>
              ) : null}

              <div className="form-clearfix">
                <div className="form-50-left">
                  <Field
                    className="form-input"
                    placeholder="First Name*"
                    name="firstName"
                  />
                  {errors.firstName && touched.firstName ? (
                    <div className="form-validation-input">
                      {errors.firstName}
                    </div>
                  ) : null}
                </div>

                <div className="form-50-right">
                  <Field
                    className="form-input"
                    placeholder="Last Name*"
                    name="lastName"
                  />
                  {errors.lastName && touched.lastName ? (
                    <div className="form-validation-input">
                      {errors.lastName}
                    </div>
                  ) : null}
                </div>
              </div>

              <Field
                className="form-input"
                placeholder="Address*"
                name="streetAddress"
              />
              {errors.streetAddress && touched.streetAddress ? (
                <div className="form-validation-input">
                  {errors.streetAddress}
                </div>
              ) : null}

              <Field
                className="form-input"
                placeholder="City*"
                name="cityTown"
              />
              {errors.cityTown && touched.cityTown ? (
                <div className="form-validation-input">{errors.cityTown}</div>
              ) : null}

              <div className="form-clearfix">
                <div className="form-50-left">
                  <Field
                    className="form-input-select form-input"
                    as="select"
                    name="country"
                  >
                    <option value="" label="Country/Region*" />
                    {countryNames?.map((option) => (
                      <option key={option.id} value={option.value}>
                        {option.value}
                      </option>
                    ))}
                  </Field>
                  {errors.country && touched.country ? (
                    <div className="form-validation-input">
                      {errors.country}
                    </div>
                  ) : null}
                </div>
                <div className="form-50-right">
                  <Field
                    className="form-input"
                    placeholder="Zip Code"
                    name="zipCode"
                  />
                  {errors.zipCode && touched.zipCode ? (
                    <div className="form-validation-input">
                      {errors.zipCode}
                    </div>
                  ) : null}
                </div>
              </div>
              <Field
                className="form-input"
                placeholder="Phone Number*"
                name="phoneNumber"
              />
              {errors.phoneNumber && touched.phoneNumber ? (
                <div className="form-validation-input">
                  {errors.phoneNumber}
                </div>
              ) : null}

              <Button
                type="submit"
                className="form-input checkout-btn-primary-pay"
                style={{ background: "#448aff" }}
                variant="contained"
                color="secondary"
              >
                Save Profile
              </Button>
            </Form>
          )}
        </Formik>
      </Grid>
    </Template>
  );
}
export default EditProfile;
