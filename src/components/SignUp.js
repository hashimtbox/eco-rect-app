import React, { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/style.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import authSlice, { signin, signUp } from "../store/auth";
import { useHistory } from "react-router";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import productSlice from "../store/product";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 40,
    background: "white",
    boxShadow: "0 1px 1px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignInSchema = Yup.object().shape({
  firstname: Yup.string()
    .required("fullname is Required!")
    .max(10, "Too Long!"),
  lastname: Yup.string()
    .required("fullname is Required!")
    .max(10, "Too Long!"),
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email Address is Required!"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Password is Required!"),
});

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { error, user, apiResponse } = useSelector((state) => state.auth);
  useEffect(() => {
    if (user !== null) {
      history.push({ pathname: `/` });
    }
  });
  let message_from_api = apiResponse?.message;
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const handleClickSnackbar = () => {
    setOpenSnackbar(true);
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={apiResponse?.success ? "success" : "error"}
        >
          {message_from_api}
        </Alert>
      </Snackbar>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" style={{ marginBottom: 20 }}>
          {" "}
          Sign Up
        </Typography>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            password: "",
          }}
          validationSchema={SignInSchema}
          onSubmit={(values) => {
            console.log(values);
            dispatch(
              signUp(
                values.firstname,
                values.lastname,
                values.email,
                values.password
              )
            );
            if (error) {
              handleClickSnackbar();
            }
          }}
        >
          {({ errors, touched }) => (
            <Form className={classes.form}>
              <Field
                className="form-input"
                placeholder="First Name"
                name="firstname"
                type="text"
              />
              {errors.firstname && touched.firstname ? (
                <div className="form-validation-input">{errors.firstname}</div>
              ) : null}
              <Field
                className="form-input"
                placeholder="Last Name"
                name="lastname"
                type="text"
              />
              {errors.lastname && touched.lastname ? (
                <div className="form-validation-input">{errors.lastname}</div>
              ) : null}

              <Field
                className="form-input"
                placeholder="Email"
                name="email"
                type="email"
              />
              {errors.email && touched.email ? (
                <div className="form-validation-input">{errors.email}</div>
              ) : null}
              <Field
                className="form-input"
                placeholder="Password"
                name="password"
                type="password"
              />
              {errors.password && touched.password ? (
                <div className="form-validation-input">{errors.password}</div>
              ) : null}

              <div className="px-0 d-flex align-items-center justify-content-center flex-column col-12 mb-2">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                >
                  Sign Up
                </Button>
              </div>
              <Grid container>
                <Grid item xs>
                  <Link
                    to="/signin"
                    variant="body2"
                    style={{ color: "#999", textDecoration: "none" }}
                  >
                    Back to SignIn{" "}
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      Grubster Comics {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Alert(props) {
  return <MuiAlert variant="filled" {...props} />;
}
