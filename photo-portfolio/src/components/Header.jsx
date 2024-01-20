import InstagramLogo from '../img/instagram.svg?react';
import LinkedInLogo from '../img/linkedin.svg?react';


function Header() {
    return (
    <>
      <header className="overscroll-y-none w-72 min-w-72 h-screen p-12 content-center text-left">
        <nav className='fixed overscroll-y-none'>
          <h1 className='font-sans text-4xl tracking-tighter'>
            aaron cheng
          </h1>
          <ul className='flex flex-col mt-20 text-lg font-sans tracking-wider gap-6 text-gray-800'>
            <li>
              work
            </li>
            <li>
              about
            </li>
            <li>
              contact
            </li>
          </ul>
          {/* socials */}
          <ul className='mt-20 flex gap-4 items-center justify-start fill-gray-800'>
            <li className='h-5 w-5'>
               <InstagramLogo className="cursor-pointer hover:fill-gray-400" onClick={() => window.open('https://www.instagram.com/che.ngi/', '_blank')}/>
            </li>
            <li className='h-5 w-5'>
               <LinkedInLogo className="cursor-pointer hover:fill-gray-400" onClick={() => window.open('https://www.linkedin.com/in/che-ngi', '_blank')} />
            </li>
          </ul>
        </nav>
      </header>
    </>
    )
}

export default Header;