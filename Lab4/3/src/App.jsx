import { useState } from 'react'
import './App.css'
import ItemList from './ItemList'

function App() {
  const [items, setItems] = useState(['Apple', 'Banana'])

  function addItem() {
    const newItem = 'Item ' + (items.length + 1)
    setItems([...items, newItem])
  }

  function deleteItem(index) {
    const updatedItems = items.filter((item, i) => i !== index)
    setItems(updatedItems)
  }

  return (
    <div className="container">
      <h1>Item List</h1>
      <ItemList items={items} addItem={addItem} deleteItem={deleteItem} />
    </div>
  )
}

export default App
