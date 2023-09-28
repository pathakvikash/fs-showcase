import Image from 'next/image';
import styles from './page.module.css';
import Hero from 'public/hero.png';
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better place for your digital showcase.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. Build together the teams from all over
          globe.
        </p>
        <Button url='/portfolio' text='Works' />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='' className={styles.img} />
      </div>
    </div>
  );
}
