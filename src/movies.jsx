import React from 'react';

function movies(props) {
    return (
        <div className='movie1'>
             <img src={props.img} alt="" />
             <p className='title'>Title {props.title} </p>
             <p className='title'> Year {props.year}
             </p>
        </div>
    );
}

export default movies;