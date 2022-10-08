// import "./styles";

function Header(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <form action={props.action} method={props.method}>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Nome da tarefa"
          defaultValue={props.value}
        />
        <button type="submit" id={props.id}>
          {props.button}
        </button>
      </form>
    </>
  );
}

export default Header;
