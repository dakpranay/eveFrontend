import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {

    const [mobileView, setMobileView] = useState(false)

    function handleHamburgerClick() {
        setMobileView(true)
    }

    function handleCrossClick() {
        setMobileView(false)
    }


    let nav_link = [{
        path: '/home',
        display: "Home"
    },
    {
        path: '/about',
        display: "About"
    },
    {
        path: '/venues',
        display: "Venues"
    }
    ]
    return (
        <div>
            <div className={styles.headerWrapper}>
                <Link to='/home' className={styles.logoWrapper}>
                    <img src='logo.png' alt='logo' className={styles.logo} />
                </Link>

                <div className={styles.headerMenuWrapper}>
                    <ul className={styles.headerMenu}>
                        {nav_link.map((item, index) => (
                            <li key={index}>
                                <NavLink to={item.path}>{item.display}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.headerButtonWrapper}>
                    <NavLink to='/login'><button className={`${styles.headerButton} ${styles.sec_button} `}>Login</button></NavLink>
                    <NavLink to='signup'><button className={`${styles.headerButton} ${styles.primary_button}`}>Signup</button></NavLink>
                    {mobileView && <button className={`${styles.headerButton} ${styles.cross}`} onClick={handleCrossClick}>&#x2715;</button>}
                    {!mobileView && <button className={`${styles.headerButton} ${styles.hamburger}`} onClick={handleHamburgerClick}>&#x2630;</button>}
                </div>
            </div>
            {mobileView && <div className={styles.mobileView}>
                <ul>
                   <NavLink to='/login' onClick={handleCrossClick}><li>Login</li></NavLink>
                   <NavLink to='/signup' onClick={handleCrossClick}><li>Signup</li></NavLink>
                    {nav_link.map((item, index) => (
                            <NavLink to={item.path} key={index} onClick={handleCrossClick}><li>{item.display}</li></NavLink>
                    ))}
                </ul>
            </div>
            }

        </div>
    )
}
