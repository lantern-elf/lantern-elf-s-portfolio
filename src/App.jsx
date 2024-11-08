import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/main'
import NotFound from './pages/NotFound'
import HelloWorld from './pages/HelloWorld';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path='/'element={<Main />} />
        <Route path='/helloworld'element={<HelloWorld />} />
        <Route path='*'element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
