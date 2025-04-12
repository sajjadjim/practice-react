import React, { useState } from 'react';
import Link from './Link';
import { Menu , CircleX  } from 'lucide-react';
const NavBar = () => {
    const urls = [
        { name: "Home", path: "/home", id: 1 },
        { name: "About", path: "/about", id: 2 },
        { name: "Services", path: "/services", id: 3 },
        { name: "Contact", path: "/contact", id: 4 },
        { name: "Profile", path: "/profile", id: 5 }
      ];
      const [open , setOpen] = useState(false)
    return (
        <nav className='flex justify-between mt-3 mx-3'>
          <span className='flex gap-5' onClick={()=> setOpen(!open)}>
          
          <button className=''>{
            open ? <CircleX  className='md:hidden'/> : <Menu className='md:hidden'/>
            
          }</button>
          <ul className={`md:hidden gap-10 z-100 absolute duration-1000 ${open ? 'mt-10' : '-mt-100'} bg-amber-400  rounded-lg`}>
              {
                urls.map(route=> <Link key={route.id} route={route}></Link>)
              }
            </ul>
          <h3>My website</h3>
          </span>
            <ul className='md:flex gap-10  hidden'>
              {
                urls.map(route=> <Link key={route.id} route={route}></Link>)
              }
            </ul>
            <button>Sign up</button>
        </nav>
    );
};

export default NavBar;