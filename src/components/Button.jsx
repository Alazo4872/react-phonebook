
const Button = ({id, handlePersonDelete}) => {
{console.log(id)}

 return (
    <button onClick={() => handlePersonDelete(id)}>Delete</button>
 )
}

export default Button