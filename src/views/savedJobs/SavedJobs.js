import React from "react";
import { connect } from "react-redux";
import JobPost from "../../components/JobPost/JobPost";

function SavedJobs(props) {
  return (
    <div className="container mt-5 post__container">
      <h4 className="mb-4">Saved Jobs</h4>

      {props.savedJobs.map((saved, index) => (
        <JobPost
          key={index}
          title={saved.title}
          company={saved.company}
          date={saved.date}
          bio={saved.bio}
          lastUpdate={saved.lastUpdate}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    savedJobs: state.auth.savedJobs,
  };
};

export default connect(mapStateToProps, null)(SavedJobs);
