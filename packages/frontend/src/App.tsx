import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout.tsx';
import Content from './Components/Content.tsx';
import Resume from './Components/Resume.tsx';
import Projects from './Components/Projects.tsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Content />} />
        <Route path='resume' element={<Resume />} />
        <Route path='projects' element={<Projects />} />
      </Route>
    </Routes>
  )
}

export default App;
