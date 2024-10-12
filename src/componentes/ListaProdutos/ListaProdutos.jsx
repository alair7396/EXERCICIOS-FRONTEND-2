import './ListaProdutos.css';

const ListaProdutos=({produtos})=>{
    return(
        <div className='listaprodutos'>
            {produtos.map((produto,index)=>{
                return(
                    <div key={index}>
                        <ul><li>{produto}</li></ul>
                       
                    </div>
                )
            })}
        </div>
    )
}
export default ListaProdutos;