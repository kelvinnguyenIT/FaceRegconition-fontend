import { Link } from 'react-router-dom'

export function About() {
  return (
    <>
      <div className='font-montserrat'>
        <div className='relative w-full overflow-hidden'>
          <img
            src='/assets/images/banner-about.jpg'
            alt='Avatar'
            className='object-cover h-screen w-full sm:w-full sm:h-[800px] lg:h-full'
          />
          <div className='absolute w-full top-0 inset-x-0 text-center font-medium text-3xl py-20 sm:text-5xl lg:text-5xl grid sm:grid-cols-5 lg:grid-cols-4 lg:gap-16 lg:content-between'>
            <div></div>
            <div className='sm:col-span-3 lg:col-span-3 lg:px-16 lg:py-12'>
              <p className='text-white text-[40px] font-semibold mb-6 font-montserrat text-left'>
                We’ve turned smart and accurate facial recognition technology
                into simple and convenient solutions that are applicable here
                and now.
              </p>
            </div>
          </div>
        </div>

        <div className='bg-[#252d40] px-10 py-10 lg:px-20 lg:py-20'>
          <div className='w-full lg:grid lg:grid-cols-4'>
            <div className='py-3'>
              <p className='text-white text-base font-medium'>
                FACE RECOGNITION
              </p>
            </div>
            <div className='w-full lg:grid col-span-3'>
              <div>
                <p className='text-[#85cac6] font-extrabold text-[28px] sm:text-7xl'>
                  Our solutions help to manage business tasks faster and more
                  efficiently
                </p>
              </div>
              <div className='py-10 sm:py-20'>
                <img
                  src='/assets/images/content-about.png'
                  alt='about_us_contribution'
                />
              </div>
            </div>
          </div>
          <div className='w-full sm:grid grid-cols-3 gap-5'>
            <div className='mt-10'>
              <h2 className='text-white font-medium text-2xl'>The Problem</h2>
              <p className='text-[#999fa2] mt-3'>
                The enterprise want to find out a system to manage their
                business besides manage attendance their employee
              </p>
            </div>
            <div className='mt-10'>
              <h2 className='text-white font-medium text-2xl'>The Solution</h2>
              <p className='text-[#999fa2] mt-3'>
                Our solutions help to manage business tasks faster and more
                efficiently with a user-friendly interface for facial
                recognition technology.
              </p>
            </div>
            <div className='mt-10'>
              <h2 className='text-white font-medium text-2xl'>The Resolve</h2>
              <p className='text-[#999fa2] mt-3'>
                Face recognition provide for enterprise a system to manage their
                employee combine attendance through the face recognition sytem
              </p>
            </div>
          </div>

          <div className='w-full mt-16 sm:grid grid-cols-3 gap-3'>
            <div></div>
            <div className='text-center'>
              <button className='w-full bg-white font-medium text-lg p-2 rounded-full lg:w-1/2'>
                Join Us
              </button>
            </div>
            <div></div>
          </div>
        </div>
        <div className='bg-[#1f2638] w-full py-20 px-10 lg:px-40'>
          <div className='w-full justify-center flex'>
            <div className='w-full lg:w-1/2 text-center '>
              <h2 className='font-medium text-white text-2xl sm:text-3xl'>
                Our Team
              </h2>
              <p className='font-normal text-base mt-3 text-[#999fa2] sm:text-xl'>
                We believe that everyone should put something aside for those
                less fortunate than themselves.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-16 py-12 sm:grid-cols-4 lg:grid-cols-4 '>
            <div className='text-center'>
              <img
                src='/assets/images/our-team-an.jpg'
                alt='about_us_avatar_investor'
                className='rounded-full'
              />
              <p className='text-white font-medium text-sm mt-5'>
                Le Vu Thanh An
              </p>
              <p className='text-[#85cac6] font-medium text-sm '>Technical</p>
            </div>
            <div className='text-center'>
              <img
                src='/assets/images/our-team-nam.jpg'
                alt='about_us_avatar_investor'
                className='rounded-full'
              />
              <p className='text-white font-medium text-sm mt-5'>
                Nguyen Viet Nam
              </p>
              <p className='text-[#85cac6] font-medium text-sm '>Technical</p>
            </div>
            <div className='text-center'>
              <img
                src='/assets/images/our-team-phiho.png'
                alt='about_us_avatar_investor'
                className='rounded-full'
              />
              <p className='text-white font-medium text-sm mt-5'>Ho Van Phi</p>
              <p className='text-[#85cac6] font-medium text-sm '>Advisor</p>
            </div>
            <div className='text-center'>
              <img
                src='/assets/images/our-team-vku.jpg'
                alt='about_us_avatar_investor'
                className='rounded-full'
              />
              <p className='text-white font-medium text-sm mt-5'>VKU</p>
              <p className='text-[#85cac6] font-medium text-sm '>
                Product Realease
              </p>
            </div>
          </div>

          <div className='w-full text-center'>
            <p className='text-[#999fa2]'>
              Want to be part of Daffy?
              <Link to='/' className='text-[#85cac6] underline font-medium'>
                {' '}
                Join the team
              </Link>
            </p>
          </div>
        </div>

        <div className='bg-[#252d40] w-full px-10 py-20 flex justify-center '>
          <div className='w-full sm:w-[600px]'>
            <div className='text-center'>
              <p className='text-white font-medium text-2xl sm:text-3xl'>
                Enterprise Type Support
              </p>
              <p className='text-[#999fa2] font-normal text-base mt-3 sm:text-xl'>
                System support many enterprise types so provide the solution for
                enterprise to easy to manage their enterprise system
              </p>
            </div>
            <div className='mt-10 grid grid-rows-5 gap-3 sm:grid auto-cols-max grid-flow-col justify-center sm:grid-rows-2'>
              <label className='bg-[#a1b0e0] p-3 rounded-full text-center font-medium'>
                Bank
              </label>
              <label className='bg-[#fec398] p-3 rounded-full text-center font-medium'>
                Logictic
              </label>
              <label className='bg-[#a4dd9f] p-3 rounded-full text-center font-medium'>
                Store
              </label>
              <label className='bg-[#a0c4de] p-3 rounded-full text-center font-medium'>
                Supermarket
              </label>
              <label className='bg-[#c6adf8] p-3 rounded-full text-center font-medium'>
                School
              </label>
              <label className='bg-[#f3e9aa] p-3 rounded-full text-center font-medium'>
                University
              </label>
              <label className='bg-[#d1ae94] p-3 rounded-full text-center font-medium'>
                Factory
              </label>
              <label className='bg-[#ffb2e0] p-3 rounded-full text-center font-medium'>
                Apartment
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
