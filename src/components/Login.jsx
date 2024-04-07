/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
//import { Link } from "react-router-dom";

const Login = () => {
  const [signin, setSignin] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSigninForm = () => setSignin(!signin);

  const handleButton = () => {
    const msg = validate(email.current.value, password.current.value);
    setErrorMsg(msg);

    if (msg) return;

    if (!signin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
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
          setErrorMsg(errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_medium.jpg" />
      </div>
      <div className="flex justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black/80 w-1/4 px-9 h-4/5 absolute mt-32"
        >
          <h1 className="text-3xl my-8 font-bold text-white">
            {signin ? "Sign in" : "Sign up"}
          </h1>
          {!signin && (
            <input
              className="w-full h-12 bg-inherit rounded-md mb-7 p-2 text-white"
              type="text"
              placeholder="Name"
              ref={name}
              required
            />
          )}
          <input
            className="w-full h-12 bg-inherit rounded-md p-2 mb-7 text-white"
            type="email"
            placeholder="Email or phone number"
            required
            ref={email}
          />
          <input
            className="w-full h-12 bg-inherit rounded-md p-3 mb-7 text-white"
            type="password"
            placeholder="Password"
            required
            ref={password}
          />
          {!signin && (
            <input
              className="w-full h-12 bg-inherit rounded-md p-3 text-white"
              type="password"
              placeholder="Re enter the Password"
              required
            />
          )}
          <p className="text-red-600 text-md">{errorMsg}</p>
          <button
            onClick={handleButton}
            className="mt-7 w-full h-12 text-center bg-red-600 rounded-md text-white font-bold text-xl"
          >
            {signin ? "Sign in" : "Get Started >"}
          </button>
          <p className="cursor-pointer text-gray-300">
            Forget Password?
            <span className="ml-40">Need help?</span>
          </p>

          <p className="text-gray-300  mt-4 text-lg">
            {signin ? "Don't have an account?" : "Already have an account?"}
            <span
              onClick={toggleSigninForm}
              className="ml-2 hover:text-red-600 cursor-pointer"
            >
              {signin ? "Sign up now" : "Sign in here"}
            </span>
          </p>

          <div className="text-white text-lg">
            <input className="w-6 bg-red-600 cursor-pointer" type="checkbox" />
            Remember me
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
