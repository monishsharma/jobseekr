import React from "react";
import JobPost from "../../components/JobPost/JobPost";
import'./Home.css';

function Home() {
  return (
    <div>
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Job Search</h1>
          <div className="row justify-content-center mt-5">
            <input type="text" placeholder="Skills" />
            <input className="ml-2" type="text" placeholder="Location" />
            <button className="btn btn-primary ml-2">Find Jobs</button>
          </div>
        </div>
      </section>
      <div className="row job__Section">
        <JobPost
          title="Front end Developer"
          company="Google"
          date="1st June 2020"
          bio="react hirirng"
          lastUpdate="1st June 2020"
        />
          <JobPost
          title="Front end Developer"
          company="Google"
          date="1st June 2020"
          bio="react hirirng"
          lastUpdate="1st June 2020"
        />
         <JobPost
          title="Front end Developer"
          company="Google"
          date="1st June 2020"
          bio="react hirirng"
          lastUpdate="1st June 2020"
        />
         <JobPost
          title="Front end Developer"
          company="Google"
          date="1st June 2020"
          bio="react hirirng"
          lastUpdate="1st June 2020"
        />
        
      </div>
    </div>
  );
}

export default Home;
