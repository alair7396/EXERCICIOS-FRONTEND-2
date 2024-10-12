import './NomesOrdenados.css';

const NomesOrdenados=({nomes})=>{
    const ordemalfabetica=nomes.sort()
    return(
        <div className='ordem'>{ordemalfabetica.map((ordem,index)=>{
            return(

            <div key={index}>
                <h2><ul><li>{ordem}</li></ul></h2>
            </div>

        )})}</div>
    )
}
export default NomesOrdenados;