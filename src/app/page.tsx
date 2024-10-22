import styles from "./page.module.css";
import Image from 'next/image'
import RainPug from '@/assets/images/raincoat-pug.jpg'
import Card from "../components/Card/Card";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Get The Latest Pup Trends</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime quisquam deserunt pariatur deleniti natus soluta dolor! Atque aut ipsa numquam alias, sunt eaque totam reprehenderit veritatis! Voluptas, a quibusdam.</p>
          <button>Learn More</button>
        </div>
        <div className={styles.heroImage}>
          <Image 
            src={RainPug} 
            alt={"a pug in a raincoat"}
            width={300}
            height={400}/>
        </div>
      </div>

      {/* Blog Grid */}
      <div className={styles.blogGrid}>
          {
            [1,2,3,4,5,6].map(() => (
              <Card/>
            ))
          }
      </div>
    </main>
  );
}
