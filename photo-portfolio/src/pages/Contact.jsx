import Header from '../components/Header.jsx';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";
import Hamburger from '../img/hamburger.svg?react';
import InstagramLogo from '../img/instagram.svg?react';
import LinkedInLogo from '../img/linkedin.svg?react';
import Cross from '../img/cross.svg?react';

function Contact() {

    const [menuOpen, setMenuOpen] = useState(false);

    const [submitMsg, setSubmitMsg] = useState("send message")

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_088uk37', 'template_ecgsqvi', form.current, 'hEBwC3A8VGk8mm0zD')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

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
      <main className="flex flex-col p-12 w-full">
        <h1 className="font-medium text-6xl">contact.</h1> 
        <div className="mt-12 grid lg:grid-cols-2">
        <div className="flex flex-col font-sans text-2xl gap-6 font-light">
                <h2>have a creative idea? got an event coming up? looking to collaborate?</h2>
                <h2 className="text-4xl mb-12 lg:mb-0"><b>let&apos;s shoot.</b></h2>
            </div>
            <form className="flex flex-col gap-6"  ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col">
                    <input className="bg-gray-200 tracking-widest h-12 border pl-2 rounded-sm" type="text" placeholder="name" name="user_name" />
                </div>
                <div className="flex flex-col">
                    <input className="bg-gray-200 tracking-widest h-12 border pl-2 rounded-sm" type="text" placeholder="subject" name="user_subject" />
                </div>
                <div className="flex flex-col">
                    <input className="bg-gray-200 tracking-widest  h-12 border pl-2 rounded-sm" type="email" placeholder="email" name="user_email" />
                </div>
                <div className="flex flex-col">
                    <textarea className="bg-gray-200 tracking-widest pt-2 border font-sans pl-2 rounded-sm"rows="5" name="message" placeholder="message" />
                </div>
                <button className="h-12 border w-1/2 tracking-widest place-self-end" onClick={() => {setSubmitMsg("submitted")}}> {submitMsg} </button>
            </form>
        </div> 
      </main>
      {menuOpen &&         
        <div className="fixed h-full w-screen sm:hidden backdrop-blur-sm top-0 left-0">
            <header className="absolute  bg-white/80 h-screen w-full">
                <button className="absolute right-6 top-8 h-12 w-12">
                    <Cross className="fill-black" onClick={() => setMenuOpen(false)}/>
                </button>
                <div className="flex h-full border justify-center items-center">
                <ul className='flex flex-col items-center text-5xl font-sans tracking-wider gap-10 text-center align-center text-black'>
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

export default Contact;
