
import Template from "./Template"
import Card from '@material-ui/core/Card';
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

const useStyles = makeStyles((theme) => ({
   
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

const ChangePasswordSchema = Yup.object().shape({

    oldpassword: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Old Password is Required!'),
        newpassword: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('New Password is Required!'),
        confirmpassword: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Confirm Password is Required!'),
});

export default function ChangePassword() {
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
      <Template>
        <Card>
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="error">
                    {error}
                </Alert>
            </Snackbar>
            <div>
            <div style={{display:"flex", justifyContent:"center",alignItems:"center" }}>
            <Typography  variant="h4" style={{ marginTop: 50, marginBottom: 30, fontWeight:500 }}>
            Change Password
              </Typography>
              </div>
                   
                <Formik
                    initialValues={{
                        oldpassword:'',
                        newpassword:'',
                        confirmpassword:''
                    }}
                    validationSchema={ChangePasswordSchema}
                    onSubmit={values => {
                        console.log(values);
                        // dispatch(signin(values.email, values.password))
                        // if (error) {
                        //     handleClickSnackbar();
                        // }
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className={classes.form} >
                            <Field className="form-input" placeholder="Old Password" name="oldpassword" type="password" />
                            {errors.oldpassword && touched.oldpassword ? (
                                <div className="form-validation-input">{errors.oldpassword}</div>
                            ) : null}
                              <Field className="form-input" placeholder="New Password" name="newpassword" type="password" />
                            {errors.newpassword && touched.newpassword ? (
                                <div className="form-validation-input">{errors.newpassword}</div>
                            ) : null}
                              <Field className="form-input" placeholder="Confirm Password" name="confirmpassword" type="password" />
                            {errors.confirmpassword && touched.confirmpassword ? (
                                <div className="form-validation-input">{errors.confirmpassword}</div>
                            ) : null}
                            <div className="px-0 d-flex align-items-center justify-content-center flex-column col-12 mb-2">
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    className={classes.submit}
                                    style={{ marginBottom: 70 , padding:9}}
                                >
                                    Change Password
                                </Button>
                            </div>
 
                        </Form>
                    )}
                </Formik>

            </div>
          
        </Container>
        </Card>
        </Template>
    );
}



function Alert(props) {
    return <MuiAlert variant="filled" {...props} />;
}