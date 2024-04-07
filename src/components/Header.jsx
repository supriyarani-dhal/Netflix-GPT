/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { LOGO_URL, USER_AVTAR_URL } from "../utils/constants";

const Header = () => {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe this events when our component is unmounted
    return unsubscribe();
  }, []);

  const handleToggleMenu = () => setDisplay(true);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="flex justify-between px-16 absolute bg-gradient-to-b w-full h-16 from-black z-10">
      <div>
        <img className="w-40" src={LOGO_URL} alt="Logo" />
      </div>
      {user && (
        <div className="pt-4 w-1/6 text-white text-lg">
          <div className=" flex justify-between">
            <i className="fa-solid fa-magnifying-glass pt-2"></i>
            <span>Children</span>
            <i className="fa-regular fa-bell pt-2"></i>
            <div>
              <button className="flex">
                <img
                  className="w-9 h-9 rounded-md"
                  src={USER_AVTAR_URL}
                  alt="user login logo"
                />
                <span className=" ml-2 text-lg" onMouseOver={handleToggleMenu}>
                  {display ? (
                    <i className="fa-solid fa-caret-up"></i>
                  ) : (
                    <i className="fa-solid fa-caret-down"></i>
                  )}
                </span>
              </button>
            </div>
          </div>
          {display && (
            <ul
              className="w-40 bg-black/80 text-base p-3 ml-20 mt-4"
              onMouseOver={handleToggleMenu}
              onMouseOut={() => setDisplay(false)}
            >
              <li className="mb-6">Manage Profiles</li>
              <li className="mb-6">Account</li>
              <li className="mb-6">Help Center</li>
              <li className="mb-6" onClick={handleSignout}>
                Sign out of Netflix
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
