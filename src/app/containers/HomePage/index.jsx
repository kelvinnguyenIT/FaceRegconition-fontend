import { Link } from "react-router-dom";
import "./style.css";

export function HomePage() {
  return (
    <>
      <section>
        <div>
          <div
            id="carouselExampleCaptionsFull"
            class="carousel slide carousel-fade relative h-screen"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner relative w-full overflow-hidden h-screen">
              <div class="carousel-item active relative float-left w-full h-screen bg-no-repeat bg-cover bg-center">
                <video
                  class="min-w-full min-h-full max-w-fit xl:min-w-0 xl:min-h-0"
                  playsInline
                  autoPlay
                  muted
                  loop
                >
                  <source
                    class=""
                    src="https://mdbootstrap.com/img/video/Lines.mp4"
                    type="video/mp4"
                  />
                </video>
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div class="flex justify-center items-center h-full">
                    <div class="text-white text-center px-14 px-md-0">
                      <h2 class="text-4xl font-extrabold mb-4 font-montserrat">
                        <span className="text-[#ff1d53]">READY</span>-TO-
                        <span className="text-[#ff1d53]">USE</span> BIOMETRIC
                        PRODUCT
                      </h2>
                      <h5 class="text-xl font-semibold mb-6 font-montserrat">
                        Facial biometrics for your office's access control
                        system
                      </h5>
                      <div class="md:space-x-2">
                        <Link to="/login">
                          <button
                            class="inline-block px-6 py-3 mb-2 md:mb-0 border-2 border-white text-white font-montserrat font-medium text-sm leading-tight uppercase rounded hover:bg-[#ff1d53] focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            href="#!"
                            role="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Get started
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#171d2c]"></div>

      <div className="bg-[#171d2c] grid grid-cols-5 py-32">
        <div className="col-span-2">
          <figure className="w-full lg:w-full order-first md:order-none">
            <div className="inline-block max-w-full overflow-hidden relative box-border m-0">
              <div className="box-border block max-w-full">
                <img
                  className="max-w-full block m-0 border-none p-0"
                  alt="automate-your-giving"
                  src="https://recfaces.com/wp-content/uploads/2021/03/rf-group-215-en.png"
                />
              </div>
            </div>
          </figure>
        </div>
        <div className="w-full col-span-3 px-20">
          <h2 className="text-white font-bold font-montserrat text-xl">
            BIOMETRIC IDENTIFICATION ECOSYSTEM ID-EXPERT
          </h2>
          <p className="text-[#9197a4] text-base font-montserrat py-10">
            It includes a multimodal Id-Me platform, ready-made biometric
            software products, and a set of services and approaches that allow
            you to implement the necessary identification processes to automate,
            improve efficiency, and launch new innovative services for business.
          </p>
          <h6 className="text-white font-bold font-montserrat text-sm">
            The biometric identity ecosystem includes:
          </h6>
          <div className="grid grid-cols-2 gap-8 py-6">
            <div className="text-white">
              <div className="float-left mr-5 bg-white rounded-full">
                <img
                  src="https://recfaces.com/wp-content/uploads/2020/03/01.svg"
                  className="w-12 p-1"
                  alt=""
                />
              </div>
              <div>
                <p className="text-sm font-montserrat">
                  Licensing and technical support center
                </p>
              </div>
            </div>
            <div className="text-white">
              <div className="float-left mr-5 bg-white rounded-full">
                <img
                  src="https://recfaces.com/wp-content/uploads/2020/03/02.svg"
                  className="w-12 p-1"
                  alt=""
                />
              </div>
              <div>
                <p className="text-sm font-montserrat py-3">Monitoring system</p>
              </div>
            </div>
            <div className="text-white">
              <div className="float-left mr-5 bg-white rounded-full">
                <img
                  src="https://recfaces.com/wp-content/uploads/2020/03/03.svg"
                  className="w-12 p-1"
                  alt=""
                />
              </div>
              <div>
                <p className="text-sm font-montserrat py-3">
                  Integration mechanisms
                </p>
              </div>
            </div>
            <div className="text-white">
              <div className="float-left mr-5 bg-white rounded-full">
                <img
                  src="https://recfaces.com/wp-content/uploads/2020/03/04.svg"
                  className="w-12 p-1"
                  alt=""
                />
              </div>
              <div>
                <p className="text-sm font-montserrat py-3">
                  Live notification services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#252d40]">
        <div class="container mx-auto">
          <section class=" text-gray-800 text-center lg:text-left">
            <div class="block rounded-lg shadow-lg text-white">
              <div class="flex flex-wrap items-center">
                <div class="block w-full lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
                  <img
                    src="https://recfaces.com/wp-content/uploads/2022/01/security-program-planning-5-scaled.jpg"
                    alt="Trendy Pants and Shoes"
                    class="w-full h-[600px] rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                  />
                </div>
                <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                  <div class="px-6 py-12 md:px-12">
                    <h2 class="text-3xl font-bold mb-4 font-montserrat display-5">
                      APPLICATIONS AND FEATURES
                    </h2>
                    <p class="text-[#9197a4] mb-12 font-montserrat">
                      We have divided the product application areas into three
                      categories, but they are very similar: HR, marketing, and
                      security.
                    </p>

                    <div class="grid lg:gap-x-12 md:grid-cols-3 font-montserrat">
                      <div class="mb-12 md:mb-0">
                        <h2 class="text-base font-bold text-[#ff1d53] mb-4 font-montserrat">
                          HUMAN RESOURCES (HR)
                        </h2>
                        <h5 class="text-sm font-medium  mb-0">
                          Employee identification through ACS, cameras, AIS.
                        </h5>
                      </div>

                      <div class="mb-12 md:mb-0">
                        <h2 class="text-base font-bold text-[#ff1d53] mb-4 font-montserrat">
                          MARKETING
                        </h2>
                        <h5 class="text-sm font-medium  mb-0">
                          Marketing research, targeted advertising, cardless
                          loyalty program, targeted sales.
                        </h5>
                      </div>

                      <div class="">
                        <h2 class="text-base font-bold text-[#ff1d53] mb-4 font-montserrat">
                          SECURITY
                        </h2>
                        <h5 class="text-sm font-medium  mb-0">
                          Provide security by using video analytics and access
                          control systems.
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-[#171d2c] py-20">
        <div class="container px-6 mx-auto">
          <section class="text-gray-800">
            <h2 class="text-3xl font-bold mb-3 text-center text-white font-montserrat">
              INDUSTRY SOLUTIONS
            </h2>
            <p class="text-base mb-14 text-center text-[#9197a4] font-montserrat">
              Technological capabilities of biometric software products <br />{" "}
              included in the multimodal Id-Me platform implement a wide range
              of industry business tasks.
            </p>

            <div class="grid lg:grid-cols-3 gap-6">
              <div
                class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover hover:scale-105 hover:transition-transform"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                <img
                  src="https://www.wework.com/ideas/wp-content/uploads/sites/4/2017/06/Web_150DPI-20190927_10th_Floor_Conference_Room_2_v1.jpg"
                  class="w-full h-full brightness-75 transition duration-300 ease-linear align-middle"
                />
                <a href="#">
                  <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                    <div class="flex justify-start items-end h-full">
                      <h5 class="text-xl font-bold text-white m-6 font-montserrat">
                        Company
                      </h5>
                    </div>
                  </div>
                </a>
              </div>

              <div
                class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover hover:scale-105 hover:transition-transform"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                <img
                  src="https://www.cleanenergyfuels.com/assets/images/solutions/production-plant-bg.jpg"
                  class="w-full h-full brightness-75 transition duration-300 ease-linear align-middle"
                />
                <a href="#">
                  <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                    <div class="flex justify-start items-end h-full">
                      <h5 class="text-xl font-bold text-white m-6 font-montserrat">
                        Industrial Facilities
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
              <div
                class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover hover:scale-105 hover:transition-transform"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                <img
                  src="https://www.fmchealth.org/app/uploads/2019/10/DSC_7399-1200x800REV-1064x529.jpg"
                  class="w-full h-full brightness-75 transition duration-300 ease-linear align-middle"
                />
                <a href="#">
                  <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                    <div class="flex justify-start items-end h-full">
                      <h5 class="text-xl font-bold text-white m-6 font-montserrat">
                        Medical Center
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
              <div
                class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover hover:scale-105 hover:transition-transform"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                <img
                  src="https://tamlong.com.vn/wp-content/uploads/tim-hieu-tat-tan-tat-ve-business-center-la-gi-2.jpg"
                  class="w-full h-full brightness-75 transition duration-300 ease-linear align-middle"
                />
                <a href="#">
                  <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                    <div class="flex justify-start items-end h-full">
                      <h5 class="text-xl font-bold text-white m-6 font-montserrat">
                        Business Center
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
              <div
                class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover hover:scale-105 hover:transition-transform"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                <img
                  src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2017/09/college-1.jpg"
                  class="w-full h-full brightness-75 transition duration-300 ease-linear align-middle"
                />
                <a href="#">
                  <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                    <div class="flex justify-start items-end h-full">
                      <h5 class="text-xl font-bold text-white m-6 font-montserrat">
                        Education Institution
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
              <div
                class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover hover:scale-105 hover:transition-transform"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                <img
                  src="https://tindung.com.vn/wp-content/uploads/2021/10/1200px-Bank_of_Montreal_1_db.jpg"
                  class="w-full h-full brightness-75 transition duration-300 ease-linear align-middle"
                />
                <a href="#">
                  <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                    <div class="flex justify-start items-end h-full">
                      <h5 class="text-xl font-bold text-white m-6 font-montserrat">
                        Bank
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-[#252d40]">
        <section className="px-5 py-32 mx-auto max-w-screen-xl md:grid grid-cols-3 md:px-20 gap-8">
          <div className="w-full col-span-2">
            <img
              src="https://recfaces.com/wp-content/uploads/2021/03/rf-group-217-en.png"
              className="w-full"
              alt=""
            />
          </div>
          <div>
            <ul className="lg:col-start-8 col-span-6 lg:col-span-4 space-y-8 mt-12 md:mt-0">
              <li>
                <section className="space-y-2">
                  <header className="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 flex-shrink-0"
                    >
                      <path d="M5 13L9 17L19 7" stroke="#85CAC6"></path>
                    </svg>
                    <h2 className="text-lg font-medium text-white font-montserrat">
                      Full Convolution Neural Network
                    </h2>
                  </header>
                  <p className="text-[#9197a4] ml-9 font-montserrat">
                    Neural network that only performs convolution (and
                    subsampling or upsampling) operations
                  </p>
                </section>
              </li>
              <li>
                <section className="space-y-2">
                  <header className="flex gap-x-3">
                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 flex-shrink-0"
                    >
                      <path d="M5 13L9 17L19 7" stroke="#85CAC6"></path>
                    </svg>
                    <h2 className="text-lg font-medium text-white font-montserrat">
                      Convolutional Neural Network
                    </h2>
                  </header>
                  <p className="text-[#9197a4] ml-9 font-montserrat">
                    A class of artificial neural network (ANN), most commonly
                    applied to analyze visual imagery
                  </p>
                </section>
              </li>
              <li>
                <section className="space-y-2">
                  <header className="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 flex-shrink-0"
                    >
                      <path d="M5 13L9 17L19 7" stroke="#85CAC6"></path>
                    </svg>
                    <h2 className="text-lg font-medium text-white font-montserrat">
                      Optical Character Recognition
                    </h2>
                  </header>
                  <p className="text-[#9197a4] ml-9 text-base font-montserrat">
                    A business solution for automating data extraction from
                    printed or written text from a scanned document or image
                    file and then converting the text into a machine-readable
                    form to be used for data processing like editing or
                    searching.
                  </p>
                </section>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
