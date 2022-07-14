import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState(["Gabriel", "Herik", "Everson", "Ricardo"]);

  function addToList() {
    setTimeout(() => {
      setList(state => [...state, newItem])
    }, 500)
  }

  return (
    <>
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        type="text"
        placeholder="Digite para inserir na lista"
      />
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
