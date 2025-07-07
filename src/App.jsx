import './App.css'
import HomePage from './pages/HomePage'
import {useState, useEffect} from 'react'
import LoadingScreen from './components/LoadingScreen'
function App() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3000)

        return () => clearTimeout(timer) 
    }, [])


  return (
    <>  
   
       {loading ? <LoadingScreen /> : <HomePage />}
      
    </>
  )
}



export default App
