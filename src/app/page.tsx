import styles from "./page.module.css";
import Image from 'next/image'
import RainPug from '@/assets/images/raincoat-pug.jpg'
import Card from "../components/Card/Card";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* HERO */}
      <Hero/>

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
