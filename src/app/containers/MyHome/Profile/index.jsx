import { Outlet} from "react-router-dom";

export function Profile() {
  return (
    <div className="bg-[#191f30] pt-28 pb-16 ">
      <div className="max-w-3xl mx-auto bg-[#1f2638] text-white rounded-xl mt-16 pb-5">
    <Outlet />
    </div>
    </div>
  );
}
