import * as React from 'react'

//import style sheet
import styles from './Header.module.css'

export function Header() {
  return (
    <div>
      <header className={styles.header}>
        <h1>React com TypeScrupt</h1>
      </header>
      <h1>This is a content</h1>
    </div>
  );
}
