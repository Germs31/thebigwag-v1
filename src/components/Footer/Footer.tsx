import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.logo}>
            <div>THE BIG WAG</div>
        </div>
        <div className={styles.pageLinks}>
            <div className={styles.pageAttributes}>
                <div className={styles.links}>
                    {
                        ["About", "Blogs", "Contact"].map((link: string) => (
                            <div className={styles.link}>{link}</div>
                        ))
                    }
                </div>
                <div className={styles.subscribe}>
                    <input type="email"/>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer