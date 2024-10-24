'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import styles from './navbar.module.css'
import TheBigWagLogo from '@/assets/images/smaller-bigwag-logo.png'


const navLinks: string[] = ["Home", "About", "Blogs", "Contact"]
const Navbar = () => {
  const [ isMobile, setIsMobile ] = useState<boolean> (false)
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image 
            src={TheBigWagLogo} 
            alt={'the big wag website logo'}
            width={110}
            height={50}/>
        </div>
        <div className={styles.navlinks}>
            {
                navLinks.map((link: string) => (
                    <div key={link} className={styles.navlink}>{link}</div>
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