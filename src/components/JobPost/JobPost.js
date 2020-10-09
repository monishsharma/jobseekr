import React from "react";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

function JobPost(props) {
  const saveJobHandler = () => {
    if (props.isAuthenticated) {
      let payload = {
        title: props.title,
        company: props.company,
        date: props.date,
        bio: props.bio,
        lastUpdate: props.lastUpdate,
      };
      props.saveJOBS(payload);
    }
    else {
        alert('please log in');
        props.history.push('/login');
    }
  };

  return (
    <div>
      <div class="post-about mb-4">
        <h2>{props.title}</h2>
        <div>
          <span class="post-tag">{props.company}</span>
        </div>
        <div class="mb-1 text-muted">{props.date}</div>
        <p>{props.bio}</p>
        <small class="text-muted">Last updated: {props.lastUpdate}</small>
        <div className="mt-3">
          {props.history.location.pathname !== "/savedjobs" && (
            <button className="btn btn-primary" onClick={saveJobHandler}>
              Save Job
            </button>
          )}
          <button className="btn btn-primary ml-2">Apply for Job</button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveJOBS: (job) => dispatch(actions.saveJOBS(job)),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(JobPost);
