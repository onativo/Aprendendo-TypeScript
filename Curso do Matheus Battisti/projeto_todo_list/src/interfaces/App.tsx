import React from "react"

//components imports
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import styles from './App.module.css'

export default function App(){
  return(
    <div>
      <Header />
      <main className={styles.main}></main>
      <Footer />
    </div>
  )
}