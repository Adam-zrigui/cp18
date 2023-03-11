import '@/styles/App.scss'
import { Routes, Route} from 'react-router-dom'
import Home from '@/layout/Home'
import Nav from '@/layout/Nav'
import Details from '@/layout/Details'
import Form from '@/layout/Form'
function App() {
  return (
    <>
<Nav />
<Routes>
<Route path='/' element={<Home />}/>
<Route path='*' element={<Home />}/>
<Route path='/details' element={<Details />}/>
<Route path='/form' element={<Form />}/>
</Routes>
    </>
  )
}

export default App
