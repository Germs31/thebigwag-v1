import React from 'react'
import styles from './card.module.css'

const Card = () => {
  return (
    <div className={styles.card}>
        <a href="#" className={styles.cardLink}>
            <div className={styles.cardDetails}>
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est soluta vel qui mollitia, sed inventore eius obcaecati, similique ducimus repellendus deserunt tempora sint magnam veniam fuga laboriosam. Laudantium, corrupti enim.</p>
                <div>Date: 01-10-2023</div>
            </div>
        </a>
    </div>
  )
}

export default Card