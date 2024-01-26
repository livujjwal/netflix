import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGAUGE } from "../utils/constants";
import { toggleShowGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user= useSelector((store) => store?.user);
  const showGptSerach = useSelector((store) => store?.gpt?.showGptSearch); ;
  console.log(showGptSerach);
  function handleshowGtpSerach() {
    dispatch(toggleShowGptSearch());
  }
  function handelLangChange(e) {
    dispatch(changeLanguage(e.target.value));
  }

  function handleSignOut() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid, displayName, photoURL } = user;
        dispatch(
          addUser({
            email: email,
            uid: uid,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //Unsubscribe when component un mount
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-6 py-1 bg-gradient-to-b from-black w-full z-20 flex justify-between">
      <img className="w-52" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex p-2 items-center gap-4">
          {showGptSerach && (
            <select
              className="bg-transparent p-2 text-[#E50914] text-lg font-semibold"
              onChange={handelLangChange}
            >
              {SUPPORTED_LANGAUGE.map((lang) => (
                <option
                  className="bg-white p-1"
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="font-bold text-[#E50914] p-2 rounded-md text-xl"
            onClick={handleshowGtpSerach}
          >
           {showGptSerach ? "Homepage" : "GPT Serach"}
          </button>
          <img
            className="w-8 h-8 object-contain rounded"
            alt="user-logo"
            src={user?.photoURL}
          />
          <button
            className="font-bold text-[#E50914] p-2 rounded-md text-xl"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
