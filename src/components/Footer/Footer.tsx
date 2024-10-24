import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import TheBigWagLogo from '@/assets/images/smaller-bigwag-logo.png'
import Button from '@/components/Button/Button'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footerContent}>
            <div className={styles.logo}>
                <Image 
                    src={TheBigWagLogo} 
                    alt="logo for the big wag website"
                    height={75}
                    width={150}/>
            </div>
            <div className={styles.pageLinks}>
                <div className={styles.subscribe}>
                    <input type="email"/>
                    <Button text={'Subscribe'} primary={false} />
                </div>
                <div className={styles.pageAttributes}>
                    <div className={styles.links}>
                        {
                            ["About", "Blogs", "Contact"].map((link: string) => (
                                <div className={styles.link}>{link}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.copyright}>{`© ${new Date().getFullYear()} The Big Wag`}</div>
    </div>
  )
}

export default Footer