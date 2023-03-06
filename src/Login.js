import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
const Login = () => {
  const signUpSchema = Yup.object({
    user: Yup.string().min(4).max(10).required(" please enter your username"),

    password: Yup.string()
      .min(4)
      .max(10)
      .required("password fill 10 character "),
  });
  const initialValues = {
    user: "",
    password: "",
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
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  console.log(Math.random());

  return (
    <div>
      <h1 style={{ color: "blue" }}>Login Page</h1>
      <p style={{ background: "aqua" }}>Random Number genrate on login click</p>
      <h1>{Math.random()}</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: "7%",    background: "azure" }}>
        <label>UserName</label>
        <input
          type="text"
          placeholder="username"
          name="user"
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ width: "21%" }}
        />
        {errors.user && touched.user ? (
          <p style={{ color: "red", marginLeft: "4%" }}>{errors.user}</p>
        ) : null}
        <br />
        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ width: "21%", marginTop: "2%", marginLeft: "10px" }}
        />
        {errors.password && touched.password ? (
          <p style={{ color: "red", marginLeft: "4%" }}>{errors.password}</p>
        ) : null}

        <br />
        <br />
        <button type="submit" onClick={() => getRandomInt()}>
          Login
        </button>
        <Link to="/admin">
          <button style={{ marginLeft: "7%" }}>Dashboard</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
