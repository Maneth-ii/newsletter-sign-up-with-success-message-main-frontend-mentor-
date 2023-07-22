import './App.css'
import Form from './pages/Form'
import Success from './pages/Success'
import {Routes , Route} from 'react-router-dom'

function App() {

  return (
    <>
     <Routes>
        <Route path='/' element={<Form />}/>
        <Route path='/success' element={<Success />}/>
     </Routes>
    </>
  )
}

export default App
