import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Certicates from './pages/Certificates';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <div className="flex">
                {/* Persistent Navbar */}
                <Navbar />
                
                {/* Content Area: This will display based on the route */}
                <div className="flex-1 "> {/* Adjust for Navbar space */}
                    <Routes>
                        {/* Default Route: Home will be displayed initially */}
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About/>} />
                        <Route path="/Certificates" element={<Certicates/>} />
                        <Route path="/projects" element={<Projects/>} />
                        <Route path="/contact" element={<Contact/>} />
                    </Routes>
                </div>
                
            </div>
        </Router>
    );
}

export default App;
