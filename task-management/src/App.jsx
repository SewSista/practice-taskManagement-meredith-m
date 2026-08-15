import { Routes, Route } from 'react-router';
import TaskDetail from './components.TaskDetail';
import TaskList from './components.TaskList';
import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path="/Task" element={<TaskList />} />
        <Route path="/Details" element={<TaskDetail />} />
      </Routes>
    </>
  )
}

export default App
