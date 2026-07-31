import './App.css'
import penIcon from "./assets/trash-icon.svg"
import trashIcon from "./assets/edit-icon.svg"
import { useState } from 'react'

function App() {

  const [tasklist, setTasklist] = useState([
    {id: 1, description : "Revisar HTML"},
    {id: 2, description : "Revisar CSS"},
    {id: 3, description : "Revisar ReactJs"},
    {id: 4, description : "Revisar React Native"}
  ])

  return (
      <>
    <header className="header-section">

      <h1>React List</h1>
    </header>
    <main className="body-section">
      <form className="cad-task">
        <input className="card-task__entry" type='text'/>
        <button className='card-task__btn-confirm'>Adicionar</button>
      </form>
      <section className="cardlist">

        {
          tasklist.map((t) =>{
            return(
                 <article className='cardtask'>
          <p className='cardtask__tasc-text'>
            {t.description}
          </p>

        <div className='cardtask__icon-box'>

          <div className='cardlist__icon'>
            <img src={penIcon}
             className='cardlist__edit-icon'
            alt="" />
          </div>
          <div className='cardlist__icon'>
            <img src={trashIcon} 
            className='cardlist__delete-icon'
            alt="" />
          </div>

        </div>
        </article>
        
            )
          })
        }

        
      </section>
    </main>
    <footer className="footer-list">
      <p className="footer-list_right-text">2026, React list - todos os direitos reservados </p>

    </footer>
   </>
  )
}

export default App
