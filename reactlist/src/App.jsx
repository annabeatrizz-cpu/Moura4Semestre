import { useEffect, useState } from "react";
import "./App.css";
import penIcon from "./assets/edit-icon.svg";
import trashIcon from "./assets/trash-icon.svg";
import axios from "axios";

function App() {
  const [tasklist, setTasklist] = useState([])
  const [taskValue, setTaskValue] = useState("")
  const [editMode, setEditMode] = useState(false)
  const [idToEdit, setIdToEdit] = useState(0)

  // Funções
  //CRUD - Post Get Put/Patch Delete

  //Get - busca todas as tarefas
  const getTasks = async () => {
    try {
      //Retorna a requisição (header and body data )
      const APIReturn = await axios.get("http://localhost:3000/taskpoint")
      const APIData = await APIReturn.data
      //atualizar o state
      setTasklist(APIData)

    } catch (error) {
      console.log(error)
    }
  }



  //Get{id} - busca todas as tarefas por id
  const getTaskById = (id) => {
    alert(`Função getTasksById em desenvolvimento ${id}`)
  }

  //Post - cadastra uma tarefa
  const postTask = async (e) => {
    e.preventDefault() //não submete o formulário, evita o evento
    if (taskValue.trim().length == 0) {
      alert("Preencher o campo valor")
      return false

    }
    try {
      const APIReturn = await axios.post("http://localhost:3000/taskpoint", {
        descricao: taskValue,
      });
      setTaskValue("");
      getTasks();

    } catch (error) {
      console.log(error);


      alert("Erro ao cadastrar os dados");
    }
  };



  //Put - Pre Editar ( apenas mostra os dados do formulario)
  const putTask = (item) => {
    setEditMode(true)
   setTaskValue(item.descricao)
   setIdToEdit(item.id)

  }

  const confirmPutTask = async (e) => {
     e.preventDefault()
     if(taskValue.trim().length == 0){
      alert("Preencha o texto da tarefa")
      return false;
     }

     try {
      const APIReturn = await  axios.put(`http://localhost:3000/taskpoint/${idToEdit}`, {
        descricao : taskValue}
      )
       setIdToEdit(0)
       setTaskValue("")
       setEditMode(false)
       alert("A tarefa foi editada")
       getTasks();
     } catch (error) {
      alert("Erro a editar")
      console.log
      
     }
     alert(`Em desenvolvimento ${idToEdit}`)
  }



  //Delete
  const deleteTask = async (id) => {
    const querExcluir = confirm("Atencao: Quer realmente excluir o registro")
    if (!querExcluir) return false;
    
    try {
      const APIReturn = await axios.delete(`http://localhost:3000/taskpoint/${id}`)
      getTasks();
      alert("Tarefa excluida com sucesso");

    } catch (error) {
      console.log(error);
      alert("Erro ao excluir a tarefa");
    }
  };








// Effects
//ciclo de vida do componente

//onMount - quando o componenete for montado
useEffect(() => {
  //carrega os dados quando o componente for montado
  getTasks()
}, [])






// JSX
return (
  <>
    <header className="header-section">
      <h1 className="header-seciton__title">React List</h1>
    </header>

    <main className="body-section">
      <form className="cad-task" onSubmit={editMode? confirmPutTask : postTask}>
        <input
          className="card-task__entry"
          type="text"
          placeholder="Adicione uma tarefa"
          value={taskValue}
          onChange={(e) => {
            setTaskValue(e.target.value)
          }}
        />
        <p>{taskValue}</p>
        <button className="card-task__btn-confirm">Adicionar</button>

        {
          editMode &&(
           <button className="card-task__btn-confirm"
           type="button"
           onClick={()=>{
            setTaskValue("")
            setIdToEdit(0)
            setEditMode(false)

           }}>
            Cancelar
          </button>

       ) }
      </form>

      <section className="cardlist">
        {tasklist.map((t) => {
          return (
            <article className="cardtask" key={t.id}>
              <p className="cardtask__tasc-text">
                {t.descricao}
              </p>

              <div className="cardtask__icon-box">
                <div className="cardlist__icon">
                  <img src={penIcon}
                    className="cardlist__edit-icon"
                    alt="imagem de um lápis. Função de editar a tarefa"
                    onClick={() => {
                      //variável t é o item/objeto completo
                      putTask(t)
                    }}
                  />
                </div>

                <div className="cardlist__icon">
                  <img
                    src={trashIcon}
                    alt=""
                    className="cardlist__delete-icon"
                    onClick={() => {
                      deleteTask(t.id)
                    }}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>

    <footer className="footer-list">
      <p className="footer-list__right-text">
        2026, React List - Todos os direitos reservados
      </p>
    </footer>
  </>
);

}
export default App;