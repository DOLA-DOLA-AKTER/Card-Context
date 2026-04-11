import './App.css'
import BtnContext from './Context/BtnContext'
import CardContex from './Context/CardContex'
import ContextProvider from './Context/Context'

function App() {

  return (
    <ContextProvider>
      <BtnContext />
      <CardContex />
    </ContextProvider>
  )
}

export default App
