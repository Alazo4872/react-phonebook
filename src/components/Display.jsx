import Button from "./Button"

const Display = ({id, name, phone, handlePersonDelete}) => {
  return(
    <div>
      <p>{name} {phone}</p>
      <Button id = {id} handlePersonDelete = {handlePersonDelete}/>
    </div>
  )
}

export default Display