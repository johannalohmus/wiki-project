import logo from './logo.svg';
import './App.css';
import ArticleDisplay from './components/ArticleDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          RabbitHole
        </p>
        <ArticleDisplay />
      </header>
    </div>
  );
}

export default App;
