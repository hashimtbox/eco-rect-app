import CardBox from '../../MaterialUiHelper/CardBox';
import { Button, Typography, Avatar } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "../../assets/styles/user.css";
import AdminTemplate from '../../components/AdminTemplate';

const ValidationSchema = Yup.object().shape({
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

class changePassword extends React.Component {

  render() {
    return (
      <AdminTemplate>
        <div class="page-heading page-heading-small d-sm-flex justify-content-sm-between align-items-sm-center">
          <h5 class="mb-0">
            <span>Change Password</span>
          </h5>
        </div>
        <div className="">
          <div className="row">
            <CardBox styleName="col-lg-12"
            >
              <Formik
                initialValues={{
                  oldpassword: '',
                  newpassword: '',
                  confirmpassword: '',
                }}
                validationSchema={ValidationSchema}
                onSubmit={values => {
                  console.log(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="col-12 col-lg-6 offset-lg-3 mb-2">
                      <Typography style={{ fontSize: 15, marginBottom: 10, fontWeight: 500 }} variant="h6">Old Password</Typography>

                      <Field className="form-input" placeholder="Old Password*" name="oldpassword" type="password" />
                      {errors.oldpassword && touched.oldpassword ? (
                        <div className="form-validation-input">{errors.oldpassword}</div>
                      ) : null}
                    </div>
                    <div className="col-12 col-lg-6 offset-lg-3 mb-2">
                      <Typography style={{ fontSize: 15, marginBottom: 10, fontWeight: 500 }} variant="h6">New Password</Typography>

                      <Field className="form-input" placeholder="New Password*" name="newpassword" type="password" />
                      {errors.newpassword && touched.newpassword ? (
                        <div className="form-validation-input">{errors.newpassword}</div>
                      ) : null}
                    </div>
                    <div className="col-12 col-lg-6 offset-lg-3 mb-2">
                      <Typography style={{ fontSize: 15, marginBottom: 10, fontWeight: 500 }} variant="h6">Confirm Password</Typography>


                      <Field className="form-input" placeholder="Confirm Password*" name="confirmpassword" type="password" />
                      {errors.confirmpassword && touched.confirmpassword ? (
                        <div className="form-validation-input">{errors.confirmpassword}</div>
                      ) : null}
                    </div>
                    <div className="d-flex align-items-center justify-content-center flex-column col-12 mb-4">
                      <Button type="submit"
                        style={{
                          color: "white", background: "#448aff", paddingTop: 12, paddingBottom: 10
                        }} className="mt-4 btn" variant="contained">
                        UPDATE PASSWORD
                  </Button>

                    </div>

                  </Form>
                )}
              </Formik>
            </CardBox>

          </div>

        </div>
      </AdminTemplate>
    );
  }
}

export default changePassword;
