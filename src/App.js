import './App.css';
import BackgroundComp from "./Components/BackgroundComp"
import Title from "./Title"
import BackgroundColor from "./Components/BackgroundColor"
import AddNewTodo from "./Components/AddNewTodo"

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
