import React from 'react'
import Image from 'next/image'
import styles from './hero.module.css'
import RainPug from '@/assets/images/raincoat-pug.jpg'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.heroText}>
            <h1>Get The Latest Pup Trends</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime quisquam deserunt pariatur deleniti natus soluta dolor! Atque aut ipsa numquam alias, sunt eaque totam reprehenderit veritatis! Voluptas, a quibusdam.</p>
            <Button text={'Learn More'} primary={false} />
        </div>
        <div className={styles.heroImage}>
            <Image
                className={styles.image}
                src={RainPug} 
                alt={"a pug in a raincoat"}
                width={300}
                height={400}/>
        </div>
    </div>
  )
}

export default Hero