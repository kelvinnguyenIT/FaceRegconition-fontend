import { Link } from 'react-router-dom'
import './style.css'

export function Footer() {
  return (
    <>
      <div className='bg-white divide-y divide-neutral-secondary px-4'>
        <nav className='flex flex-wrap justify-center py-5 px-4 max-w-screen-xl mx-auto'>
          <div className='footer-menu'>
            <Link to='/'>HOME</Link>
          </div>
          <div className='footer-menu'>
            <Link to='/about'>ABOUT</Link>
          </div>
          <div className='footer-menu'>
            <Link to='/'>MEMBERSHIP</Link>
          </div>
          <div className='footer-menu'>
            <Link to='/'>INVEST</Link>
          </div>
          <div className='footer-menu'>
            <Link to='/help'>FAQ</Link>
          </div>
          <div className='footer-menu'>
            <Link to='/'>CAREER</Link>
          </div>
          <div className='footer-menu'>
            <Link to='/'>RESOURCES</Link>
          </div>
        </nav>

        <footer className='pb-12 max-w-screen-xl mx-auto divide-y divide-neutral-secondary'>
          <div className='flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-x-8'>
            <section className='text-neutral-quinary text-center xl:text-left py-8 space-y-8 order-1'>
              <figure className='hidden xl:block'>
                <div className='footer-social-icon'>
                  <div>
                    <img
                      className='max-w-full block m-0 border-none p-0'
                      alt='logo.svg'
                      src='/assets/icons/logo.svg'
                    />
                  </div>
                </div>
              </figure>
              <div>
                <p className='text-base font-extrabold font-montserrat text-gray-500'>
                  :Face Recognition
                </p>
                <p className='text-sm font-normal text-gray-500 font-montserrat'>
                  Technology Stack For The Multimodal Biometric™
                </p>
              </div>
              <ul className='flex space-x-6  justify-center xl:justify-start items-center'>
                <li>
                  <Link to='/'>
                    <div className='footer-social-icon'>
                      <div>
                        <img
                          className='max-w-full block m-0 border-none p-0'
                          alt='twitter'
                          src='/assets/icons/twitter-grey.svg'
                        />
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <div className='footer-social-icon'>
                      <div>
                        <img
                          className='max-w-full block m-0 border-none p-0'
                          alt='facebook'
                          src='/assets/icons/facebook-grey.svg'
                        />
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <div className='footer-social-icon'>
                      <div>
                        <img
                          className='max-w-full block m-0 border-none p-0'
                          alt='linkedin'
                          src='/assets/icons/linkedin-grey.svg'
                        />
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </section>
            <section className='footer-support'>
              <div className='gap-4 lg:gap-6 xl:text-center flex font-montserrat flex-col md:flex-row xl:flex-col items-center'>
                <h4 className='text-gray-500 text-base leading-5 uppercase tracking-wider'>
                  HAVE ANY QUESTIONS?
                </h4>
                <Link
                  className='bg-[#353b4b] shadow-sm py-2 px-4 text-white text-base rounded-full block text-center md:inline-block '
                  to='/contact'
                >
                  Contact Support
                </Link>
              </div>
              <Link className='hidden md:inline-block ' to='/'>
                <div className='footer-social-icon'>
                  <div>
                    <img
                      className='max-w-full block m-0 border-none p-0'
                      alt='app-store-download'
                      src='/assets/icons/app-store-download.svg'
                    />
                  </div>
                </div>
              </Link>
            </section>
            <section className='text-gray-500 text-sm font-montserrat pt-8 md:py-8 space-y-4 order-2 xl:order-2 border-t border-neutral-secondary md:border-t-0'>
              <p>
                Face Recognition is recognized as a tax-exempt public charity as
                described in Sections 501(c)(3), 509(a)(1), and 170(b)(1)(A)(vi)
                of the Internal Revenue Code. EIN: 86‑3177440.
              </p>
              <address className='not-italic'>
                300 3rd Street, Suite 7<br />
                Los Altos, CA 94022
              </address>
              <p className='hidden md:block'>
                For more detail, please refer to our privacy policy and donor
                agreement.
              </p>
            </section>
          </div>
          <section className='text-base font-montserrat text-gray-500 text-center pt-8 hidden md:block'>
            <p>© 2022 Face Recognition Fund™. All rights reserved.</p>
          </section>
        </footer>
      </div>
    </>
  )
}
