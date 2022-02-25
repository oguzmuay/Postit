import './App.css';
import Navbar from './Components/navbar/Navbar';
import ProjectController from './Components/projectcontroller/ProjectController'
import CurrentProject from './Components/currentproject/CurrentProject'


function App() {
  return (
  <div className='root'>
    <Navbar></Navbar>
      <div className='middle-container'>
        <div className='content-container'>
          <ProjectController></ProjectController>
          <CurrentProject></CurrentProject>
        </div>
      </div> 
  </div>
  );
}

export default App;

//En ust kisim icin position sticky yi kullanmayi dene