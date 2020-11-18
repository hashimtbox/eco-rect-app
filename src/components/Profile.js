import React from "react";
import CardBox from "../MaterialUiHelper/CardBox";
import { Typography, Grid } from "@material-ui/core";
import macbook from "../assets/macbook.jpg";
import { Avatar } from "@material-ui/core";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import Modal from "@material-ui/core/Modal";
import CreateIcon from "@material-ui/icons/Create";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "../assets/styles/style.css";
import { useSelector } from "react-redux";
import { API_HOST } from "../config/api";
import Template from "./Template";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";

const ProfileSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Full Name is Required!"),
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email Address is Required!"),
});
function Profile(props) {
  const [openModal, setOpenModal] = React.useState(false);
  const { admin } = useSelector((state) => state.auth);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <Template>
      <div className="container">
        <div className="d-block">
          <div class="clearfix">
            <div class="float-left">
              <Typography
                className="pseudo_border1"
                variant="h4"
                style={{
                  fontSize: 25,
                  marginTop: 50,
                  marginBottom: 30,
                  fontWeight: 500,
                }}
              >
                Profile
              </Typography>
            </div>
            <div class="float-right">
              <Typography
                variant="h4"
                style={{
                  fontSize: 25,
                  marginTop: 50,
                  marginBottom: 30,
                  fontWeight: 500,
                }}
              >
                <CreateIcon
                  onClick={handleOpenModal}
                  style={{
                    color: "#448aff",
                    fontSize: 25,
                    cursor: "pointer",
                  }}
                />
                <Modal
                  style={{ margin: "auto" }}
                  open={openModal}
                  onClose={handleCloseModal}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  <div className="paypalModalWidth-2">
                    <Formik
                      initialValues={{
                        fullName: admin?.name,
                        email: admin?.email,
                        profile_image: "",
                      }}
                      validationSchema={ProfileSchema}
                      onSubmit={(values) => {
                        console.log(values);
                        setOpenModal(false);
                      }}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleSubmit,
                        setFieldValue,
                      }) => (
                        <Form onSubmit={handleSubmit}>
                          <div className="d-flex align-items-center justify-content-center flex-column col-12 mb-2">
                            <Typography
                              style={{
                                fontSize: 15,
                                marginBottom: 20,
                                fontWeight: 500,
                              }}
                              variant="h6"
                            >
                              Profile Picture
                            </Typography>
                            <label htmlFor="profile_image">
                              <input
                                style={{ display: "none" }}
                                id="profile_image"
                                name="profile_image"
                                type="file"
                                accept="image/*"
                                onChange={(event) => {
                                  setFieldValue(
                                    "profile_image",
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
                          <Thumb file={values.profile_image} />
                          <div className="col-12 col-lg-8 offset-lg-2 mb-2">
                            <Typography
                              style={{
                                fontSize: 15,
                                marginBottom: 10,
                                fontWeight: 500,
                              }}
                              variant="h6"
                            >
                              Full Name
                            </Typography>
                            <Field
                              className="form-input"
                              placeholder="Full Name"
                              name="fullName"
                              type="text"
                            />
                            {errors.fullName && touched.fullName ? (
                              <div className="form-validation-input">
                                {errors.fullName}
                              </div>
                            ) : null}
                          </div>
                          <div className="col-12 col-lg-8 offset-lg-2 mb-2">
                            <Typography
                              style={{
                                fontSize: 15,
                                marginBottom: 10,
                                fontWeight: 500,
                              }}
                              variant="h6"
                            >
                              Email Address
                            </Typography>
                            <Field
                              className="form-input"
                              placeholder="Your e-mail address"
                              name="email"
                              type="email"
                            />
                            {errors.email && touched.email ? (
                              <div className="form-validation-input">
                                {errors.email}
                              </div>
                            ) : null}
                          </div>
                          <div className="d-flex align-items-center justify-content-center flex-column col-12 mb-4">
                            <button
                              type="submit"
                              className="mt-4 btn btn-green"
                            >
                              Update Profile
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </Modal>
              </Typography>
            </div>
          </div>
        </div>
        <div className="jr-card">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-md-4 d-flex justify-content-center align-items-center">
                <Avatar
                  alt="User_image"
                  src=""
                  // src={API_HOST + "/uploads/admin_profile_pic/"+ admin?.profile_pic}
                  style={{ width: 200, height: 200 }}
                />
              </div>
              <div class="col-12 col-md-8 d-flex flex-column align-items-center align-items-md-start justify-content-center justify-content-md-start">
                <div className="d-flex justify-content-center justify-content-md-start flex-column mt-4 mt-md-0 mb-4">
                  <Typography
                    style={{
                      color: "#448AFF",
                      fontSize: 18,
                      marginBottom: 10,
                      fontWeight: 500,
                    }}
                    variant="h6"
                  >
                    Full Name
                  </Typography>
                  <Typography
                    style={{ fontSize: 16, marginBottom: 1 }}
                    variant="p"
                  >
                    {/* {admin?.name} */} Name here
                  </Typography>
                </div>
                <div className="d-flex justify-content-center justify-content-md-start flex-column mb-4">
                  <Typography
                    style={{
                      color: "#448AFF",
                      fontSize: 18,
                      marginBottom: 10,
                      fontWeight: 500,
                    }}
                    variant="h6"
                  >
                    Email Address
                  </Typography>
                  <Typography
                    style={{ fontSize: 16, marginBottom: 1 }}
                    variant="p"
                  >
                    email@address.com
                    {/* {admin?.email} */}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-block">
          <Typography
            className="pseudo_border1"
            variant="h4"
            style={{
              fontSize: 25,
              marginTop: 50,
              marginBottom: 30,
              fontWeight: 500,
            }}
          >
            My Orders
          </Typography>
        </div>
      </div>
    </Template>
  );
}
export default Profile;

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
