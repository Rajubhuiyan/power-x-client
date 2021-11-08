

import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import ClassSchedule from "./Components/ClassSchedule/ClassSchedule/ClassSchedule";
import GymFormContainer from "./Components/GymFormContainer/GymFormContainer";
import Home from './Components/Home/Home';
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import OurClassesContainer from "./Components/OurClasses/OurClassesContainer/OurClassesContainer";
import PricingSchedule from "./Components/PricingSchedule/PricingSchedule";

export const userContext = createContext(null);

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  const [orderAndPayment, setOrderAndPayment] = useState({});

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser,orderAndPayment, setOrderAndPayment]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/ourClasses">
            <OurClassesContainer></OurClassesContainer>
          </Route>
          <Route path="/classSchedule/:categoryName">
            <ClassSchedule></ClassSchedule>
          </Route>
          <Route path="/pricingSchedule">
            <PricingSchedule />
          </Route>
          <PrivateRoute path="/orderAndPayment">
            <GymFormContainer></GymFormContainer>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
