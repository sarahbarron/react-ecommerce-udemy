import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    //  the switch component is used for:
    // the moment a match is made in the route path
    // it doesn't render anything but that route
    <Switch>
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        {/* <Route path="/topics/:topicId" component={TopicsDetail} /> */}
      </BrowserRouter>
    </Switch>
  );
}

export default App;
