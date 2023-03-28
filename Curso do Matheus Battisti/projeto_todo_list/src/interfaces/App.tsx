import React from "react"

//components imports
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Task } from "../components/Task"
import { TaskList } from "../components/TaskList"

//import styles
import styles from './App.module.css'

export default function App(){
  return(
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>Objetivo</h2>
          <Task btnText="Nova Tarefa"/>
        </div>
        <div>
          <h2>Tarefas na lista</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  )
}