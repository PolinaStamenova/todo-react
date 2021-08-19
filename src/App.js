/* eslint-disable max-classes-per-file, no-unused-vars, quotes, comma-dangle */

import "./App.css";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <TodoContainer />
        </p>
      </header>
    </div>
  );
}

export default App;
