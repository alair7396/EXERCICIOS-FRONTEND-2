import './Calculadora.css';

const Calculadora=({num1,num2,operacao,operacao2})=>{
    switch (operacao) {
        case 'somar':
            operacao=num1+num2
            operacao2
            break;
        case 'subtrair':
            operacao=num1-num2
        
            break;
        case 'multiplicar':
            operacao=num1*num2

            break;
        default:
            operacao=num1/num2
            break;
    }
    

    return(
        <div className='calcu'>
            <h3>Resultado da operação:</h3>
            {operacao}
        </div>
    )
}
export default Calculadora;
