import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Education from './Components/Education/Education';
import Skills from './Components/Skills/Skills';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="background-animation">
      <About />
      <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
      </div>
      <Education />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
