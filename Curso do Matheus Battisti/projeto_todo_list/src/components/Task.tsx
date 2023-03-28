import * as React from 'react'

export interface Task {
  btnText:string
}

export function Task ({btnText}: Task) {
  return (
    <form action="">
      <div>
        <label htmlFor="title">Tarefa</label>
        <input type="text" name="title" placeholder="Titulo da tarefa" />
      </div>
      <div>
        <label htmlFor="dififculty">Dificuldade</label>
        <input type="text" name="dififculty" placeholder="Dificuldade da tarefa" />
      </div>
      <input type="submit" value={btnText}/>
    </form> 
  )
}
