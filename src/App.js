import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
    // if you want something on every page put the
    // component outside of the <switch> component

    <div>
      {/* header will display on every pg */}
      <Header />

      {/* the switch component is used for: the moment a match is made in the
      route path it doesn't render anything but that route  */}
      <Switch>
        <BrowserRouter>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          {/* <Route path="/topics/:topicId" component={TopicsDetail} /> */}
        </BrowserRouter>
      </Switch>
    </div>
  );
}

export default App;
