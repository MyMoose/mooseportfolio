import React, { useState } from 'react'
import './navbar.css'
import { ImHome } from 'react-icons/im'
import { FaUserAstronaut } from 'react-icons/fa'
import { GiBookmarklet } from 'react-icons/gi'
import { AiFillMessage } from 'react-icons/ai'
import { AiOutlineCodeSandbox } from 'react-icons/ai'
import { SiLinkedin } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';


const Navbar = () => {

    const [activeNavbar, setActiveNavbar] = useState('#top')

    // const navbarOnClick = (e) => {
    //     console.log(e)


    // }



    return (
        <nav>
            <a href="#top" onClick={() => setActiveNavbar('#top')} className={activeNavbar === '#top' ? 'active' : ''}><ImHome /></a>
            <a href="#about" onClick={() => setActiveNavbar('#about')} className={activeNavbar === '#about' ? 'active' : ''}><FaUserAstronaut /></a>
            <a href="#experience" onClick={() => setActiveNavbar('#experience')} className={activeNavbar === '#experience' ? 'active' : ''}><GiBookmarklet /></a>
            <a href="#portfolio" onClick={() => setActiveNavbar('#portfolio')} className={activeNavbar === '#portfolio' ? 'active' : ''}><AiOutlineCodeSandbox /></a>
            <a href="#contact" onClick={() => setActiveNavbar('#contact')} className={activeNavbar === '#contact' ? 'active' : ''}><AiFillMessage /></a>
            <a href="https://www.linkedin.com/in/leechangwoo/"><SiLinkedin /></a>
            <a href="https://github.com/MyMoose"><SiGithub /></a>
        </nav>
    )
}

export default Navbar