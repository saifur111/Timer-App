import logo from "./logo.svg";
import "./App.css";
import Input from "./containers/Input";
import View from "./containers/View";

function App() {
  return (
    <div className="App">
      <div className="first">
        <h1>COUNTDOWN TIMER</h1>
        <Input />
        <View />
        <br />
        <span><a href="https://github.com/saifur111/Timer-App">Please Visit Timer-App Source Code</a></span>
      </div>
    </div>
  );
}

export default App;
