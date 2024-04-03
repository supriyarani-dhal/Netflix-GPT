import { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
//import { Link } from "react-router-dom";

const Login = () => {
  const [signin, setSignin] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleSigninPage = () => setSignin(false);

  const handleSignupPage = async () => {
    const msg = validate(email.current.value, password.current.value);
    setErrorMsg(msg);

    // if (msg) {
    //   setSignin(false);
    //   return;
    // } else setSignin(true);

    if (!signin) {
      await createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage);
          // ..
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
          className="bg-black/80 w-1/3 pl-12 h-full absolute mt-32"
        >
          <h1 className="text-4xl my-10 font-bold text-white">
            {signin ? "Sign in" : "Sign up"}
          </h1>
          <input
            className="w-4/5 h-12 bg-inherit rounded-md p-3 mb-10 text-white"
            type="email"
            placeholder="Email or phone number"
            ref={email}
          />
          <input
            className="w-4/5 h-12 bg-inherit rounded-md p-3 mb-10 text-white"
            type="password"
            placeholder="Password"
            ref={password}
          />
          {!signin && (
            <input
              className="w-4/5 h-12 bg-inherit rounded-md p-3 text-white"
              type="password"
              placeholder="Re enter the Password"
            />
          )}
          <p className="text-red-600 text-md">{errorMsg}</p>
          <button
            onClick={handleSignupPage}
            className="mt-10 w-4/5 h-12 text-center bg-red-600 rounded-md text-white font-bold text-xl"
          >
            {signin ? "Sign in" : "Get Started >"}
          </button>
          <p className="cursor-pointer text-gray-300">
            Forget Password?
            <span className="ml-40">Need help?</span>
          </p>

          {signin && (
            <p className="text-gray-300  mt-10 text-lg">
              Don&#39;t have an account?
              <span
                onClick={handleSigninPage}
                className="ml-2 hover:text-red-600 cursor-pointer"
              >
                Sign up now
              </span>
            </p>
          )}
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
