import "./App.css";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <TodoContainer />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
    </div>
  );
}

export default App;
