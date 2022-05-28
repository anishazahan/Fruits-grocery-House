import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const SignUP = () => {
  const [signInWithGoogle, googleuser, googleloading, googleError] =
    useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, profileError] = useUpdateProfile(auth);

  const navigate = useNavigate();
  let signInError;

  if (error || googleError || profileError) {
    signInError = (
      <p className="text-danger fw-bold mb-2">
        {error?.message || googleError?.message || profileError?.message}
      </p>
    );
  }

  if (loading || googleloading || updating) {
    return (
      <div className="spinner-border container mx-auto mt-5">
      
    </div>
    );
  }

  if (user || googleuser) {
    console.log(user || googleuser);
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log("update");
    navigate("/contact");
  };

  return (
    <div className="background rounded mx-auto text-white w-50  py-5 my-5 px-5">
      <div className="mx-auto">
        <h3 className="mb-4 text-white fw-bold fs-3 my-3">Please Register!!</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="form form-control fw-normal mb-2"
            placeholder="Your Name"
            {...register("name", {
              required: {
                value: true,
                message: "Name must be Required",
              },
            })}
          />
          <div className="mb-2">
            {errors.name?.type === "required" && (
              <p className="fw-bold text-danger mb-2 ">{errors.name.message}</p>
            )}
          </div>

          <input
            type="email"
            className="form form-control"
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
              <p className="fw-normal text-danger mb-2 ">
                {errors.email.message}
              </p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="fw-normal text-danger mb-2 ">
                {errors.email.message}
              </p>
            )}
          </div>

          <input
            type="password"
            className="form form-control"
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
              <p className="fw-normal text-danger mb-2 ">
                {errors.password.message}
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="fw-normal text-danger mb-2 ">
                {errors.password.message}
              </p>
            )}
          </div>

          {signInError}
          <input
            type="submit"
            value="Resister"
            className=" btn btn-info text-dark  fw-bold px-2 mb-4"
          />
        </form>
        <small>
          Already Register!!
          <Link className="text-info px-2" to="/login">
            Please Login!
          </Link>{" "}
        </small>

        <div className="divider my-2">OR</div>
        <button
          className="btn btn-outline  bg-white text-black fw-bold "
          onClick={() => signInWithGoogle()}
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignUP;
