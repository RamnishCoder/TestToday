// import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const RegisterUser = () => {
  const signUpSchema = Yup.object({
    name: Yup.string()
      .min(4)
      .max(10)
      .required(" please enter your title min 10 character"),

    last: Yup.string()
      .min(4)
      .max(10)
      .required(" please enter your title min 8 character"),
    description: Yup.string()
      .min(4)
      .max(10)
      .required(" please enter your description min 10 character"),
  });
  const initialValues = {
    name: "",
    last: "",
    description: "",
    img: "",
  };

  const { errors, touched, handleBlur, handleChange, handleSubmit } = useFormik(
    {
      initialValues: initialValues,

      validationSchema: signUpSchema,
      onSubmit: (val) => {
        console.log(val);
      },
    }
  );

  return (
    <div style={{ background: "aliceblue" }}>
      <h1 style={{ textAlign: "center" }}>Register User</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: "11%" }}>
        <div style={{ marginTop: "-6%" }}>
          <label>First Name</label>

          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="First name"
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ width: "29%", marginLeft: "3%" }}
          />
          {errors.name && touched.name ? (
            <p style={{ color: "red", marginLeft: "8%" }} >
              {errors.name}
            </p>
          ) : null}
          <br />
          <br />
          <label>last Name</label>

          <input
            type="text"
            className="form-control"
            name="last"
            placeholder="Last name"
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ width: "29%", marginLeft: "45px" }}
          />
          {errors.last && touched.last ? (
            <p style={{ color: "red", marginLeft: "8%" }} className="">
              {errors.last}
            </p>
          ) : null}
          <br />
          <br />

          <label> Description</label>

          <input
            type="text"
            className="form-control"
            placeholder="Description"
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ width: "29%", marginLeft: "3%" }}
          />
          {errors.description && touched.description ? (
            <p style={{ color: "red", marginLeft: "8%" }} className="">
              {errors.description}{" "}
            </p>
          ) : null}
          <br />
          <br />
          <label>Select Image</label>
          <input
            type="file"
            name="img"
            className="form-control"
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ marginLeft: "13%" }}
          />
          <br />
          <br />

          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
      <Link to="/admin">
        <button style={{ backgroundColor: "red", marginRight: "32%" }}>
          Back
        </button>
      </Link>
    </div>
  );
};

export default RegisterUser;
