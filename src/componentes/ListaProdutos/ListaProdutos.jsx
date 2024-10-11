import './ListaProdutos.css';

const ListaProdutos=({produtos})=>{
    return(
        <div className='listaprodutos'>
            {produtos.map((produtos,index)=>{
                return(
                    <div key={index}>
                        <ul><li>{produtos}</li></ul>
                       
                    </div>
                )
            })}
        </div>
    )
}
export default ListaProdutos;