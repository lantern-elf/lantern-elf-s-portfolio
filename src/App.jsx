import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '@fortawesome/fontawesome-svg-core/styles.css'; 
import Home from './pages/home/Home'
import Artworks from './pages/artworks/Artworks'
import About from './pages/about/About'
import HelloWorld from './pages/hello_world/HelloWorld'
import NotFound from './pages/not_found/NotFound'
import Codes from './pages/codes/codes'
import LoadingScreen from './components/loading_screen/LoadingScreen';

const App = () => {
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 4000)
  }, [])

  if(loading){
    return (
      <LoadingScreen />
    )
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/artworks' element={<Artworks />} />
        <Route path='/codes' element={<Codes />} />
        <Route path='/about' element={<About />} />
        <Route path='/helloworld' element={<HelloWorld />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
