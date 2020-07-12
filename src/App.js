import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const TopicsList = (props) => {
  console.log(props);
  return (
    <div>
      <button onClick={() => props.history.push("/topics/123")}>
        Details{" "}
      </button>
      <h1>Topics List Page</h1>
    </div>
  );
};
const TopicsDetail = (props) => {
  console.log(props);
  return (
    <div>
      <button onClick={() => props.history.goBack(props)}>Go Back</button>
      <h1>Topics Details Page</h1>
    </div>
  );
};
function App() {
  return (
    //  the switch component is used for:
    // the moment a match is made in the route path
    // it doesn't render anything but that route
    <Switch>
      <BrowserRouter>
        <Route path="/" component={HomePage} />
        <Route exact path="/topics" component={TopicsList} />
        <Route path="/topics/:topicId" component={TopicsDetail} />
      </BrowserRouter>
    </Switch>
  );
}

export default App;
