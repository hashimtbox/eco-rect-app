import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/style.css";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import authSlice, { signin } from "../store/auth";
import { useHistory } from "react-router";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import productSlice from "../store/product";
import GoogleSignIn from './GoogleSignIn';
import FacebookSignIn from './FacebookSignIn';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 40,
        background: "white",
        boxShadow: "0 1px 1px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        padding:9,
        borderRadius:2
    },

}));

const SignInSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid Email Address')
        .required('Email Address is Required!'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Password is Required!'),
});

export default function SignIn() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const { error, admin } = useSelector(state => state.auth);
    useEffect(() => {
        if (admin !== null) {
            console.log("admin is here now ", admin);
            // history.push({ pathname: `/dashboard`, })
        }

    })

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

            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="error">
                    {error}
                </Alert>
            </Snackbar>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}><LockOutlinedIcon /></Avatar>
                <Typography component="h1" variant="h5" style={{ marginBottom: 20 }}> Sign in</Typography>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={SignInSchema}
                    onSubmit={values => {
                        console.log(values);
                        dispatch(signin(values.email, values.password))
                        if (error) {
                            handleClickSnackbar();
                        }
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className={classes.form} >
                            <Field className="form-input" placeholder="Email" name="email" type="email" />
                            {errors.email && touched.email ? (
                                <div className="form-validation-input">{errors.email}</div>
                            ) : null}
                            <Field className="form-input" placeholder="Password" name="password" type="password" />
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
                                    Sign In
                        </Button>
                        <GoogleSignIn />
                        <FacebookSignIn/>
                        
                            </div>
                            <Grid container>
                                <Grid item xl={7} lg={7} md={7} sm={7} xs={7}>
                                <Link to="/signup" variant="body2" style={{ color: "#999", textDecoration: "none", marginRight: 30 }} >Register New Account </Link>     
                                    </Grid>
                                <Grid item xl={5} lg={5} md={5} sm={5} xs={5}>
                                    <Link to="/forgotpassword" variant="body2" style={{ color: "#999", textDecoration: "none" }} >Forgot password? </Link>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>

            </div>
            <Box mt={8}><Copyright /></Box>
        </Container>
    );
}


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}

                Grubster Comics
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function Alert(props) {
    return <MuiAlert variant="filled" {...props} />;
}