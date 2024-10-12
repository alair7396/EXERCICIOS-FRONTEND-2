import './NumerosPares.css'; 

const NumerosPares=({numeros})=>{
    const numeroPares=numeros.filter(numero => numero%2===0)
    return(
        <>
        <div className='pares'>{numeroPares.map((pares,index)=>{
            return(
                <div key={index}>

                    <ul><li>{pares}</li></ul>
                    
                </div>
            )
        })}</div>
        </>
    )
}

export default NumerosPares;