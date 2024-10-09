import './Subtracao.css';

const Subtracao=({num1,num2}) =>{
    const resultado=(num1-num2)
return(
    <>
        <div className='sub'>
            <h3>Resultado da subtração:</h3>
            {resultado}

        </div>




    </>
)
}
export default Subtracao;