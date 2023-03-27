import * as React from 'react';

//import style sheet
import styles from './Footer.module.css'

export function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <p>
          <span>Feito por Vinicios Nativo @ 2023</span>
        </p>
      </footer>
    </div>
  );
}
