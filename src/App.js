/* eslint no-use-before-define: 0 */
import CreateJob from "./pages/CreateJob";
import JobList from "./pages/JobList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './index.css'

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<CreateJob />} />
      <Route path='/list' element={<JobList />} />
    </Routes>
     </Router>
  );
}

export default App;
