function Concepts(props) {
  return (
    <li className="concept">
      <img src={props.image} alt="Component image" />
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </li>
  );
}

export default Concepts;
