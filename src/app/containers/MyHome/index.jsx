import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthUser from "../../components/AuthUser";

export function MyHome() {
  const navigate = useNavigate();
  const { getUser, http } = AuthUser();
  const user = getUser();
  const [recognitionList, setRecognitionList] = useState([]);
  const [recognitionFilterList, setRecognitionFilterList] = useState([]);

  const handleFetchData = async () => {
    const response = await http.get("/history-recognition");
    setRecognitionList(response.data);
    setRecognitionFilterList(response.data);
  };

  useEffect(() => {
    try {
      handleFetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSearch = (e) => {
    const filterData = recognitionList.filter((item) =>
      item.date.includes(e.target.value)
    );
    setRecognitionFilterList(filterData);
  };
  return (
    <div className="grid grid-cols-4 px-12 pt-36 h-screen bg-[#191f30]">
      <div className="text-white p-8">
        <div className="hidden md:block text-white text-sm font-montserrat">
          <div className="w-full float-left">
            <img
              src="https://static.daffy.org/avatars/avatar-placeholder.png"
              alt="Avatar User"
              className="w-1/4 md:w-20 lg:w-14 lg:h-14 float-left"
            />
            <div className="pl-20">
              <p className="text-lg mt-2">{user.name}</p>
              <p className=" text-[#687382]">{user.username}</p>
            </div>
          </div>
          <div className="mt-6 float-left font-montserrat">
            <p className="mt-2 font-montserrat font-bold text-sm ">ABOUT JOB</p>
            <p className="mt-2 text-[#687382]">
              Department: <span>{user.department}</span>
            </p>
            <p className="mt-2 text-[#687382]">
              Position: <span>{user.position}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <div class="flex ">
          <div class="mb-3 xl:w-80">
            <input
              type="search"
              class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        bg-[#252d40]
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        font-montserrat
        text-white
         focus:bg-[#2a3349] focus:outline-none
      "
              onChange={handleSearch}
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full bg-[#1f2638] rounded-base text-white">
                  <thead className=" border-b font-montserrat">
                    <tr>
                      <th
                        scope="col"
                        className="text-base font-medium  px-6 py-4 text-left"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-base font-medium  px-6 py-4 text-left"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="text-base font-medium  px-6 py-4 text-left"
                      >
                        Time
                      </th>
                      <th
                        scope="col"
                        className="text-base font-medium  px-6 py-4 text-left"
                      >
                        Period
                      </th>
                    </tr>
                  </thead>
                  {recognitionFilterList.length > 0 ? (
                    <tbody className="font-montserrat">
                      {recognitionFilterList.map((item, index) => (
                        <tr
                          key={index}
                          className="border-b transition duration-300 ease-in-out hover:bg-[#252d40]"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                            {index + 1}
                          </td>
                          <td className="text-base  font-light px-6 py-4 whitespace-nowrap">
                            {item.date}
                          </td>
                          <td className="text-base  font-light px-6 py-4 whitespace-nowrap">
                            {item.time}
                          </td>
                          <td className="text-base font-light px-6 py-4 whitespace-nowrap">
                            {item.period}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  ) : (
                    <p className="p-4 font-montserrat text-base">
                      No results were found
                    </p>
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
