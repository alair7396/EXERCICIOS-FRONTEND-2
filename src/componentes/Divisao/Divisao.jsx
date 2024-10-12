import './Divisao.css';

const Divisao=({num1,num2}) =>{
    const resultado=(Number(num1)/ Number(num2))
    return(
        <>
            <div className='divisao'>
                <h3>Resultado da divisão:</h3>
                <h2>{resultado}</h2>
                
            </div>
        </>
    )
}
export default Divisao;