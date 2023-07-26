import './App.css';
import Information from './component/Information';
import { Route, Routes } from 'react-router-dom';
import Experience from './component/Experience';
import Description from './component/Description';
import Summary from './component/Summary';
import Education from './component/education';
import Technical from './component/Technical';
import Skills from './component/skills'
import Languages from './component/languages'
import Hobies from './component/Hobies'
import Yourcv from './component/youcv';
import Reference from './component/Reference';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Information />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/description" element={<Description />}></Route>
        <Route path="/summary" element={<Summary />}></Route>
        <Route path="/education" element={<Education />}></Route>
        <Route path="/technical" element={<Technical />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/languages" element={<Languages />}></Route>
        <Route path="/hobbies" element={<Hobies />}></Route>
        <Route path="/yourcv" element={<Yourcv />}></Route>
        <Route path='/reference' element={<Reference />}></Route>
      </Routes>
    </div >
  );
}

export default App;
