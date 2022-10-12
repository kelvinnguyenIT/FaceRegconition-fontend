import { useState } from "react";
import AuthUser from "../../components/AuthUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { http, setToken } = AuthUser();

  const notifyFail = (message) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleLogin = async (e) => {
    e.preventDefault();
    const payload = {
      username: username,
      password: password,
    };

    try {
      const response = await http.post(`/login`, payload);
      setToken(response.data.user, response.data.access_token);
    } catch (error) {
      console.log(error);
      notifyFail("Username or Password fail");
    }
  };

  return (
    <div className="w-full min-h-screen fixed bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="flex flex-col justify-center items-center mt-16 ">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm text-left w-1/2">
          <h1 className="text-center font-bold font-montserrat text-xl mt-2">
            Welcome
          </h1>
          <p className="text-center mt-2 font-montserrat">
            Login to Face Recognition
          </p>
          <form>
            <div className="form-group mb-6 mt-6 font-montserrat">
              <label className="form-label inline-block mb-2 text-gray-700">
                Username
              </label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-1 focus:border-[#ff1d53] focus:outline-dotted "
                id="username"
                aria-describedby="username"
                name="username"
                placeholder="Enter username"
              />
              <small
                id="emailHelp"
                className="block mt-1 text-xs text-gray-600"
              >
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group mb-4 font-montserrat">
              <label className="form-label inline-block mb-2 text-gray-700">
                Password
              </label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-[#ff1d53] focus:outline-dotted"
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <p
              id="emailHelp"
              className="text-sm font-montserrat font-bold text-gray-600"
            >
              Forgot password?
            </p>
            <div
              className="justify-center
      items-center
      flex
      flex-col"
            >
              <button
                className="
              w-full
              h-11
      px-6
      py-2.5
      mt-5
      mb-5
      bg-[#ff1d53]
      text-white
      font-medium
      text-base
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-[#e91a4a] hover:shadow-lg
      focus:bg-[#e91a4a] focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-[#e91a4a] active:shadow-lg
      transition
      duration-150
      ease-in-out
      font-montserrat"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>

            <p id="emailHelp" className="text-sm font-montserrat text-gray-600">
              You don't have a account?{" "}
              <span className="font-baloo font-bold">Sign up</span>
            </p>
          </form>
        </div>
      </div>

      <ToastContainer
        className="mt-20"
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
