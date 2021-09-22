import React from 'react';
import faker from 'faker';

const Comentario = props =>{
    console.log(props);
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="imagen avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">
                            hace 1 minuto
                        </span>
                    </div>
                    <div className="text">Me gusto mucho el blog</div>
                </div>
            </div>
    )
};

export default Comentario;