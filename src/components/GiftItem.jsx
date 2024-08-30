//componente que devuelve los gifs con sus titulos
//Exportamos la función al GifGrid
export const GifItem = ({title, url}) => {
    return ( 
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
}