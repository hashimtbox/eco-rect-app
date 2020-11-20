import React from 'react';
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
import "../assets/styles/style.css";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

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
    },
}));

const ForgotSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid Email Address')
        .required('Email Address is Required!'),
});

export default function ForgotPassword() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}><LockOutlinedIcon /></Avatar>
                <Typography component="h1" variant="h5" style={{ marginBottom: 20 }}> Reset Password</Typography>
                <Formik
                    initialValues={{
                        email: '',
                    }}
                    validationSchema={ForgotSchema}
                    onSubmit={values => {
                        console.log(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className={classes.form} >
                            <Field className="form-input" placeholder="Your e-mail address*" name="email" type="email" />
                            {errors.email && touched.email ? (
                                <div className="form-validation-input">{errors.email}</div>
                            ) : null}


                            <div className="px-0 d-flex align-items-center justify-content-center flex-column col-12 mb-2">

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    className={classes.submit}
                                >
                                    Reset Password
                        </Button>
                            </div>
                            <Grid container>
                                <Grid item xs>
                                    <Link to="/signin" variant="body2" style={{ color: "#999", textDecoration: "none" }} >Back to Sign In </Link>
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