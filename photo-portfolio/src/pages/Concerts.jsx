import Header from '../components/Header.jsx';
import MasonryGrid from '../components/MasonryGrid.jsx';
import Hamburger from '../img/hamburger.svg?react';
import Cross from '../img/cross.svg?react';
import { Link } from "react-router-dom";
import {useState} from 'react';

function Concerts() {

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
      <MasonryGrid title="concerts"/>
      {menuOpen &&         
        <div className="fixed h-full w-screen sm:hidden backdrop-blur-sm top-0 left-0">
            <header className="absolute  bg-white/80 h-screen w-full">
                <button className="absolute right-6 top-8 h-12 w-12">
                    <Cross className="fill-black" onClick={() => setMenuOpen(false)}/>
                </button>
                <div className="flex h-full border justify-center items-center">
                <ul className='flex flex-col text-6xl font-sans tracking-wider gap-20 text-center align-center text-black'>
                    <li>
                        <Link to="/work" className="hover:text-gray-500 hover:scale-110 duration-300">work.</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-gray-500 hover:scale-110 duration-300 ">about.</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-gray-500 hover:scale-110 duration-300">contact.</Link>
                    </li>
            </ul>
            </div>
            </header>
        </div>}
    </div>

  )
}

export default Concerts;
