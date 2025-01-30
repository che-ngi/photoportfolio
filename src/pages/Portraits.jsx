import Header from '../components/Header.jsx';
import MasonryGrid from '../components/MasonryGrid.jsx';
import Hamburger from '../img/hamburger.svg?react';
import InstagramLogo from '../img/instagram.svg?react';
import LinkedInLogo from '../img/linkedin.svg?react';
import Cross from '../img/cross.svg?react';
import { Link } from "react-router-dom";
import {useState} from 'react';

function Portraits() {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App flex flex-col sm:flex-row">
      <Header/>
      <header className="flex pl-6 pt-6 sm:hidden items-center">
            <Link to="/">
                <h1 className='font-sans text-4xl tracking-tighter'>
                    aaron cheng
                </h1>
                <h2 className="text-md font-thin text-gray-500">
                    photography
                </h2>
            </Link>
            <button className="absolute right-6 h-12 w-12">
                {!menuOpen && <Hamburger onClick={() => setMenuOpen(true)}/>}
            </button>
        </header>
      <MasonryGrid title="portraits"/>
      {menuOpen &&         
        <div className="fixed h-full w-screen sm:hidden backdrop-blur-sm top-0 left-0">
            <header className="absolute  bg-white/80 h-screen w-full">
                <button className="absolute right-6 top-8 h-12 w-12">
                    <Cross className="fill-black" onClick={() => setMenuOpen(false)}/>
                </button>
                <div className="flex h-full justify-center items-center">
                <ul className='flex flex-col text-5xl items-center font-sans tracking-wider gap-10 text-center align-center text-black'>
                    <li>
                        <Link to="/portfolio" className="hover:text-gray-500 hover:scale-110 duration-300">portfolio.</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-gray-500 hover:scale-110 duration-300 ">about.</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-gray-500 hover:scale-110 duration-300">contact.</Link>
                    </li>
                    <li className="flex gap-6">
                        <div className='h-8 w-8 hover:scale-110 duration-300'>
                            <InstagramLogo className="cursor-pointer hover:fill-gray-400" onClick={() => window.open('https://www.instagram.com/che.ngi/', '_blank')}/>
                        </div>
                        <div className='h-8 w-8 hover:scale-110 duration-300'>
                            <LinkedInLogo className="cursor-pointer hover:fill-gray-400" onClick={() => window.open('https://www.linkedin.com/in/che-ngi', '_blank')} />
                        </div>
                    </li>
            </ul>
            </div>
            </header>
        </div>}
    </div>

  )
}

export default Portraits;
