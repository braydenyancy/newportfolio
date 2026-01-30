import { Routes, Route } from 'react-router-dom';
import Layout from './App/Layout'
import Content from './App/Content'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Content />} />
      </Route>
    </Routes>
  )
}

export default App;
