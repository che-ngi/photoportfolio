import Header from '../components/Header.jsx';
import { Link } from "react-router-dom";
import Hamburger from '../img/hamburger.svg?react';
import Cross from '../img/cross.svg?react';
import {useState} from 'react';

function About() {

    function getImageUrl(name) {
        return new URL(`../img/${name}.jpg`, import.meta.url).href
        }

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
      <main className="p-12">
        <div className="grid lg:grid-cols-2">
            <div className="grid mb-6 lg:mr-6 font-sans font-light text-xl gap-12 leading-10">
                <h1 className="font-medium text-6xl">about.</h1>
                <h2 className="font-medium text-2xl tracking-wider">
                hey! i'm aaron, a self-taught photographer based in boston but often take my camera around the world on my travels.
                </h2>
                <p className="tracking-wider">
                i specialize in land/cityscapes but have experience and confidence in any type of photography.
                i enjoy all types of creative photography including portraits, landscapes, concerts, and events. 
                much of my creative exploration comes within the editing process and manipulating the colors, look, and feel of a photo.
                </p>
                <p className="tracking-wider">
                if you have a story or idea you want to express through photos, or is looking for someone to photograph your event, ‎
                <Link to="/Contact" className="font-semibold font-sans text-blue-500">
                let's collaborate!
                </Link>
                </p>
            </div>
            <div className="flex mt-6 lg:ml-6 lg:items-center">
                <img src={getImageUrl("me")} className="object-cover"/>
            </div>
        </div>

      </main>
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

export default About;
