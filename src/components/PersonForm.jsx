const PersonForm = (props) => {
  return(
    <form onSubmit={props.addPerson}>
        <div>
          name: <input onChange={props.handlePersonChange} value={props.newName}/>
        </div>
        <div>
          phone: <input onChange={props.handleNumberChange} value={props.newPhone}></input>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
  )
}

export default PersonForm