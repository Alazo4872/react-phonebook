const Execute = ({message, isError})  => {

    if (message === null){
        return null
    }

    const className = isError ? 'error' : 'exec'
    
    return(
        <div className={className}>
            {message}
        </div>
    )
}

export default Execute
