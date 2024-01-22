import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  function handleSignIn() {}

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="object-cover max-sm:h-dvh max-lg:h-dvh w-dvw"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-image"
        />
      </div>
      <form className="absolute w-4/12 max-lg:w-8/12 max-sm:w-10/12 bg-black bg-opacity-80 px-[5rem] py-12 my-32 mx-auto left-0 right-0 text-white rounded-md">
        <h1 className="text-3xl py-2 font-semibold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="email"
            placeholder="Full Name"
            className=" p-3 my-4 block bg-neutral-700 w-full rounded outline-none"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className=" p-3 my-4 block bg-neutral-700 w-full rounded outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className=" p-3 my-4 block bg-neutral-700 w-full rounded "
        />
        <button
          className="py-2 px-8 my-4 bg-[#E50914] w-full rounded text-xl font-medium"
          onClick={handleSignIn}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex items-center justify-between text-xs text-neutral-400">
          <p>Remember me</p>
          <p>Need Help? </p>
        </div>
        <p className="my-4 text-neutral-500">
          {!isSignInForm ? "Already registered?" : "New to Netflix?"}
          <span
            className="text-white cursor-pointer"
            onClick={() => {
              setIsSignInForm(!isSignInForm);
            }}
          >
            {" "}
            {!isSignInForm ? "Sign In" : "Sign Up"}{" "}
          </span>
          Now
        </p>
      </form>
    </div>
  );
};

export default Login;
