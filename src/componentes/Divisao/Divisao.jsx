import './Divisao';

const Divisao=({num1,num2}) =>{
    const resultado=(Number(num1)/ Number(num2))
    return(
        <>
            <div>
                <h3>Resultado da divisão:</h3>
                {resultado}
            </div>
        </>
    )
}
export default Divisao;