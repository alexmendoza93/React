import React from 'react';

const CardAprobacion = props =>{
    console.log(props.children);
    return (
        <div className="ui card">
            <div className="content">
                {props.children}
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">
                        aprobado
                    </div>
                    <div className="ui basic red button">
                        rechazado
                    </div>
                </div>

            </div>
        </div>
    )
};

export default CardAprobacion;