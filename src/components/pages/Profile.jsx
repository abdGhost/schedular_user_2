/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useEffect, useState } from "react";
import * as API from "../../utils/services/apis";

export default function Profile() {
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

  const {
    Name,
    Birthdate,
    Email,
    Gender,
    HireDate,
    Id,
    MobileNo,
    Office,
    Salary,
  } = userProfile;
  return (
    <div class="min-h-screen p-2 bg-gray-100 flex items-center justify-center">
      <div class="container max-w-screen-lg mx-auto">
        <div>
          <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <span className="pl-4 text-black-400 font-bold ">
              Profile Details
            </span>
            <div class="p-4 gap-4 gap-y-2 text-sm text-gray-400">
              <div class="lg:col-span-2">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div class="md:col-span-5">
                    <label for="full_name">Full Name</label>
                    <input
                      disabled
                      type="text"
                      name="full_name"
                      id="full_name"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={`${Name}`}
                    />
                  </div>

                  <div class="md:col-span-5">
                    <label for="full_name">Mobile No</label>
                    <input
                      disabled
                      type="number"
                      name="full_name"
                      id="full_name"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={`${MobileNo}`}
                    />
                  </div>

                  <div class="md:col-span-5">
                    <label for="email">Email Address</label>
                    <input
                      disabled
                      type="text"
                      name="email"
                      id="email"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={`${Email}`}
                      placeholder="email@domain.com"
                    />
                  </div>

                  <div class="md:col-span-3">
                    <label for="address">Hired Date</label>
                    <input
                      disabled
                      type="text"
                      name="address"
                      id="address"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={`${HireDate}`}
                      placeholder=""
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label for="city">Date of Birth</label>
                    <input
                      disabled
                      type="text"
                      name="city"
                      id="city"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={`${Birthdate}`}
                      placeholder=""
                    />
                  </div>

                  <div class="md:col-span-3">
                    <label for="address">Office Name</label>
                    <input
                      disabled
                      type="text"
                      name="address"
                      id="address"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={`${Office}`}
                      placeholder=""
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label for="city">Salary</label>
                    <input
                      disabled
                      type="text"
                      name="city"
                      id="city"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={`${Salary}`}
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
