import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import Authentication from "./pages/authentication/authentication.component";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  // set a property for unsubscribe from auth by default is null
  unsubscribeFromAuth = null;

  // when the component mounts
  componentDidMount() {
    // firebase createUserProfileDocument method in the auth library
    // it takes a function where the parameter
    // is what this user state is
    // inside we set the currentUser state to the user state
    // when registering/logging in our data is stored in firebase be we also need the data
    // to be stored in the state of our application to use in the app
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // if there is someone logged in
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // call the onSnapshot method to return the data of the user
        // use this snapshot to
        userRef.onSnapshot(async (snapShot) => {
          //set the state to the current id and property data
          await this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      // otherwise the user is not logged in set the
      // current user to the userAuth which should be null
      else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  // to close the subscription we call
  // the firebase method to unsubscribe from auth
  // this is done when the App is unmounted or closed
  componentWillUnmount() {
    this.unsubscribeFromAuth();
    console.log(this.unsubscribeFromAuth);
  }
  render() {
    return (
      // if you want something on every page put the
      // component outside of the <switch> component

      <div>
        {/* header will display on every pg */}
        <Header currentUser={this.state.currentUser} />

        {/* the switch component is used for: the moment a match is made in the
        route path it doesn't render anything but that route  */}
        <Switch>
          <BrowserRouter>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={Authentication} />
            {/* <Route path="/topics/:topicId" component={TopicsDetail} /> */}
          </BrowserRouter>
        </Switch>
      </div>
    );
  }
}

export default App;
