import './App.css';
import Customsidebar from "./CustomSidebar";
import Header from './Header';
import Body from './Body';
import Explore from './Explore';
import Analysis from './Analysis';
import AddExercise from './AddExercise';
import Contribute from './Contribute';
import UpcomingExercise from './UpcomingExercise';
import CurrentExercise from './CurrentExercise';
import UploadVideo from './UploadVideo';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ProSidebarProvider } from 'react-pro-sidebar';

function App() {
  return (
    <div className="app">

      <Router>
        <Header />
        <div className='app__page'>
          <div>

          <ProSidebarProvider>
            <Customsidebar />
          </ProSidebarProvider>
          </div>
          <div>

          <Routes>
            <Route exact path="/" element={<Body />} />
            <Route path="/uploadVideo" element={<UploadVideo />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/upcomingExercise" element={<UpcomingExercise />} />
            <Route path="/currentExercise" element={<CurrentExercise />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/addExercise" element={<AddExercise />} />
            <Route path="/contribute" element={<Contribute />} />

          </Routes>
          </div>
        </div>
      </Router>
    </div >
  );
}

export default App;
