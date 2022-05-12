import { useState } from 'react'
import checkEntries from './checkEntries'
import newEntry from './newEntry'

const App = () => {
  const [entries, setEntries] = useState([
    { name: 'Arto Hellas', number: '040123123' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [comparator, setComparator] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addEntry = (event) => {
    event.preventDefault()
    if(checkEntries(entries, newName) === true){alert(`${newName} is already on the phonebook.`); return;}
    const newEntryObject = newEntry(newName, newNumber)
    setEntries(entries.concat(newEntryObject))
    setNewName('')
    setNewNumber('')
  }

  const entriesToShow = showAll
  ? entries
  : entries.filter(entry => entry.name.includes(comparator))

  const handleComparatorChange = (event) => {
    setComparator(event.target.value)
    if(comparator != ''){
      setShowAll(false)
    } else setShowAll(true)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const Entry = ({ entry }) => {
    return (
      <li>{entry.name}, {entry.number}</li>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          <p>Filter shown with</p>
          <input value={comparator} onChange={handleComparatorChange}></input>
        </div>
      </form>
      <h3>Add a new phonebook entry</h3>
      <form onSubmit={addEntry}>
        <div>
          <p>name: </p>
          <input value={newName} onChange={handleNameChange}></input>
        </div>
        <div>
          <p>number: </p>
          <input value={newNumber} onChange={handleNumberChange}></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Entries</h3>
      <ul>
        {entriesToShow.map(entry => <Entry key={entry.name} entry ={entry}/>)}
      </ul>
    </div>
  )

}

export default App