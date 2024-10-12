import './NumerosImpares.css';

const NumerosImpares = ({numerosimpar}) => {
    const numerosImpares=numerosimpar.filter(verificacadanumerodoArrey=>verificacadanumerodoArrey%2 !=0)
    return (
        <div className='numerosimpares'>
        {numerosImpares.map((impar,index) =>{
            return(
                <div key={index} >
                   <ul><li>{impar}</li></ul>
                </div>
            )
        })}
        </div>
    )
}

export default NumerosImpares;