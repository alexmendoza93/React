import React from 'react';
import faker from 'faker';

const Comentario = props =>{
    console.log(props);
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="imagen avatar" src={props.img} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">
                            {props.timeAgo}
                        </span>
                    </div>
                    <div className="text">
                        {props.comment}
                        </div>
                </div>
            </div>
    )
};

export default Comentario;