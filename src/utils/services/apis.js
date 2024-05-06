import axios from "axios";

const baseUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:8000";
  } else if (process.env.NODE_ENV === "production") {
    return "/";
  }
};

const API = axios.create({
  baseURL: baseUrl(),
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
    console.log(`Bearer ${localStorage.getItem("token")}`);
  }
  return req;
});

// export const UserLogin = (data) => API.post("/user/login", data);
export const UserLogin = (data) => API.post("/api/auth/employeeLogin", data);
export const UserProfile = () => API.get("/employee/getEmployeeData");

export const GetTask = () => API.get("/user/task");
