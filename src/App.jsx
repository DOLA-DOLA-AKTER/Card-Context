import DataProvide from "./Context.jsx"
import './App.css'
import Card from './Card'
import Button from "./Button.jsx"

function App() {
  return (
    <DataProvide>
      <Button />
      <Card />
    </DataProvide>
  )
}

export default App