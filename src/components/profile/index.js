import React from 'react';
import CardBox from '../../MaterialUiHelper/CardBox';
import { Typography, Avatar } from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Modal from '@material-ui/core/Modal';
import CreateIcon from '@material-ui/icons/Create';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import AdminTemplate from '../../components/AdminTemplate';
import "../../assets/styles/user.css";
import {useSelector} from "react-redux";
import {API_HOST} from "../../config/api";

const ProfileSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Full Name is Required!'),
  email: Yup.string()
    .email('Invalid Email Address')
    .required('Email Address is Required!'),
})

function Profile(props) {
  const [openModal, setOpenModal] = React.useState(false);
  const { admin } = useSelector(state => state.auth);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <AdminTemplate>
      <div class="page-heading page-heading-small d-sm-flex justify-content-sm-between align-items-sm-center">
        <h5 class="mb-0">
          <span>Admin Profile</span>
        </h5>
      </div>
      <div className="">
        <div className="row d-flex justify-content-center">
          <CardBox styleName="col-lg-12">
            <div>
              <div className="d-flex align-items-end justify-content-end flex-column col-12 mb-2">
                <CreateIcon onClick={handleOpenModal}
                  style={{
                    color: "#448aff",
                    fontSize: 50,
                    cursor: "pointer"
                  }}
                />
                <Modal
                  style={{ margin: "auto" }}
                  open={openModal}
                  onClose={handleCloseModal}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  <div className="paypalModalWidth">
                    <Formik
                      initialValues={{
                        fullName: admin?.name,
                        email: admin?.email,
                        profile_image: ''

                      }}
                      validationSchema={ProfileSchema}
                      onSubmit={values => {
                        console.log(values);
                        setOpenModal(false);
                      }}
                    >
                      {({ errors, touched, handleSubmit, setFieldValue }) => (
                        <Form onSubmit={handleSubmit}>
                          <div className="d-flex align-items-center justify-content-center flex-column col-12 mb-4">
                            <Typography style={{ fontSize: 15, marginBottom: 20, fontWeight: 500 }} variant="h6">Profile Picture</Typography>
                            <div style={{ background: "#d6d6d6", height: 150, width: 150, borderRadius: "50%" }}>
                              <label>
                                <input
                                  style={{ display: 'none' }}
                                  name="profile_image"
                                  type="file"
                                  accept="image/*"
                                  onChange={(event) => {
                                    setFieldValue("profile_image", event.currentTarget.files[0]);
                                  }}
                                />
                                <CameraAltIcon className="camera-alt-icon" />
                              </label>
                            </div>
                            {/* {errors.profile_image && touched.profile_image ? (
                              <div className="form-validation-input custom-validation">{errors.profile_image}</div>
                            ) : null} */}


                          </div>

                          <div className="col-12 col-lg-8 offset-lg-2 mb-2">
                            <Typography style={{ fontSize: 15, marginBottom: 10, fontWeight: 500 }} variant="h6">Full Name</Typography>
                            <Field className="form-input" placeholder="Full Name" name="fullName" type="text" />
                            {errors.fullName && touched.fullName ? (
                              <div className="form-validation-input">{errors.fullName}</div>
                            ) : null}
                          </div>
                          <div className="col-12 col-lg-8 offset-lg-2 mb-2">
                            <Typography style={{ fontSize: 15, marginBottom: 10, fontWeight: 500 }} variant="h6">Email Address</Typography>
                            <Field className="form-input" placeholder="Your e-mail address" name="email" type="email" />
                            {errors.email && touched.email ? (
                              <div className="form-validation-input">{errors.email}</div>
                            ) : null}
                          </div>
                          <div className="d-flex align-items-center justify-content-center flex-column col-12 mb-4">
                            <button type="submit" className="mt-4 btn btn-green">Update Profile</button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </Modal>
              </div>
              <div className="d-flex align-items-center justify-content-center flex-column col-12 mb-4">
                <Avatar
                  alt='...'
                  src={API_HOST + "/uploads/admin_profile_pic/"+ admin?.profile_pic}
                  style={{ width: 150, height: 150 }}
                />
              </div>

              <div className="d-flex align-items-center justify-content-center flex-column col-12 col-lg-6 offset-lg-3 mb-4">
                <Typography style={{ color: "#448AFF", fontSize: 18, marginBottom: 10, fontWeight: 500 }} variant="h6">Full Name</Typography>
                <Typography style={{ fontSize: 16, marginBottom: 1 }} variant="p"> {admin?.name}</Typography>
              </div>

              <div className="d-flex align-items-center justify-content-center flex-column col-12 col-lg-6 offset-lg-3 mb-4">
                <Typography style={{ color: "#448AFF", fontSize: 18, marginBottom: 10, fontWeight: 500 }} variant="h6">Email Address</Typography>
                <Typography style={{ fontSize: 16, marginBottom: 1 }} variant="p"> {admin?.email}</Typography>
              </div>

            </div>
          </CardBox>
        </div>
      </div>
    </AdminTemplate>
  );
}

export default Profile;


