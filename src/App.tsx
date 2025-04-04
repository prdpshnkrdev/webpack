import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Home = () => (
  <>
    <h2>Home</h2>
    {console.log(process.env.REACT_APP_API_URL)}
  </>
);
const About = () => <h2>About</h2>;

const App = () => (
  <BrowserRouter>
    <nav>
      <Link to="/">Home</Link> |<Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<h2>404 Not Found</h2>} />
    </Routes>
  </BrowserRouter>
);

export default App;
