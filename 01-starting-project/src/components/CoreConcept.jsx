


//in React component functions, you only accept 1 parameter which is called props
// props paramter will be set by React because React executes this function
// an object is passed to this function as a parameter
// the object has all these key value pairs.

// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

// you can use {} instead of props parameter
// { and } are used to destructure the first parameter of this function
export default function CoreConcept({image, title, description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}