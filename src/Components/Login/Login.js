import React from 'react'
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Login.css'




const Login = () => {

    const [signInWithGoogle, googleuser, googleloading, googleError] = useSignInWithGoogle(auth);
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
  
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
  
    let signInError;
    const navigate= useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
  
    if(error ||  googleError ){
      signInError = <p className="text-danger fw-normal mb-3">{error?.message || googleError?.message}</p>
    }
  
    if(loading || googleloading){
      return <button className="spinner mt-5 fw-normal">Loading...</button>
    }
  
    if ( user || googleuser) {
      navigate(from , { replace: true });
    }
  
    const onSubmit = (data) => {
      console.log(data);
      signInWithEmailAndPassword(data.email,data.password);
    };
  
  return (
    
    <div className="background mx-auto w-50 px-5 py-5 my-5">
    <h3 className="mb-4 text-info fw-bold fs-2 my-5">
      Please Login Here
    </h3>
    <form onSubmit={handleSubmit(onSubmit)}>
     
        <input
          type="email"
          className=" pl-3 py-2 form-control"
          placeholder="Your Email"
          {...register("email", {
            required: {
              value: true,
              message: "Email must be Required",
            },
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: "Enter Valid Email",
            },
          })}
        />
        <div className="mb-2">
          {errors.email?.type === "required" && (
            <p className="fw-normal text-danger mb-3 ">
              {errors.email.message}
            </p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="font-medium text-danger mb-3 ">
              {errors.email.message}
            </p>
          )}
        </div>
      

     
        <input
          type="password"
          className="form form-control py-2 pl-3 "
          placeholder="Your Password"
          {...register("password", {
            required: {
              value: true,
              message: "Password must be Required",
            },
            minLength: {
              value: 6,
              message: "Password must be min six character",
            },
          })}
        />

        <div className=" mb-2 ">
          {errors.password?.type === "required" && (
            <p className="font-medium text-danger mb-3 ">
              {errors.password.message}
            </p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="font-medium text-danger">
              {errors.password.message}
            </p>
          )}
        </div>
     
            {signInError}
     <input type="submit" value="Login" className="btn btn-info fw-bold px-4 py-2 mb-5" />
    </form>
            <small className='text-white'>New to Fruit WareHose ?<Link className="text-info" to="/SignUp">Register Now!</Link> </small>


    <div className="text-white my-2">OR</div>
    <button
      className="btn btn-outline  bg-white text-black fw-bold "
      onClick={() => signInWithGoogle()}
    >
      Continue with Google
    </button>
  </div>
);
  
}

export default Login