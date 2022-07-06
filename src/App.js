import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import JobList from "./Pages/JobList/JobList.jsx";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/job" element={<JobList/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
