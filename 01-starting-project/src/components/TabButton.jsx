// export default function TabButton(props) {
//     return <li><button>{props.children}</button></li>
// }

export default function TabButton({ children, onSelect, isSelected }) {
      console.log('TABBUTTON COMPONENT EXECUTING');

    // function handleClick() {
    //     console.log('Hello World!');
    // }

    return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

// export default function TabButton({ label }) {
//   return (
//     <li>
//       <button>{label}</button>
//     </li>
//   );
// }
