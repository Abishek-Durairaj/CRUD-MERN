
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Dashboard from './Dashboard';
import Update from './Update';
import Add from './Add';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}> </Route>
        <Route path="/update/:id" element={<Update/>}> </Route>
        <Route path="/create" element={<Add/>}> </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
