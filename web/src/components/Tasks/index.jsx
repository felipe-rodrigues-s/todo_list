import axios from "axios";
import { useEffect, useState } from "react";

function Tasks() {
	const [taskAll, setTaskAll] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/tasks").then((response) => {
      setTaskAll(response.data);
    });
  }, []);

//   async function hendleCreatAd(event: FormEvent) {
//     event.preventDefault();

//     const formData = new FormData(event.target as HTMLFormElement);
//     const data = Object.fromEntries(formData);
// console.log(data)
//     if(!data.name){
//       return
//     }

//    try {
//     await axios.post(`http://localhost:3333/games/${data.game}/ads`,{
//       name: data.name,
//       yarsPlayng: Number(data.yearsplaying),
//       discord:data.discord,
//       weekDays:weekDays.map(Number),
//       hourStart: data.hourStart,
//       houtEnd:data.houtEnd,
//       useVoiceChannel: useVoiceChannel
//     })

//     alert('Anúncio criado com sucesso!')
//    } catch (error) {
//     console.log(error)
//     alert('Erro ao criar anúncio')
//    }
//   }

	return (
		<>
			  <section id="tasks">
      <ul>
			{taskAll.map((task) => {
				
				return (					
						  <li key={task._id} className={`chack-${task.check}`} >
								<div>
									<a href={`/task/check/${task._id}`} className={`chack-${task.check}`}>{`${task.task}`}</a>
									{/* aqui vou chama a função com on clique onde minha  função vai receber como propriedade o  id*/}
								</div> 
								<div>
									<a className="btnUpdate" href={`/task/update/${task._id}`}><i className="bi bi-pencil-square"></i></a>
									<a className="btnDelete" href={`/task/delete/${task._id}`}><i className="bi bi-trash"></i></a>
								</div>
        			</li>       
          );
        })}
       
      </ul>
    </section>
		</>
	);
}

export default Tasks;