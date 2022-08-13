import { Route, Routes } from 'react-router-dom';
import './App.css';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Resume from './components/Resume/Resume';

export default function App() {
    return (
        <div className="App">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="works" element={<Works />} />
                    <Route path="resume" element={<Resume />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </div>
        </div>
    );
}
