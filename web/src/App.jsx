import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import ModalDelete from "./components/ModalDelete";
import "./style.css";
import Tasks from "./components/Tasks";

export function App() {

  const [task, setTask] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/").then((response) => {
      setTask(response.data);
    });
  }, []);

  return (
    <> 
    <header>        
        <Header title="To Do List" action="/home/create" method="post" id="addButton" button="Adicionar" value="" />
    </header>

    <Tasks />

    {/* <Header title="Editar tarefa" action={`/home/updateOne/${_id}`} method="post" id="updateButton" button="Atualizar" value="task"/>
  
     */}

     

    {/* <ModalDelete id={_id} /> */}
    </>
  )
}

