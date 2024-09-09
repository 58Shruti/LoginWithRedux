import React, {  useState } from "react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Spinner from 'react-bootstrap/Spinner';

function LoginPage() {


  const handleSubmit = (val) => {
    axios
      .post(`https://reqres.in/api/login`, val)
      .then((res) => {
        console.log(res.data);
      ;
      })
      .catch((err) => {
        console.warn(err);
      
      });
  };

const validationSchema = Yup.object({
  email : Yup.string().email().required('Required'),
  password :Yup.string().min(6).required('Required')
})
 

  return (
    <div>
      <h2>LOGIN FORM</h2>
      <Formik
       initialValues={{ 
        email: "",
        password: "" }}
       validationSchema={validationSchema}

    onSubmit={handleSubmit}

      >
      
        <Form >
          <label htmlFor="email">Email Id : </label>
          <Field type="email" name="email"  id="email" placeholder= "Enter email"/>
           <br/>
           <ErrorMessage name="email" />
           <br/>
          <label htmlFor="password">Password : </label>
           <Field type="password" name="password" id="password"/>
           <br/>
           <ErrorMessage name="password"  />
           <br/>
         
          <button type="submit">Submit</button>
        </Form>
   
      </Formik>
    </div>
  );
}

export default LoginPage;
