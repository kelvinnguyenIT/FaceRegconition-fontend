import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../../../api/services/AuthUser'
import state from '../../../../utils/localStorage'

export function Summary() {
  const token = state.getState('token')
  const user = state.getState('user')
  const navigate = useNavigate()

  const logoutUser = () => {
    if (token !== undefined) {
      logout()
      navigate('/')
    }
  }

  return (
    <>
      <header>
        <div className='pt-10 space-y-4 md-space-y-0 md:space-x-6 flex md:items-end max-w-xl mx-auto -mt-[4.25rem] md:-mt-16 flex-col sm:flex-row'>
          <img
            src='https://static.daffy.org/avatars/avatar-placeholder.png'
            alt=''
            className='w-24 h-24 ml-4 md:ml-0 md:w-24 md:h-24 ring-4 ring-white rounded-full'
          />
          <div className='space-y-2 md:mb-8  md:px-0 font-montserrat'>
            <div className='flex items-start justify-between'>
              <h1
                className='text-lg sm:text-xl md:text-3xl md:leading-9 font-semibold text-white'
                id='react-aria-1'
              >
                {user.name}
              </h1>
              <Link
                to='/profile/edit'
                className='text-[#84838b] flex items-center space-x-2 pl-2 py-2'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                  className='w-4 h-4'
                >
                  <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z'></path>
                  <path
                    fill-rule='evenodd'
                    d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span>Edit</span>
              </Link>
            </div>
            <p className='text-xs leading-4 font-medium tracking-wider uppercase text-[#84838b]'>
              {user.username}
            </p>
          </div>
        </div>
      </header>
      <div className='mt-10 max-w-xl mx-auto font-montserrat'>
        <h5 className='text-xl font-medium'>Summary</h5>
        <p className='text-[#84838b] mt-3'>
          {user.name} is a new member of the Face Recognition community and
          working at {''}
          {user.department} department with {user.position} position
        </p>
      </div>
      {/* Settings */}
      <div className='mt-8 max-w-xl mx-auto font-montserrat'>
        <h5 className='text-xl font-medium'>Setting</h5>
        <div className='flex flex-col'>
          <div className='mt-1'>
            <Link
              to='edit'
              className='flex items-center hover:bg-[#252d40] transition-all py-2 text-[#84838b] border-b border-b-[#84838b] hover:pl-1'
            >
              Profile
            </Link>
          </div>
          <div className='mt-1'>
            <Link
              to='change-password'
              className='flex items-center transition-all py-2 text-[#84838b] border-b border-b-[#84838b] hover:pl-1 hover:bg-[#252d40] '
            >
              Change password
            </Link>
          </div>
          <div className='mt-1'>
            <Link
              to='/user'
              className='flex items-center transition-all py-2 text-[#84838b] border-b border-b-[#84838b] hover:pl-1 hover:bg-[#252d40] '
            >
              Attendance
            </Link>
          </div>
          <div className='mt-1 mb-3'>
            <button
              onClick={logoutUser}
              className='flex items-center transition-all py-2 text-[#84838b] w-full hover:bg-[#252d40] hover:pl-1'
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
