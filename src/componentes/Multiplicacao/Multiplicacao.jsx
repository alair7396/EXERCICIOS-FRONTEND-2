import './Multiplicacao.css';

const Multiplicacao=({num1,num2})=>{
    const resultado=(num1*num2)
    return(
        <div className='mult'>
            <h3>Resultado da multiplicação:</h3>
            {resultado}
        </div>
    )
}
export default Multiplicacao;