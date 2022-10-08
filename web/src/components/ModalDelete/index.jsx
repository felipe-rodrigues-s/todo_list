// import "./styles";

function ModalDelete(props) {
  return (
    <>
      <section id="modal">
        <div id="card">
          <a id="close" href="/home">
            <i class="bi bi-x"></i>
          </a>
          <h2>Confirmação</h2>
          <hr />
          <p>Deseja realmente apagar a tarefa: taskDelete.task ?</p>
          <div id="btns">
            <a id="btnNot" href="/home">
              Não
            </a>
            <a id="btnYes" href={`/home/deleteOneTask/${props.id}`}>
              Sim
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ModalDelete;
