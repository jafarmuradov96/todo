import './App.css';
import Todo from '../src/components/todo/Todo';

function App() {


  return (
    <div className="page">
      <header className="header">
          <h1>TODO LIST</h1>
      </header>
      <main>
          <Todo  />
      </main>
      
    </div>
  );
}

export default App;
