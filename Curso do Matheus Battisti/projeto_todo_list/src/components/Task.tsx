import * as React from 'react'

//import styles
import styles from './Task.module.css'

//interface imports
import { ITaskInterface } from '../interfaces/TaskInterface'
export interface Task {
  btnText:string
  task: ITaskInterface[]
  setTask?: React.Dispatch<React.SetStateAction<ITaskInterface[]>>
}

export function Task ({btnText, task, setTask}: Task) {

  //varibles declaration
  const [id, setId] = React.useState<number>(0)
  const [title, setTitle] = React.useState<string>("")
  const [difficulty, setDifficulty] = React.useState<number>(0)

  const addTaskHandler = (e: React.FormEvent<HTMLFormElement>) => {
    //impede a página de atualizar após o submit
    e.preventDefault()

    const id = Math.floor(Math.random() * 1000)
    const newTask:ITaskInterface = {id, title, difficulty}

    setTask!([...task, newTask])

    setTitle('')
    setDifficulty(0)

    console.log(task)
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === 'title'){
      setTitle(e.target.value)
    }else{
      setDifficulty(parseInt(e.target.value))
    }
  }



  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Tarefa</label>
        <input
          type="text" 
          name="title" 
          placeholder="Titulo da tarefa" 
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="dififculty">Dificuldade</label>
        <input 
          type="text"
          name="dififculty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
        />
      </div>
      <input type="submit" value={btnText}/>
    </form> 
  )
}
