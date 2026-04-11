import DataProvide from "./Context.jsx"
import './App.css'
import Card from './Card'

function App() {
  return (
    <DataProvide>
      <Card />
    </DataProvide>
  )
}

export default App