import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import NotFound from './pages/not_found/NotFound'
import HelloWorld from './pages/hello_world/HelloWorld'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/helloworld' element={<HelloWorld/>} />
      </Routes>
    </Router>
  )
}

export default App
