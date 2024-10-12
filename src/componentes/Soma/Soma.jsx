import './Soma.css';

const Soma=({num1,num2})=>{
    const resultado=(num1+num2)
    return(
        <>
            <div className='soma'>
                <h3>Resultado da soma:</h3>
                {resultado}




            </div>
        </>
    )
}
export default Soma;