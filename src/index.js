import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import Comentario from './Comentario'

const App = () => {
    return (
        <div className="ui container comments">
        <Comentario author="Alex" img={faker.image.avatar()} timeAgo="Hace 1 hora" comment="genial"/>
        <Comentario author="Jovanni" img={faker.image.avatar()} timeAgo="Hace 3 dias" comment="super loco"/>
        <Comentario author="Edgar" img={faker.image.avatar()} timeAgo="Hace 1 semana" comment="me encanto"/>
        <Comentario author="Israel" img={faker.image.avatar()} timeAgo="Hace 2 años" comment="no estuvo tan bueno"/>
        <Comentario author="Ramses" img={faker.image.avatar()} timeAgo="Hace 1 minuto" comment="wow es impresionante"/>

        </div>
    )
};

ReactDom.render(<App/>, document.querySelector('#root'))