import { useState, useEffect} from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personConnect from './services'
import Execute from './components/Execute'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchName, setSearchName] = useState('')
  const [executeMessage, setExecuteMessage] = useState(null)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    personConnect
        .getAll()
        .then(data => {
          setPersons(data)
          console.log(persons.length)
        })
  }, [])
  const handlePersonDelete = (id) => {
    personConnect.remove(id).then((response) => {
      if(response===undefined){
        return
      }
      else{
      setPersons(persons.filter(p => p.id !== id))
    }
    })}

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)

  }
   const handleNumberChange = (event) =>{
    setNewPhone(event.target.value)
    console.log(newPhone)
  }
  const handleSearchName = (event) => {
    console.log(event.target.value)
    setSearchName(event.target.value)
  }
  const addPerson = (event) => {
    event.preventDefault()
    if(persons.some(person => person.name === newName && person.number === newPhone)){
    alert(`${newName} already exists!`)
  }
    else if(persons.some(person => person.name === newName && person.number !== newPhone)){
      if(window.confirm(`${newName} is already added to the phonebook replace phone number with a new one?`)){
        const newObject = {
          name: newName,
          number: newPhone,
        }
        const person = persons.find(p => p.name === newName)
  
        personConnect
          .update(person.id , newObject)
          .then(updatedPerson => {setPersons(persons.map(p => p.id !== person.id ? p : updatedPerson))
                setExecuteMessage(`${person.name}'s phone number has been updated`)
                setTimeout(() => setExecuteMessage(null), 5000 
              )})
          .catch(error => {
                setIsError(true)
                setExecuteMessage(`${person.name}'s information has already been removed`)
                 setTimeout(() => {setExecuteMessage(null)
                 setIsError(false)}  , 5000) 
                 
              })
                
    }
  } 
  else{
    const nameObject = {
      name: newName,
      number: newPhone
    }
    personConnect
      .create(nameObject)
      .then(data => {
        setPersons(persons.concat(data))
        setExecuteMessage(`Added ${data.name}`)
        setTimeout(() => setExecuteMessage(null), 5000 )
      }).catch(error => {
        setIsError(true)
        setExecuteMessage(error.response.data.error)
        setTimeout(() => {setExecuteMessage(null)
          setIsError(false)
        }, 5000)
      })
  }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Execute message= {executeMessage} isError={isError}/>
      <Filter searchName = {searchName} handleSearchName = {handleSearchName}/>
      <div>
        <h2>add a new</h2>
      </div>
      <PersonForm addPerson = {addPerson} newName= {newName} newPhone = {newPhone} handleNumberChange = {handleNumberChange} handlePersonChange = {handlePersonChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} searchName={searchName} handlePersonDelete={handlePersonDelete}/>
    </div>
  )
}

export default App