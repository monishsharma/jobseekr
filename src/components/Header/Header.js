import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { compose } from "redux";
import * as actions from '../../store/actions/index'

function Header(props) {
  const logout = () => {
    props.isAuthenticatedHandler(false, null);
    props.history.push('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <NavLink className="navbar-brand" to="/">
          LOGO
        </NavLink>
        <div className="navbar-nav mr-auto mt-2 mt-lg-0"></div>
        {props.isAuthenticated ? (
          <React.Fragment>
            <NavLink
              to="/jobs"
              className="btn btn-outline-primary my-2 my-sm-0 mr-2"
              activeClassName="active"
            >
              Jobs
            </NavLink>
            <NavLink
              to="/savedjobs"
              className="btn btn-outline-primary my-2 my-sm-0 mr-2"
              activeClassName="active"
            >
              Saved Jobs ({props.savedJobs.length})
            </NavLink>
            <button
              className="btn btn-outline-primary my-2 my-sm-0 mr-2"
              onClick={logout}
            >
              Logout
            </button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <NavLink
              to="/login"
              className="btn btn-outline-primary my-2 my-sm-0 mr-2"
              activeClassName="active"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="btn btn-outline-primary my-2 my-sm-0 mr-2"
              activeClassName="active"
            >
              Signin
            </NavLink>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    savedJobs: state.auth.savedJobs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    isAuthenticatedHandler: (authState, token) =>
      dispatch(actions.isAuthenticatedHandler(authState, token)),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Header);
