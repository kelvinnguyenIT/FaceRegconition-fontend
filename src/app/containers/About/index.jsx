import { Link } from "react-router-dom";

export function About() {

  return (
    <>
      <div className="font-montserrat">
        <div className="relative w-full overflow-hidden">
          <img
            src="/assets/images/about_us.png"
            alt="Avatar"
            className="object-cover h-screen w-full sm:w-full sm:h-[800px] lg:h-full"
          />
          <div className="absolute w-full top-0 inset-x-0 text-center font-medium text-3xl py-20 sm:text-5xl lg:text-5xl grid sm:grid-cols-5 lg:grid-cols-4">
            <div></div>
            <div className="sm:col-span-3 lg:col-span-2">
              <p>Our mission is to help people be more generous, more often</p>
            </div>
            <div></div>
          </div>
        </div>

        <div className="bg-[#252d40] px-10 py-10 lg:px-20 lg:py-20">
          <div className="w-full lg:grid lg:grid-cols-4">
            <div className="py-3">
              <p className="text-white text-base font-medium">
              THE DAFFY PLEDGE

              </p>
            </div>
            <div className="w-full lg:grid col-span-3">
              <div>
                <p className="text-[#85cac6] font-extrabold text-[28px] sm:text-7xl">
                Everyone should set something aside for those less fortunate than themselves
                </p>
              </div>
              <div className="py-10 sm:py-20">
                <img
                  src="/assets/images/about_us_contribution.png"
                  alt="about_us_contribution"
                />
              </div>
            </div>
          </div>
          <div className="w-full sm:grid grid-cols-3 gap-5">
            <div className="mt-10">
              <h2 className="text-white font-medium text-2xl">
              The Problem
              </h2>
              <p className="text-[#999fa2] mt-3">
              People want to give to charities and causes they care about, but often wait until asked to give or find the process harder than it should be.
              </p>
            </div>
            <div className="mt-10">
              <h2 className="text-white font-medium text-2xl">
              The Solution
              </h2>
              <p className="text-[#999fa2] mt-3">
              Like many financial priorities in life, automation can solve the problem by changing our default behavior from doing nothing to doing something.
              </p>
            </div>
            <div className="mt-10">
              <h2 className="text-white font-medium text-2xl">
              The Pledge
              </h2>
              <p className="text-[#999fa2] mt-3">
              Daffy is a not-for-profit community of members who have the commitment to put money aside for those less fortunate than themselves.
              </p>
            </div>
          </div>

          <div className="w-full mt-16 sm:grid grid-cols-3 gap-3">
            <div></div>
            <div className="text-center">
              <button className="w-full bg-white font-medium text-lg p-2 rounded-full lg:w-1/2">
                Join Us
              </button>
            </div>
            <div></div>
          </div>
        </div>

        <div className="bg-[#1f2638] w-full px-10 py-20 flex justify-center ">
          <div className="w-full sm:w-[600px]">
            <div className="text-center">
              <p className="text-white font-medium text-2xl sm:text-3xl">
              Support Over 1.5 Million Charities
              </p>
              <p className="text-[#999fa2] font-normal text-base mt-3 sm:text-xl">
              Find organizations and causes you care about and recommend donations to over 1.5 million charities in the US, right from your iPhone. Never lose a donation receipt again.
              </p>
            </div>
            <div className="mt-10 grid grid-rows-5 gap-3 sm:grid auto-cols-max grid-flow-col justify-center sm:grid-rows-2">
              <label className="bg-[#a1b0e0] p-3 rounded-full text-center font-medium">
              Justice

              </label>
              <label className="bg-[#fec398] p-3 rounded-full text-center font-medium">
              Food Security

              </label>
              <label className="bg-[#a4dd9f] p-3 rounded-full text-center font-medium">
              Environment
              </label>
              <label className="bg-[#a0c4de] p-3 rounded-full text-center font-medium">
              Research
              </label>
              <label className="bg-[#c6adf8] p-3 rounded-full text-center font-medium">
              Education
              </label>
              <label className="bg-[#f3e9aa] p-3 rounded-full text-center font-medium">
              Religion
              </label>
              <label className="bg-[#d1ae94] p-3 rounded-full text-center font-medium">
              Animals
              </label>
              <label className="bg-[#ffb2e0] p-3 rounded-full text-center font-medium">
              Human Rights

              </label>
              <label className="bg-[#f39e9e] p-3 rounded-full text-center font-medium">
              Health Care

              </label>
              <label className="bg-[#c8d18e] p-3 rounded-full text-center font-medium">
              Culture
              </label>
            </div>
          </div>
        </div>

        <div className="bg-[#252d40] w-full py-20 px-10 lg:px-40">
          <div className="w-full justify-center flex">
            <div className="w-full lg:w-1/2 text-center ">
              <h2 className="font-medium text-white text-2xl sm:text-3xl">
              Our Investors
              </h2>
              <p className="font-normal text-base sm:text-xl mt-3 text-[#999fa2]">
              We are fortunate to have some of the top investors in Silicon Valley to support us and our mission.
              </p>
            </div>
          </div>
          <div className="w-full sm:grid sm:grid-cols-3 lg:gap-16 py-10">
            <div className="text-center px-10 py-5 sm:px-5 lg:px-0">
              <img
                src="/assets/images/about_us_investor1.png"
                alt="about_us_investor"
                className="rounded-lg"
              />
              <p className="text-white font-medium text-sm mt-5">
                Rabbit Capital
              </p>
            </div>
            <div className="text-center px-10 py-5 sm:px-5 lg:px-0">
              <img
                src="/assets/images/about_us_investor2.png"
                alt="about_us_investor"
                className="rounded-lg"
              />
              <p className="text-white font-medium text-sm mt-5">XYZ Capital</p>
            </div>
            <div className="text-center px-10 py-5 sm:px-5 lg:px-0">
              <img
                src="/assets/images/about_us_investor3.png"
                alt="about_us_investor"
                className="rounded-lg"
              />
              <p className="text-white font-medium text-sm mt-5">Coinbase</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16 py-4 sm:grid-cols-4 lg:grid-cols-6">
            <div className="text-center">
              <img
                src="/assets/images/about_us_avatar_investor.jpeg"
                alt="about_us_avatar_investor"
                className="rounded-full"
              />
              <p className="text-white font-medium text-sm mt-5">Aaron Levie</p>
              <p className="text-[#85cac6] font-medium text-sm ">Doorvest</p>
            </div>
            <div className="text-center">
              <img
                src="/assets/images/about_us_avatar_investor.jpeg"
                alt="about_us_avatar_investor"
                className="rounded-full"
              />
              <p className="text-white font-medium text-sm mt-5">Aaron Levie</p>
              <p className="text-[#85cac6] font-medium text-sm ">Doorvest</p>
            </div>
            <div className="text-center">
              <img
                src="/assets/images/about_us_avatar_investor.jpeg"
                alt="about_us_avatar_investor"
                className="rounded-full"
              />
              <p className="text-white font-medium text-sm mt-5">Aaron Levie</p>
              <p className="text-[#85cac6] font-medium text-sm ">Doorvest</p>
            </div>
            <div className="text-center">
              <img
                src="/assets/images/about_us_avatar_investor.jpeg"
                alt="about_us_avatar_investor"
                className="rounded-full"
              />
              <p className="text-white font-medium text-sm mt-5">Aaron Levie</p>
              <p className="text-[#85cac6] font-medium text-sm ">Doorvest</p>
            </div>
            <div className="text-center">
              <img
                src="/assets/images/about_us_avatar_investor.jpeg"
                alt="about_us_avatar_investor"
                className="rounded-full"
              />
              <p className="text-white font-medium text-sm mt-5">Aaron Levie</p>
              <p className="text-[#85cac6] font-medium text-sm ">Doorvest</p>
            </div>
            <div className="text-center">
              <img
                src="/assets/images/about_us_avatar_investor.jpeg"
                alt="about_us_avatar_investor"
                className="rounded-full"
              />
              <p className="text-white font-medium text-sm mt-5">Aaron Levie</p>
              <p className="text-[#85cac6] font-medium text-sm ">Doorvest</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1f2638] w-full py-20 px-10 lg:px-40">
          <div className="w-full justify-center flex">
            <div className="w-full lg:w-1/2 text-center ">
              <h2 className="font-medium text-white text-2xl sm:text-3xl">
              Our Team
              </h2>
              <p className="font-normal text-base mt-3 text-[#999fa2] sm:text-xl">
              We believe that everyone should put something aside for those less fortunate than themselves.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16 py-12 sm:grid-cols-4 lg:grid-cols-6 ">
            <div className="text-center">
              <img
                src="/assets/images/about_us_avatar_investor.jpeg"
                alt="about_us_avatar_investor"
                className="rounded-full"
              />
              <p className="text-white font-medium text-sm mt-5">Aaron Levie</p>
              <p className="text-[#85cac6] font-medium text-sm ">Doorvest</p>
            </div>
            <div className="text-center">
              <img
                src="/assets/images/about_us_avatar_investor.jpeg"
                alt="about_us_avatar_investor"
                className="rounded-full"
              />
              <p className="text-white font-medium text-sm mt-5">Aaron Levie</p>
              <p className="text-[#85cac6] font-medium text-sm ">Doorvest</p>
            </div>
            <div className="text-center">
              <img
                src="/assets/images/about_us_avatar_investor.jpeg"
                alt="about_us_avatar_investor"
                className="rounded-full"
              />
              <p className="text-white font-medium text-sm mt-5">Aaron Levie</p>
              <p className="text-[#85cac6] font-medium text-sm ">Doorvest</p>
            </div>
            <div className="text-center">
              <img
                src="/assets/images/about_us_avatar_investor.jpeg"
                alt="about_us_avatar_investor"
                className="rounded-full"
              />
              <p className="text-white font-medium text-sm mt-5">Aaron Levie</p>
              <p className="text-[#85cac6] font-medium text-sm ">Doorvest</p>
            </div>
            <div className="text-center">
              <img
                src="/assets/images/about_us_avatar_investor.jpeg"
                alt="about_us_avatar_investor"
                className="rounded-full"
              />
              <p className="text-white font-medium text-sm mt-5">Aaron Levie</p>
              <p className="text-[#85cac6] font-medium text-sm ">Doorvest</p>
            </div>
            <div className="text-center">
              <img
                src="/assets/images/about_us_avatar_investor.jpeg"
                alt="about_us_avatar_investor"
                className="rounded-full"
              />
              <p className="text-white font-medium text-sm mt-5">Aaron Levie</p>
              <p className="text-[#85cac6] font-medium text-sm ">Doorvest</p>
            </div>
          </div>

          <div className="w-full text-center">
            <p className="text-[#999fa2]">
            Want to be part of Daffy?
              <Link to="/" className="text-[#85cac6] underline font-medium">
                {" "}
                
Join the team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
