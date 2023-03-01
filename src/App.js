import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About id="about" />
      <Experience />
    </div>
  );
}

export default App;
