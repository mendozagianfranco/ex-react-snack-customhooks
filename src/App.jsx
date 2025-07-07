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

import useDate from "./hooks/useDate";

function App() {
  const currentDate = useDate();

  return (
    <div>
      <h1>Data e ora attuali:</h1>
      <p>{currentDate.toLocaleString()}</p>
    </div>
  );
}

export default App;