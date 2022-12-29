import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../api/services/AuthUser'
import state from '../../utils/localStorage'
import './style.css'

export function Header() {
  const token = state.getToken()
  const navigate = useNavigate()

  const logoutUser = () => {
    if (token !== undefined) {
      logout()
      navigate('/')
    }
  }

  const toggleOptionUser = () => {
    const optionMenu = document.querySelector('#optionMenu')
    if (optionMenu) {
      if (optionMenu.classList.contains('hidden')) {
        optionMenu.classList.add('flex')
        optionMenu.classList.remove('hidden')
      } else {
        optionMenu.classList.add('hidden')
        optionMenu.classList.remove('flex')
      }
    }
  }

  return (
    <header className='px-8 py-5 fixed inset-x-0 z-40 bg-[#23293b]'>
      <div className='flex items-center justify-between max-w-screen-xl mx-auto'>
        <nav>
          <ul className='flex items-center space-x-10'>
            <li className='flex-shrink-0'>
              <div className='inline-block w-full truncate relative box-border m-0'>
                <Link to='/'>
                  <p className='font-extrabold font-montserrat text-xl leading-none text-white md:text-base lg:font-extrabold lg:text-xl'>
                    :FACE RECOGNITION
                  </p>
                </Link>
              </div>
            </li>
            <Link to='/technology'>
              {' '}
              <li className='header-menu'>
                <b>TECHNOLOGY</b>
              </li>
            </Link>
            <Link to='/articles'>
              <li className='header-menu'>
                <b>ARTICLES</b>
              </li>
            </Link>
            <Link to='/about'>
              <li className='header-menu'>
                <b>ABOUT US</b>
              </li>
            </Link>
            <Link to='/contact'>
              <li className='header-menu'>
                <b>CONTACT</b>
              </li>
            </Link>
          </ul>
        </nav>
        <ul className='flex items-center space-x-10 font-montserrat'>
          {token ? (
            <>
              <Link to='/user'>
                <li className='text-white font-montserrat font-bold text-sm hidden lg:block'>
                  HOME
                </li>
              </Link>
              <Link to='/user'>
                <li className='text-white font-montserrat font-bold text-sm hidden lg:block'>
                  ATTENDENCE
                </li>
              </Link>

              <Link to='/schedule'>
                <li className='text-white font-montserrat font-bold text-sm hidden lg:block'>
                  SCHEDULE
                </li>
              </Link>
              <li className='relative'>
                <button
                  className='rounded-full w-10 border-white border-2'
                  onClick={toggleOptionUser}
                >
                  <img
                    src='/assets/images/avatar-user.png'
                    alt='avatar-user'
                    className='rounded-full'
                  />
                </button>
                <div
                  className='bg-[#252d40] p-3 right-0 w-40 flex-col text-white font-montserrat font-bold text-sm mt-1 hidden absolute z-0  border border-[#aaa]'
                  id='optionMenu'
                >
                  <Link to='/user'>
                    <p className='p-2 text-[#687382] hover:text-white block lg:hidden'>
                      HOME
                    </p>
                  </Link>
                  <Link to='/user'>
                    <p className='p-2 text-[#687382] hover:text-white block lg:hidden'>
                      ATTENDANCE
                    </p>
                  </Link>
                  <Link to='/profile'>
                    <p className='p-2 text-[#687382] hover:text-white font-montserrat font-bold text-sm text-left'>
                      PROFILE
                    </p>
                  </Link>

                  <button
                    onClick={logoutUser}
                    className='p-2 text-[#687382] hover:text-white font-montserrat font-bold text-sm text-left'
                  >
                    LOGOUT
                  </button>
                </div>
              </li>
            </>
          ) : (
            <>
              <Link to='/login'>
                <li className='hidden md:flex font-baloo md:text-sm lg:text-sm text-white float-left font-medium pt-2 pb-2.5'>
                  <b>LOGIN</b>
                </li>
              </Link>
              <Link to='/login'>
                <li className='text-white text-sm font-baloo font-medium pt-2 pb-2.5 px-5 float-left bg-[#ff1d53] rounded-full'>
                  <b>GET STARTED</b>
                </li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </header>
  )
}
