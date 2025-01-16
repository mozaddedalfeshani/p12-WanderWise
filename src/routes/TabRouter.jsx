// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import ClientDashboard from "../pages/dashboard/Client/ClientDashboard";

const UserHome = () => <div>User Home Page</div>;
const Reservation = () => <div>Reservation Page</div>;
const PaymentHistory = () => <div>Payment History Page</div>;
const MyCart = () => <div>My Cart Page</div>;
const AddReview = () => <div>Add Review Page</div>;
const MyBooking = () => <div>My Booking Page</div>;
const Home = () => <div>Home Page</div>;
const Menu = () => <div>Menu Page</div>;
const Shop = () => <div>Shop Page</div>;
const Contact = () => <div>Contact Page</div>;

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/client-dashboard" element={<ClientDashboard />} />
          <Route
            path="*"
            element={
              <>
                <Sidebar />
                <main>
                  <Routes>
                    <Route path="/user-home" element={<UserHome />} />
                    <Route path="/reservation" element={<Reservation />} />
                    <Route path="/payment-history" element={<PaymentHistory />} />
                    <Route path="/cart" element={<MyCart />} />
                    <Route path="/add-review" element={<AddReview />} />
                    <Route path="/my-booking" element={<MyBooking />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </main>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
