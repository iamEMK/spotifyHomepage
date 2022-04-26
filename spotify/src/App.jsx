import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './header'
import MainContent from './mainContent'
import Footer from './footer'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
    <Header/>
    <MainContent/>
    <Footer/>
    </div>
  ) 
}

export default App
