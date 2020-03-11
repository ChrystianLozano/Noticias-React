import React from 'react';
import Noticia from './Noticia'
const ListadoNoticias = ({noticias}) => {
    return ( 
        <div className="row">
            {noticias.map(noticias => (
                    <Noticia />
            ))}
        </div>
     );
}
 
export default ListadoNoticias;