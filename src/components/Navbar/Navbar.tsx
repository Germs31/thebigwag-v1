'use client'
import React, { useState } from 'react'
import styles from './navbar.module.css'


const navLinks: string[] = ["Home", "About", "Blogs", "Contact"]
const Navbar = () => {
  const [ isMobile, setIsMobile ] = useState<boolean> (false)
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>THE BIG WAG</div>
        <div className={styles.navlinks}>
            {
                navLinks.map((link: string) => (
                    <a href="#" key={link} className={styles.navlink}>{link}</a>
                ))
            }
        </div>

        <div className={styles.hamburgerMenu} onClick={() => setIsMobile(!isMobile)}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        
        {
          isMobile 
          ?
            <div className={styles.mobileMenu}>
              {
                  navLinks.map((link: string) => (
                      <a href="#" onClick={() => setIsMobile(false)} key={link} className={styles.navlink}>{link}</a>
                  ))
              }
            </div>
          :
            <></>
        }

    </nav>
  )
}

export default Navbar