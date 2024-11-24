import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Student from "./pages/Student";
import Faculty from "./pages/Faculty";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Placement from "./pages/Placement";
import Research from "./pages/Research";
import Academic from "./pages/Academic";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
// this the app component
export default function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/student" element={<Student />}></Route>
          <Route exact path="/faculty" element={<Faculty />}></Route>
          <Route exact path="/placement" element={<Placement />}></Route>
          <Route exact path="/research" element={<Research />}></Route>
          <Route exact path="/academic" element={<Academic />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
