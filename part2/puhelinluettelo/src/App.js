import { useState } from 'react'

const App = () => {
  const [entries, setEntries] = useState([
    { name: 'Arto Hellas', number: '040123123' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addEntry = (event) => {
    event.preventDefault()
    if(checkEntries() === true){alert('${newName} is already on the phonebook.'); return}
    const entryObject = {
      name: newName,
      number: newNumber
    }
    setEntries(entries.concat(entryObject))
    setNewName('')
    setNewNumber('')
  }

  const checkEntries = () => {
    const names = []
    names.concat(entries)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
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
      <h2>Entries</h2>
      <ul>
        {entries.map(entry => <Entry entry ={entry}/>)}
      </ul>
    </div>
  )

}

export default App