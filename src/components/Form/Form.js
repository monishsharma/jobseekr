import React, { useState, useEffect } from "react";
import "./Form.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'
import { compose } from "redux";

function Form(props) {
  const [formType, setformType] = useState(props.history.location.pathname);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [mobile, setmobile] = useState("");
  const [address, setaddress] = useState("");
  const [work, setwork] = useState("");
  const [skills, setskills] = useState("");
  const [isAdmin, setisAdmin] = useState(false);
  const [authUser, setauthUser] = useState({})

  useEffect(() => {
    setformType(props.history.location.pathname);
    localStorage.setItem('authenticated', false);

  }, [props.history.location.pathname]);

  const signUp = (e) => {
    e.preventDefault();

    if (isAdmin) {
      if (formType === "/signup") {
        let payload = {
          name: name,
          email: email,
          password: password,
          mobile: mobile,
          createdAt: Date.now(),
          updatedAt: Date.now(),
        };
        axios
          .post("https://jobs2020.herokuapp.com/admin ", payload)
          .then((response) => {
            console.log(response);
            alert("user created");
          });
      } else {
        let payload = {
          email: email,
          password: password,
        };
        axios
          .post("https://jobs2020.herokuapp.com/login/admin ", payload)
          .then((response) => {
            setauthUser(response.data.token)
            props.isAuthenticatedHandler(true, response.data.token);
            //  props.history.push('/jobs')
            console.log(response);
          });
      }
    } else {
      if (formType === "/signup") {
        let payload = {
          name: name,
          email: email,
          password: password,
          mobile: mobile,
          address: address,
          work: work,
          skills: skills,
          createdAt: Date.now(),
          updatedAt: Date.now(),
        };
        axios
          .post("https://jobs2020.herokuapp.com/user", payload)
          .then((response) => {
            console.log(response);
            alert("user created");
          });
      } else {
        let payload = {
          email: email,
          password: password,
        };
        axios
          .post("https://jobs2020.herokuapp.com/login/user", payload)
          .then((response) => {
            setauthUser(response.data.token)
            props.isAuthenticatedHandler(true,response.data.token);

            console.log(response);
            //  props.history.push('/jobs')

          });
      }
    }
  };

  return (
    <div className="wrapper">
      <form className="form-signin" onSubmit={signUp}>
        <h2 className="form-signin-heading">
          Please {formType === "/login" ? "Login" : "Sign Up"}
        </h2>
        <div className="row mb-3">
          <div className="admin">
            <input
              type="checkbox"
              onChange={(e) => setisAdmin(e.target.checked)}
            />{" "}
            <span> is Admin ?</span>
          </div>
        </div>
        <div className="row ">
          {formType === "/signup" && (
            <div className="col-md-4">
              <label>Name</label>
              <input
                type="text"
                className="form-control "
                name="name"
                placeholder="Name"
                onChange={(e) => setname(e.target.value)}
              />
            </div>
          )}
          <div className="col-md-4">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="Email"
              placeholder="Email"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label>password</label>
            <input
              type="password"
              className="form-control "
              name="password"
              placeholder="password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
        </div>
        {formType === "/signup" && (
          <div className="row  mt-3 mb-3">
            <div className="col-md-4">
              <label>Mobile</label>
              <input
                type="text"
                className="form-control "
                name="Mobile"
                placeholder="Mobile"
                onChange={(e) => setmobile(e.target.value)}
              />
            </div>
            {!isAdmin && (
              <React.Fragment>
                <div className="col-md-4">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control "
                    name="Address"
                    placeholder="Address"
                    onChange={(e) => setaddress(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <label>Work Experience</label>
                  <input
                    type="text"
                    className="form-control "
                    name="Work Experience"
                    placeholder="Work Experience"
                    onChange={(e) => setwork(e.target.value)}
                  />
                </div>
              </React.Fragment>
            )}
          </div>
        )}
        {!isAdmin && formType === "/signup" && (
          <div className="row">
            <div className="col-md-4">
              <label>Skills</label>
              <input
                type="text"
                className="form-control "
                name="Skills"
                placeholder="Skills"
                onChange={(e) => setskills(e.target.value)}
              />
            </div>
          </div>
        )}

        <button
          className="btn btn-lg col-md-1 mt-3 btn-primary btn-block"
          type="submit"
        >
          {formType === "/login" ? "Login" : "Sign Up"}
        </button>
      </form>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    isAuthenticatedHandler: (authState, token) => dispatch(actions.isAuthenticatedHandler(authState, token)),
  };
};


export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Form);

