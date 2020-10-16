import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Order from './components/DashBoard/OrderDashboard/Order/Order';
import Review from './components/DashBoard/ReviewDashboard/Review/Review';
import ServiceList from './components/DashBoard/ServiceListDashboard/ServiceList/ServiceList';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AdminServiceList from './components/AdminDaashboard/AdminServiceListDashboard/AdminServiceList/AdminServiceList';
import AddService from './components/AdminDaashboard/AddServiceDashboard/AddService/AddService';
import MakeAdmin from './components/AdminDaashboard/MakeAdmin/MakeAdmin/MakeAdmin';




export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <Router>
        <Switch>
          <Route exact path="/" >
            <Home></Home>
          </Route>
          <Route path="/home" >
            <Home></Home>
          </Route>
          <Route path="/login" >
            <h3>Name: {loggedInUser.name}</h3>
            <p>Email: {loggedInUser.email}</p>
            <Login></Login>
          </Route>
          <PrivateRoute path="/order" >
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/serviceList" >
            <ServiceList></ServiceList>
          </PrivateRoute>
          <PrivateRoute path="/review" >
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/adminService" >
            <AdminServiceList></AdminServiceList>
          </PrivateRoute>
          <PrivateRoute path="/addService" >
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin" >
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
