import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./components/pages/Dashboard";
import CalendarPage from "./components/pages/CalendarPage";
import Login from "./components/pages/Login";
import Layout from "./common/Layout";

import "./index.css";
import "./app.css";
import Profile from "./components/pages/Profile";
import Employee from "./components/pages/Employee";
import Leave from "./components/pages/Leave";
import { useEffect, useState } from "react";

import * as API from "../src/utils/services/apis";

export default function App() {
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    async function getProfile() {
      try {
        const res = await API.UserProfile();
        console.log("==========================================");
        console.log(res.data);
        setUserProfile(res.data);
      } catch (e) {
        console.log(e);
      }
    }
    getProfile();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={<Layout userProfile={userProfile} />}
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/task" element={<CalendarPage />} />
            <Route path="/dashboard/leave" element={<Leave />} />

            <Route
              path="/dashboard/profile"
              element={<Profile userProfile={userProfile} />}
            />
          </Route>
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
