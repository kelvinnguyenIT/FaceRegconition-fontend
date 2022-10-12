import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthUser from "../../../../components/AuthUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function EditForm() {
  const { getUser, http } = AuthUser();
  const user = getUser();
  const [userEdit, setUserEdit] = useState(user);
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
    setUserEdit({
      ...userEdit,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await http.put(`/profile/update`, userEdit);
      if (response.data.status === 200) {
        sessionStorage.removeItem("user");
        sessionStorage.setItem("user", JSON.stringify(response.data.user));
        notifySuccess(response.data.message);
        setTimeout(() => {
          navigate("/user");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      notifyFail("Something went wrong");
    }
  };

  return (
    <>
      <header>
        <div className="pt-10 space-y-4 md-space-y-0 md:space-x-6 flex md:items-end max-w-xl mx-auto -mt-[4.25rem] md:-mt-16 flex-col sm:flex-row font-montserrat">
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
        <h1 className="text-4xl leading-10 ">Edit Your Profile</h1>
        <form onSubmit={handleSubmit}>
          <fieldset className="space-y-2">
            <legend className="sr-only">User</legend>
            <div className="space-y-6">
              <div className="space-y-2">
                <label
                  className="text-xs leading-4 font-medium tracking-wider uppercase text-neutral-quaternary"
                  for="react-aria-8"
                >
                  Name
                </label>
                <input
                  id="react-aria-8"
                  className="bg-[#252d40] py-[9px] px-[13px] w-full text-base leading-5 font-normal text-neutral-secondary placeholder-shown:text-neutral-tertiary border border-[#84838b] rounded-md focus:outline-none focus:ring-2 focus:ring-accentTeal-600 focus:border-accentTeal-600 actually-invalid:border-failure-primary actually-invalid:ring-failure-primary"
                  aria-describedby="react-aria-9"
                  name="name"
                  placeholder="Your name"
                  defaultValue={user.name}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="space-y-5">
            <legend className="sr-only">Birthday</legend>
            <div className="space-y-6">
              <div className="space-y-2">
                <label
                  className="text-xs leading-4 font-medium tracking-wider uppercase text-neutral-quaternary"
                  for="react-aria-2"
                >
                  Birthday
                </label>
                <input
                  id="react-aria-2"
                  className="bg-[#252d40] py-[9px] px-[13px] w-full text-base leading-5 font-normal text-neutral-secondary placeholder-shown:text-neutral-tertiary border border-[#84838b] rounded-md focus:outline-none focus:ring-2 focus:ring-accentTeal-600 focus:border-accentTeal-600 actually-invalid:border-failure-primary actually-invalid:ring-failure-primary"
                  aria-describedby="react-aria-3"
                  list="react-aria-4"
                  name="birthday"
                  type="date"
                  placeholder="Your birthday"
                  required
                  defaultValue={user.birthday}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-xs leading-4 font-medium tracking-wider uppercase text-neutral-quaternary"
                  for="react-aria-8"
                >
                  Position
                </label>
                <input
                  id="react-aria-8"
                  className="bg-[#252d40] py-[9px] px-[13px] w-full text-base leading-5 font-normal text-neutral-secondary placeholder-shown:text-neutral-tertiary border border-[#84838b] rounded-md focus:outline-none focus:ring-2 focus:ring-accentTeal-600 focus:border-accentTeal-600 actually-invalid:border-failure-primary actually-invalid:ring-failure-primary"
                  aria-describedby="react-aria-9"
                  name="position"
                  placeholder="Your position"
                  defaultValue={user.position}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="space-y-5">
            <legend className="sr-only">Department</legend>
            <div className="space-y-6">
              <div className="space-y-2">
                <label
                  className="text-xs leading-4 font-medium tracking-wider uppercase text-neutral-quaternary"
                  for="react-aria-11"
                >
                  Department
                </label>
                <input
                  id="react-aria-11"
                  className="bg-[#252d40] py-[9px] px-[13px] w-full text-base leading-5 font-normal text-neutral-secondary placeholder-shown:text-neutral-tertiary border border-[#84838b] rounded-md focus:outline-none focus:ring-2 focus:ring-accentTeal-600 focus:border-accentTeal-600 actually-invalid:border-failure-primary actually-invalid:ring-failure-primary"
                  aria-describedby="react-aria-12"
                  list="react-aria-13"
                  name="department"
                  placeholder="Your department"
                  required
                  defaultValue={user.department}
                  onChange={(e) => handleChange(e)}
                />
                <p
                  id="react-aria-12"
                  className="text-xs leading-4 text-neutral-quinary"
                >
                  Example: Your Department
                  <br />
                  You can change your new department name if you have been
                  assigned.
                </p>
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
                <span className="font-montserrat">Save Changes</span>
              </button>
            </div>
          </div>
        </form>
      </div>

      <ToastContainer
        className="mt-20 font-montserrat"
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
