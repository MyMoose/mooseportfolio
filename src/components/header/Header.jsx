import React from 'react'
import './header.css'
import ActionButton from './ActionButton'
import MySelf from '../../assets/MySelf.jpg'


const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h1>Changwoo Lee</h1>
                <h5 className="text-light">Full Stack Software Engineer</h5>
                <ActionButton />


                <div className="me">
                    <img src={MySelf} alt="" />
                </div>


            </div>
        </header>
    )
}

export default Header