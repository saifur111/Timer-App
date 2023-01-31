import logo from './logo.svg';
import './App.css';
import Input from './containers/Input';
import View from './containers/View';

function App() {
  return (
    <div className="App">
      <div className="Mid">
          <h1>COUNTDOWN TIMER</h1>
          <Input />
          <View />
        </div>
    </div>
  );
}

export default App;
