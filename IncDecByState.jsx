import React, { useState } from 'react';
import Usestate from './FunctionCompo/Usestate';

function IncDecByState(props) {
    const [count,SetCount] =useState(0);

    const btn=()=>{
        // console.log("kk");
        SetCount(count+1)
    }
    const btn1=()=>{
      SetCount(count-1)
    }
    return (
        <div>
           <div className="container">
            <div className="row mt-5">
                <div className="col d-flex gap-3">
                    <button className='btn btn-secondary' onClick={btn1}>-</button>     
                       <h1>{count}</h1>
                       <button className='btn btn-primary ' onClick={btn}>+</button>
                      
                </div>
            </div>
           </div>
        </div>
    );
}

export default IncDecByState;