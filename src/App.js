
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import ClassSchedule from "./Components/ClassSchedule/ClassSchedule/ClassSchedule";
import GymFormContainer from "./Components/GymFormContainer/GymFormContainer";
import Home from './Components/Home/Home';
import OrderSuccessPage from "./Components/OrderSuccessPage/OrderSuccessPage";
import OurClassesContainer from "./Components/OurClasses/OurClassesContainer/OurClassesContainer";
import PricingSchedule from "./Components/PricingSchedule/PricingSchedule";

function App() {
  return (
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
        <Route path="/classSchedule">
          <ClassSchedule></ClassSchedule>
        </Route>
        <Route path="/pricingSchedule">
          <PricingSchedule />
        </Route>
        <Route path="/orderAndPayment">
          <GymFormContainer></GymFormContainer>
        </Route>
        <Route path="/orderDone">
          <OrderSuccessPage></OrderSuccessPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
