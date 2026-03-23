import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Navbar";
import './App.css';

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import BookRequest from "./pages/BookRequest";
import EventFeedback from "./pages/EventFeedback";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container-fluid main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookrequest" element={<BookRequest />} />
          <Route path="/eventfeedback" element={<EventFeedback />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;