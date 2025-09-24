import styles from '@/app/home.module.css';

export default function DesktopBlocker() {
  return (
    <div className={styles.desktopBlockerContainer}>
      <div className={styles.desktopBlockerMessage}>
        <svg  width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
        <h1>Acesse pelo celular</h1>
        <p>Para uma melhor experiência e imersão, por favor, acesse este convite através de um smartphone.</p>
      </div>
    </div>
  );
}