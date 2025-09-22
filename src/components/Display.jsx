import Button from "./Button"

const Display = ({id, name, number, handlePersonDelete}) => {
  return(
    <div>
      <p>{name} {number}</p>
      <Button id = {id} handlePersonDelete = {handlePersonDelete}/>
    </div>
  )
}

export default Display