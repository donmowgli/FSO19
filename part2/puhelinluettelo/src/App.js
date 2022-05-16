import { useEffect, useState } from 'react'
import checkEntries from './checkEntries'
import newEntry from './newEntry'
import entryService from './services/entries'

const App = () => {
  const [entries, setEntries] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [comparator, setComparator] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    updateEntries()
  }, [])

  const updateEntries = () => {
    entryService
    .getAll()
    .then(initialEntries => {
      setEntries(initialEntries)
    })
  }

  const updateEntry = () => {
    if(window.confirm('Name ' + newName + ' is already on the list. Want to update the new number to the existing name entry?')){
      entries.forEach(ent => {
        if(ent.name === newName) {entryService.update(ent.id, newEntry(newName, newNumber))}
      })
    }
    updateEntries()
  }

  const addEntry = (event) => {
    event.preventDefault()
    if(checkEntries(entries, newName) === true){updateEntry(); return;}
    const newEntryObject = newEntry(newName, newNumber)
    entryService.create(newEntryObject)
    updateEntries()
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

  const handleDelete = (entry) => {
    if(window.confirm('Delete ' + entry.name + '?')){
      entryService.remove(entry.id)
      updateEntries()
    }
  }

  const Entry = ({ entry }) => {
    return (
      <div>
        <li>{entry.name}, {entry.number}</li>
        <button onClick={() => {handleDelete(entry)}}>delete</button>
      </div>
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
        {entriesToShow.map(entry => <Entry key={entry.id} entry ={entry}/>)}
      </ul>
    </div>
  )

}

export default App