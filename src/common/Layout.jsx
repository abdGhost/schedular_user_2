/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import SideNav from "./SideNav";
import * as API from "../utils/services/apis";
import Leftbar from "./Leftbar";

const Layout = ({ userProfile }) => {
  const navigate = useNavigate();

  const [userProfile1, setUserProfile] = useState({});

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

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      {/* <SideNav />
      <Header userProfile={userProfile1} />
      <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-200 min-h-screen transition-all main">
        <Outlet />
      </main> */}

      <div>
        <div>
          <Header userProfile={userProfile1} />
          <div className="flex flex-row overflow-auto">
            <div className="basis-1/12 max-[760px]:hidden lg:block ">
              <Leftbar onHide={() => console.log("======")} />{" "}
            </div>
            <div className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-200 min-h-screen transition-all main h-auto max-[760px]:basis-12/12  lg:basis-11/12">
              {" "}
              <Outlet />
            </div>
          </div>
        </div>
        ð
      </div>
    </>
  );
};

export default Layout;
