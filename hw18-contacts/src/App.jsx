
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Contacts from './components/Contacts'

function App() {
 

  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
          <div className="content">
            <Routes>
              <Route path='/contacts' element={<Contacts/>}/>
            </Routes>
          </div>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
