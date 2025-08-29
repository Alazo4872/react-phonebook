const Filter = (props) => {
 return( 
  <div>
    filter shown with <input onChange={props.handleSearchName} value={props.searchName}></input>
  </div>
 )
}

export default Filter 
