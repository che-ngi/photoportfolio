import InstagramLogo from '../img/instagram.svg?react';
import LinkedInLogo from '../img/linkedin.svg?react';
import { Link } from "react-router-dom";


function Header() {
    return (
    <>
      <header className="overscroll-y-none w-72 min-w-72 h-screen p-12 content-center text-left text-gray-800">
        <nav className='fixed overscroll-y-none'>
        <Link to="/">
            <h1 className='font-sans text-4xl tracking-tighter align-text-top -mt-1'>
                aaron cheng
            </h1>
            <h2 className="text-md font-thin text-gray-500">
                photography
            </h2>
        </Link>
          <ul className='flex flex-col mt-20 text-lg font-sans tracking-wider gap-6'>
            <li>
                <Link to="/work" className="hover:text-gray-500 hover:scale-110 duration-300 inline-block">work</Link>
            </li>
            <li>
                <Link to="/about">about</Link>
            </li>
            <li>
                <Link to="/contact">contact</Link>
            </li>
          </ul>
          {/* socials */}
          <ul className='mt-20 flex gap-4 items-center justify-start fill-gray-800'>
            <li className='h-5 w-5 hover:scale-110 duration-300'>
               <InstagramLogo className="cursor-pointer hover:fill-gray-400" onClick={() => window.open('https://www.instagram.com/che.ngi/', '_blank')}/>
            </li>
            <li className='h-5 w-5 hover:scale-110 duration-300'>
               <LinkedInLogo className="cursor-pointer hover:fill-gray-400" onClick={() => window.open('https://www.linkedin.com/in/che-ngi', '_blank')} />
            </li>
          </ul>
        </nav>
      </header>
    </>
    )
}

export default Header;