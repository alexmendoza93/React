import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import Comentario from './Comentario'

const App = () => {
    return (
        <div className="ui container comments">
        <Comentario />
        <Comentario />
        <Comentario />
        <Comentario />
        <Comentario />

        </div>
    )
};

ReactDom.render(<App/>, document.querySelector('#root'))