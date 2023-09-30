import './App.css';

// components
import Header from './components/Header.jsx';
import Main from './components/Main';
import About from './components/About';
import Features from './components/Features';
import AboutFeature from './components/AboutFeatures';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* Eng/Fatma Mustafa  */}
      <About />
      <Features />
      <AboutFeature />
    </div>
  );
}

export default App;
