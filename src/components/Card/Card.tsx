import React from 'react'
import Image from 'next/image'
import styles from './card.module.css'
import RaincoatPug from '@/assets/images/raincoat-pug.jpg'

const Card = () => {
  return (
    <div className={styles.card}>
        <div className={styles.cardLink}>
            <div className={styles.cardImage}>
              <Image src={RaincoatPug} alt={'blog image'} width={100} height={100}/>
            </div>
            <div className={styles.cardDetails}>
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est soluta vel qui mollitia, sed inventore eius obcaecati, similique ducimus repellendus deserunt tempora sint magnam veniam fuga laboriosam. Laudantium, corrupti enim.</p>
                <div className={styles.cardDate}>Date: 01-10-2023</div>
            </div>
        </div>
    </div>
  )
}

export default Card