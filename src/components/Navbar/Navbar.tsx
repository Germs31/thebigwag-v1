import React from 'react'
import styles from './navbar.module.css'


const navLinks: string[] = ["Home", "About", "Blogs", "Contact"]
const Navbar = () => {
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
    </nav>
  )
}

export default Navbar