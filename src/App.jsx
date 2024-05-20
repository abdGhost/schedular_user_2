import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./components/pages/Dashboard";
import CalendarPage from "./components/pages/CalendarPage";
import Login from "./components/pages/Login";
import Layout from "./common/Layout";

import "./index.css";
import "./app.css";
import Profile from "./components/pages/Profile";
import Employee from "./components/pages/Employee";

import TaskHistory from "./components/pages/TaskHistory";
import PaymentHistory from "./components/pages/PaymentHistory";

import LeaveRequestForm from "./components/pages/LeaveRequestForm";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/task" element={<CalendarPage />} />
            <Route path="/dashboard/leave" element={<LeaveRequestForm />} />
            <Route path="/dashboard/taskHistory" element={<TaskHistory />} />
            <Route
              path="/dashboard/paymentHistory"
              element={<PaymentHistory />}
            />
            <Route path="/dashboard/profile" element={<Profile />} />
          </Route>
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
