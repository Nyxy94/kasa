import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Error from './pages/Error/Error'
import Host from './pages/Host/Host'
import "./app.scss"


function App() {
  return (
    <Router>
      
      <div className="container">
        <Header />
        <Routes>
          <Route path="/host/:id" element={<Host />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
