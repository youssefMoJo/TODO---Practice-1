import './App.css';
import BackgroundComp from "./BackgroundComp"
import Title from "./Title"
import BackgroundColor from "./BackgroundColor"
import AddNewTodo from "./AddNewTodo"

function App() {
  return (
    <div className="App">
      <BackgroundComp />
      <BackgroundColor />
      <Title />
      <AddNewTodo />

    </div>
  );
}

export default App;
