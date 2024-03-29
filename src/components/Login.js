import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  function handleSignIn() {
    setErrorMessage(
      checkValidData(
        isSignInForm,
        name,
        email.current.value,
        password.current.value
      )
    );
    if (errorMessage) return;

    // Sign Up
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { email, uid, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  email: email,
                  uid: uid,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {});
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className={
            "" + !isSignInForm
              ? "object-cover md:h-vh h-screen w-screen "
              : " object-cover h-screen w-screen "
          }
          src={BG_URL}
          alt="bg-image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className={
          "absolute lg:w-4/12 w-9/12  bg-black bg-opacity-80 px-[5rem] py-12 my-32 mx-auto left-0 right-0 text-white rounded-md"
        }
      >
        <h1 className="text-3xl py-2 font-semibold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className=" p-3 my-4 block bg-neutral-700 w-full rounded outline-none"
          />
        )}
        <input
          autoComplete="username"
          ref={email}
          type="email"
          placeholder="Email"
          className=" p-3 my-4 block bg-neutral-700 w-full rounded outline-none"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          className=" p-3 my-4 block bg-neutral-700 w-full rounded outline-none"
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
