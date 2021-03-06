import React, {useEffect} from "react";
import Template from "../components/Template";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router";
import { countryNames } from "../utils/countries";
import AddIcon from "@material-ui/icons/Add";
import {useDispatch, useSelector} from "react-redux";
import {editProfile, signin} from "../store/auth";


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
  const { user , apiResponse } = useSelector((state) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    if (apiResponse?.message === "User profile info Updated Successfully !") {
      history.push({ pathname: `/profile`, })
    }
  })

  return (
    <Template>
      <div className="profile-edit" style={{ margin: "0 auto" }}>
        <div className="clearfix my-4">
          <div className="float-right">
            <button
              onClick={() => history.push({ pathname: `/profile` })}
              className="btn btn-blue"
              style={{ background: "#448aff" }}
            >
              <Typography
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  display: "inline-block",
                  lineHeight: 2,
                  color: "white",
                }}
                variant="h6"
              >
                {" "}
                Back to Profile
              </Typography>
            </button>
          </div>
        </div>
      </div>
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
            profile_pic: "",
            firstName: user?.first_name,
            lastName: user?.last_name,
            streetAddress: user?.address  ?  user?.address : "",
            country: user?.country ? user?.country : "" ,
            cityTown: user?.city ? user.city : "",
            zipCode: user?.zip_code ? user?.zip_code : "",
            phoneNumber: user?.phone_num ? user?.phone_num : "",
          }}
          validationSchema={EditProfileSchema}
          onSubmit={(values) => {
            console.log(values);
            dispatch(editProfile(
                values.firstName,
                values.lastName,
                values.streetAddress,
                values.zipCode,
                values.cityTown,
                values.country,
                values.phoneNumber,
                user.id,
                values.profile_pic
            ))

          }}
        >
          {({ values, errors, touched, handleSubmit, setFieldValue }) => (
            <Form className="form-profile-edit">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div>
                  <Thumb file={values.profile_pic} />
                </div>
                <label htmlFor="profile_pic">
                  <input
                    style={{ display: "none" }}
                    id="profile_pic"
                    name="profile_pic"
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                      setFieldValue(
                        "profile_pic",
                        event.currentTarget.files[0]
                      );
                    }}
                  />
                  <Button
                    color="secondary"
                    variant="contained"
                    component="span"
                  >
                    <AddIcon /> Upload photo
                  </Button>{" "}
                </label>
              </div>
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

class Thumb extends React.Component {
  state = {
    loading: false,
    thumb: undefined,
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.file) {
      return;
    }

    this.setState({ loading: true }, () => {
      let reader = new FileReader();

      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };

      reader.readAsDataURL(nextProps.file);
    });
  }

  render() {
    const { file } = this.props;
    const { loading, thumb } = this.state;

    if (!file) {
      return null;
    }

    if (loading) {
      return <p>loading...</p>;
    }

    return (
      <img
        src={thumb}
        alt={file.name}
        height={150}
        width={150}
        className="mb-3"
        style={{ borderRadius: "50%" }}
      />
    );
  }
}
