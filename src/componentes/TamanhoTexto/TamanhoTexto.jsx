import './TamanhoTexto.css';

const TamanhoTexto=({texto})=>{
    return(

        <div className='text'>
            
            <h1>A palavra {texto} contém {texto.length} caracteres. </h1> 
           
        </div>
    )
}
export default TamanhoTexto;