import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import Comentario from './Comentario';
import CardAprobacion from './CardAprobacion';

const App = () => {
    return (
        <div className="ui container comments">
        <CardAprobacion>
            <Comentario author="Alex" img={faker.image.avatar()} timeAgo="Hace 1 hora" comment="genial"/>
        </CardAprobacion>
        <CardAprobacion>
            <Comentario author="Jovanni" img={faker.image.avatar()} timeAgo="Hace 3 dias" comment="super loco"/>
        </CardAprobacion>
        <CardAprobacion>
            <Comentario author="Edgar" img={faker.image.avatar()} timeAgo="Hace 1 semana" comment="me encanto"/>
        </CardAprobacion>
        <CardAprobacion>
            <Comentario author="Israel" img={faker.image.avatar()} timeAgo="Hace 2 años" comment="no estuvo tan bueno"/>
        </CardAprobacion>
        <CardAprobacion>
            <Comentario author="Ramses" img={faker.image.avatar()} timeAgo="Hace 1 minuto" comment="wow es impresionante"/>
        </CardAprobacion>

        </div>
    )
};

ReactDom.render(<App/>, document.querySelector('#root'))