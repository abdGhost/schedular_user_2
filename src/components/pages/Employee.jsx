import React from "react";
import { useForm } from "react-hook-form";
import * as API from "../../utils/services/apis";

const Employee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    console.log("data", data);
    const formData = new FormData();
    data["address"] = {
      city: data.city,
      street: data.street,
      zip: data.zip,
      country: data.country,
      state: data.state,
    };
    data.profilePic = data.profilePic[0];
    data.idProof = data.idProof[0];
    formData.append("address", JSON.stringify(data.address));
    formData.append("profilePic", data.profilePic);
    formData.append("idProof", data.idProof);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("hireDate", data.hireDate);
    formData.append("role", data.role);
    await API.AddEmployee(formData).then((res) => res.data);
  };
  return (
    <>
      <form
        enctype="multipart/form-data"
        onSubmit={handleSubmit(submitHandler)}
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          {...register("name")}
          style={{ border: "1px solid black", marginBottom: "0.5em" }}
        />
        <br />
        <label htmlFor="name">Email:</label>
        <input
          type="email"
          {...register("email")}
          style={{ border: "1px solid black", marginBottom: "0.5em" }}
        />
        <br />
        <label htmlFor="name">Password:</label>
        <input
          type="password"
          {...register("password")}
          style={{ border: "1px solid black", marginBottom: "0.5em" }}
        />
        <br />
        <label htmlFor="name">City:</label>
        <input
          type="text"
          {...register("city")}
          style={{ border: "1px solid black", marginBottom: "0.5em" }}
        />
        <br />
        <label htmlFor="name">Street:</label>
        <input
          type="text"
          {...register("street")}
          style={{ border: "1px solid black", marginBottom: "0.5em" }}
        />
        <br />
        <label htmlFor="name">ZIP:</label>
        <input
          type="number"
          {...register("zip")}
          style={{ border: "1px solid black", marginBottom: "0.5em" }}
        />
        <br />
        <label htmlFor="name">State:</label>
        <input
          type="text"
          {...register("state")}
          style={{ border: "1px solid black", marginBottom: "0.5em" }}
        />
        <br />
        <label htmlFor="name">Country:</label>
        <input
          type="text"
          {...register("country")}
          style={{ border: "1px solid black", marginBottom: "0.5em" }}
        />
        <br />
        <label htmlFor="name">Hire Date:</label>
        <input
          type="text"
          {...register("hireDate")}
          style={{ border: "1px solid black", marginBottom: "0.5em" }}
        />
        <br />
        <label htmlFor="name">Role:</label>
        <input
          type="text"
          {...register("role")}
          style={{ border: "1px solid black", marginBottom: "0.5em" }}
        />
        <br />
        <label htmlFor="name">Profile Pic:</label>
        <input
          type="file"
          {...register("profilePic")}
          style={{ border: "1px solid black", marginBottom: "0.5em" }}
        />
        <br />
        <label htmlFor="name">ID Proof:</label>
        <input
          type="file"
          {...register("idProof")}
          style={{ border: "1px solid black", marginBottom: "0.5em" }}
        />
        <br />
        <button
          type="submit"
          style={{
            padding: "0.3rem 0.8rem",
            background: "blue",
            color: "#fff",
            borderRadius: "3px",
          }}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default Employee;
