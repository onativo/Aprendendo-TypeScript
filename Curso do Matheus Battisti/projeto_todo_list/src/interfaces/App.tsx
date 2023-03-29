import React, { useState } from "react"

//components imports
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Task } from "../components/Task"
import { TaskList } from "../components/TaskList"

//interface imports
import { ITaskInterface } from "./TaskInterface"

//import styles
import styles from './App.module.css'

export default function App(){

  const [task, setTask] = React.useState<ITaskInterface[]>([])


  return(
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>Objetivo</h2>
          <Task btnText="Criar tarefa" task={task} setTask={setTask}/>
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