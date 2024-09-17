import './App.css'
import Footerr from './components/Footer/Footerr'
import Header from './components/header/Header'
import Home from './components/Home/Home'
import { useEffect , useState} from 'react'

function App() {
  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode"))
  }
  const [dark, setMode] = useState(getMode())
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark))
  }, [dark])

  return (
    <div className={dark ? "app" : "light"}>
      <Header dark={dark} setMode={setMode}/>
      <Home/>
      <Footerr/>
    </div>
  )
}

export default App
