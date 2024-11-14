
import './App.css';
import DroneList from './components/DroneList';
import Query from './components/Query';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <DroneList/>
          <Query/>
      </header>
    </div>
  );
}

export default App;
