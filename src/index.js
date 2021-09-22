import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import Comentario from './Comentario'

const App = () => {
    return (
        <div className="ui container comments">
        <Comentario author="Alex"/>
        <Comentario author="Jovanni"/>
        <Comentario author="Edgar"/>
        <Comentario author="Israel"/>
        <Comentario author="Ramses"/>

        </div>
    )
};

ReactDom.render(<App/>, document.querySelector('#root'))