import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/main'
import NotFound from './pages/NotFound'

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path='/'element={<Main />} />
        <Route path='*'element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
