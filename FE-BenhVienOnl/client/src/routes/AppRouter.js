import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from "../components/Login/Login";
import Home from "../pages/Home";
import Profile from "../components/Login/Profile";
// import SignUp from "../components/Login/SignUp";
import { setUser } from "../Redux/User/userSlice";
import AdminDashboard from "../components/Admin/AdminDashboard";
import Department from "../components/Admin/Department";
import ManageUser from "../components/Admin/ManageUser";
import ManageDoctor from "../components/Admin/ManageDoctor";

const ProtectedRoute = ({ element, redirectTo }) => {
  const { userInfo } = useSelector((state) => state.user);
  return userInfo ? element : <Navigate to={redirectTo} />;
};

function AppRouter() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    const storedToken = localStorage.getItem("token"); 

    if (storedUserInfo && storedToken) {
      dispatch(setUser({
        user: JSON.parse(storedUserInfo),  // Parse userInfo
        token: storedToken  // Lấy token từ localStorage
      }));
    }
  }, [dispatch]);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={!userInfo ? <Login /> : <Navigate to="/" />}
        />
        {/* <Route
          path="/register"
          element={!userInfo ? <SignUp /> : <Navigate to="/" />}
        /> */}
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} redirectTo="/login" />}
        />
         <Route path="/adminDashboard/*" element={<AdminDashboard />}>
          <Route path="user" element={<ManageUser />} />
          <Route path="doctor" element={<ManageDoctor />} />
          <Route path="department" element={<Department />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
