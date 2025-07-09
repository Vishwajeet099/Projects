import './App.css';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <h1 className="title">My 3D Portfolio</h1>
      <div className="canvas-container">
        <Experience />
      </div>
    </div>
  );
}

export default App;
