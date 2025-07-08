// Snack 1
// import useSwitch from './hooks/useSwitch';

// function App() {
//   const [isOn, toggle] = useSwitch();
//   return (
//     <>
//       <div>
//         <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
//         <button onClick={toggle}>Cambia Stato</button>
//       </div>
//     </>
//   );
// }

// export default App;


// Snack 2
// import useDate from "./hooks/useDate";

// function App() {
//   const currentDate = useDate();

//   return (
//     <div>
//       <h1>Data e ora attuali:</h1>
//       <p>{currentDate.toLocaleString()}</p>
//     </div>
//   );
// }

// export default App;

// Snack 3
// import useCustomPointer from "./hooks/useCustomPointer";

// function App() {
//   const customPointer = useCustomPointer("🔥");

//   return (
//     <div>
//       <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
//       {customPointer}
//     </div>
//   );
// }

// export default App;

// Snack BONUS
import useKeyPress from "./hooks/useKeyPress";

function App() {
  const [key, isPressed] = useKeyPress("Enter");

  return (
    <div>
      <h1>Tieni premuto "{key}" per testare il custom hook</h1>
      <p>{isPressed ? `${key} premuto! ✅` : "Aspettando input... ⌨️"}</p>
    </div>
  );
}

export default App;
