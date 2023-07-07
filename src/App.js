import './App.css';
import MatchCarousel from './components/MatchCarousel';

function App() {
  return (
    <div className="App">
      <MatchCarousel
        max={10}
        sportId={0}
      />
    </div>
  );
}

export default App;
