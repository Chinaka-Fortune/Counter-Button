import { BrouserRouter as Router, Routes, Route } from 'react-router-dom';
import ButtonComponent from './ButtonComponent'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={ <ButtonComponent /> } ></Route>
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
