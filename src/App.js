import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Loyout from "./components/layout/Loyout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import LoginWithAccessCode from "./pages/auth/LoginWithAccessCode";
import Profile from "./pages/profile/Profile";
import AccountVerification from "./pages/auth/AccountVerification";
import ChangePassword from "./pages/changePassword/ChangePassword";
import UserList from "./pages/userList/UserList";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loyout><Home /></Loyout>} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
          <Route path='/auth/forgot-password' element={<ForgotPassword />} />
          <Route path='/auth/reset-password/:resetToken' element={<ResetPassword />} />
          <Route path='/auth/login-with-access-code/:email' element={<LoginWithAccessCode />} />
          <Route path='/profile' element={<Loyout><Profile /></Loyout>} />
          <Route path='/account-verification/:verificationToken' element={<Loyout><AccountVerification /></Loyout>} />
          <Route path='/change-password' element={<Loyout>  <ChangePassword /></Loyout>} />
          <Route path='/users' element={<Loyout><UserList /></Loyout>} /></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
