import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password is Required')
});

const Login = () => {
  
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      console.log(values);
      // add code here to connect to backend
      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type' : 'application/json' }
      });

      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'Login Success'
        })
        const data = await res.json();
        console.log(data);
        sessionStorage.setItem('user', JSON.stringify(data));
      }else if(res.status === 401){
        Swal.fire({
          icon : 'error',
          title : 'Login Failed',
          text : 'Email or Password is incorrect'
        })
      }else{
        Swal.fire({
          icon : 'error',
          title : 'Error',
          text : 'Something went wrong'
        })
      }

    },

    validationSchema: loginSchema
  });

  return (
    <div>
      <div className="col-md-3 mx-auto">
        <div className="card">
          <div className="card-body">
            <h2 className="my-5">Login Form</h2>

            <form onSubmit={loginForm.handleSubmit}>
              <label htmlFor="">Email</label>
              <span style={{color: 'red', fontSize: 15, marginLeft: 10}}>{loginForm.touched.email && loginForm.errors.email}</span>
              <input className="form-control mb-3" onChange={loginForm.handleChange} value={loginForm.values.email} name="email" />

              <label htmlFor="">Password</label>
              <span style={{color: 'red', fontSize: 15, marginLeft: 10}}>{loginForm.touched.password && loginForm.errors.password}</span>
              <input className="form-control mb-3" type="password" onChange={loginForm.handleChange} value={loginForm.values.password} name="password" />

              <button type="submit" className="btn btn-primary mt-4">Login</button>
            </form>

          </div>
        </div>  
      </div>
    </div>
  );
};

export default Login;
