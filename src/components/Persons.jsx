import Display from "./Display"

const Persons = ({persons, searchName, handlePersonDelete}) => {
  return(
      <div>
        {console.log("Persons:", persons)}
        {persons.filter(p => p.name.toLowerCase().includes(searchName.toLowerCase()))
        .map(p => <Display key={p.id} id={p.id} name={p.name} phone={p.phone} handlePersonDelete={handlePersonDelete}/>)}
      </div>
  )
}

export default Persons