import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout.tsx';
import Content from './Components/Content.tsx';
import Resume from './Components/Resume.tsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Content />} />
        <Route path='resume' element={<Resume />} />
      </Route>
    </Routes>
  )
}

export default App;
