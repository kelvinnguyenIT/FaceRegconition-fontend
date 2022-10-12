import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthUser from "../../../../components/AuthUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ModifyPassword() {
  const { getUser, http } = AuthUser();
  const user = getUser();
  const [newPassword, setNewPassword] = useState({});
  const navigate = useNavigate();

  const notifySuccess = (message) =>
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

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

  const handleChange = (e) => {
    setNewPassword({
      ...newPassword,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (newPassword.newPassword === newPassword.confirmPassword) {
        const response = await http.put(
          `/profile/change-password`,
          newPassword
        );

        if (response.data.status === 200) {
          notifySuccess(response.data.message);
          setTimeout(() => {
            navigate("/user");
          }, 2000);
        }
      } else {
        notifyFail("Confirm Password Not Matched");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <header>
        <div className="pt-10 font-montserrat space-y-4 md-space-y-0 md:space-x-6 flex md:items-end max-w-xl mx-auto -mt-[4.25rem] md:-mt-16 flex-col sm:flex-row">
          <img
            src="https://static.daffy.org/avatars/avatar-placeholder.png"
            alt=""
            className="w-24 h-24 ml-4 md:ml-0 md:w-24 md:h-24 ring-4 ring-white rounded-full"
          />
          <div className="space-y-2 md:mb-8  md:px-0">
            <div className="flex items-start justify-between">
              <h1
                className="text-lg sm:text-xl md:text-3xl md:leading-9 font-semibold text-white"
                id="react-aria-1"
              >
                {user.name}
              </h1>
            </div>
            <p className="text-xs leading-4 font-medium tracking-wider uppercase text-[#84838b]">
              {user.username}
            </p>
          </div>
        </div>
      </header>
      <div className="max-w-xl mx-auto mt-10 font-montserrat">
        <h1 className="text-4xl leading-10 ">Change Your Password</h1>
        <form onSubmit={handleSubmit}>
          <fieldset className="space-y-2">
            <legend className="sr-only">User</legend>
            <div className="space-y-6">
              <div className="space-y-2">
                <label
                  className="text-xs leading-4 font-medium tracking-wider uppercase text-neutral-quaternary"
                  for="react-aria-2"
                >
                  New Password
                </label>
                <input
                  id="react-aria-2"
                  className="bg-[#252d40] py-[9px] px-[13px] w-full text-base leading-5 font-normal text-neutral-secondary placeholder-shown:text-neutral-tertiary border border-[#84838b] rounded-md focus:outline-none focus:ring-2 focus:ring-accentTeal-600 focus:border-accentTeal-600 actually-invalid:border-failure-primary actually-invalid:ring-failure-primary"
                  aria-describedby="react-aria-3"
                  list="react-aria-4"
                  name="newPassword"
                  required
                  placeholder="Enter new password"
                  enterkeyhint="next"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-xs leading-4 font-medium tracking-wider uppercase text-neutral-quaternary"
                  for="react-aria-8"
                >
                  Confirm New Password
                </label>
                <input
                  id="react-aria-8"
                  className="bg-[#252d40] py-[9px] px-[13px] w-full text-base leading-5 font-normal text-neutral-secondary placeholder-shown:text-neutral-tertiary border border-[#84838b] rounded-md focus:outline-none focus:ring-2 focus:ring-accentTeal-600 focus:border-accentTeal-600 actually-invalid:border-failure-primary actually-invalid:ring-failure-primary"
                  aria-describedby="react-aria-9"
                  name="confirmPassword"
                  placeholder="Enter new password twice"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </fieldset>

          <div className="flex">
            <div className="w-full sm:max-w-40">
              <button
                type="submit"
                name="action"
                value="edit-profile"
                className="relative float-right mt-8 rounded-full leading-5 font-medium text-center select-none border px-6 pt-2.5 pb-3 text-base border-[#ff1d53] bg-[#ff1d53] text-white   w-1/3  block"
              >
                <span className="">Save Changes</span>
              </button>
            </div>
          </div>
        </form>
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
    </>
  );
}
