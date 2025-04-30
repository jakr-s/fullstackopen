import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import db from './services/db'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchFor, setSearchFor] = useState('')
  const [displayMessage, setDisplayMessage] = useState(null)

  useEffect(() => {
    db.getAll()
      .then((personsData) => {
        setPersons(personsData)
      })
      .catch((error) => console.log(error))
  }, [])

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleSearchFor = (event) => setSearchFor(event.target.value)

  const showMessage = (text, isError = false) => {
    setDisplayMessage({ text, isError })
    setTimeout(() => {
      setDisplayMessage(null)
    }, 5000)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    const duplicatePerson = persons.find((person) => person.name === newName)

    if (duplicatePerson) {
      const confirmMessage = `${duplicatePerson.name} is already added to the phonebook, replace the old number with a new one?`

      if (window.confirm(confirmMessage)) {
        const updatedPerson = {
          ...duplicatePerson,
          number: newNumber
        }

        db.update(duplicatePerson.id, updatedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== duplicatePerson.id ? person : returnedPerson
              )
            )
            showMessage(`${newName}'s number was changed to ${newNumber}`)
          })
          .catch((error) => console.log(error))
      }

      return
    }

    db.create(personObject)
      .then((newPerson) => {
        setPersons(persons.concat(newPerson))
        showMessage(`Added ${newPerson.name}`)
      })
      .catch((error) => console.log(error))

    setNewName('')
    setNewNumber('')
  }

  const removePerson = (id) => {
    const person = persons.find((person) => person.id === id)

    if (window.confirm(`Delete ${person.name}?`)) {
      db.remove(id)
        .then(() => {
          setPersons(
            persons.filter((prevPerson) => prevPerson.id !== person.id)
          )
          showMessage(`${person.name} was removed from the phonebook`)
        })
        .catch((error) => {
          console.log(error)
          setPersons(persons.filter((prevPerson) => prevPerson.id !== id))
          showMessage(
            `${person.name} was already deleted from the server`,
            true
          )
        })
    } else {
      return
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={displayMessage} />
      <Filter searchFor={searchFor} handleSearchFor={handleSearchFor} />

      <h2>add a new</h2>
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons
        searchFor={searchFor}
        persons={persons}
        removePerson={removePerson}
      />
    </div>
  )
}

export default App
