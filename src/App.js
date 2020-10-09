import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home/Home";
import Form from "./components/Form/Form";
import Jobs from "./views/Jobs/Jobs";
import SavedJobs from "./views/savedJobs/SavedJobs";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route path="/login" component={Form} />
        <Route path="/signup" component={Form} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/savedjobs" component={SavedJobs} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
