import styles from './page.module.css';
import dynamic from 'next/dynamic';

const RailzButton = dynamic(
  () => import('./connect.jsx').then((mod) => mod.default),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="App">
      <header className={styles["App-header"]}>
        <p>This is a sample Railz Connect project using <a href='https://nextjs.org/' target="_blank"
          rel="noopener noreferrer" className={styles["App-link"]}>Next</a></p>
        <p>
          Edit <code>app/connect.jsx</code> and save to reload.
        </p>
        <a
          className={styles["App-link"]}
          href="https://docs.railz.ai/docs/railz-connect-overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Railz Connect
        </a>
      </header>
      <div className={styles['App-Connect']}>
        <RailzButton />
      </div>
    </div>
  );
}

