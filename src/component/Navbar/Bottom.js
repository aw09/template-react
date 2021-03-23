import React, { useState } from 'react';


// !  -----USE CHILD FOR THIS NAVBAR----------

const Bottom = (props) => {
    const [index, setIndex] = useState(1);
    const selected = " bg-white"
    return (
        <div className="max-w-full">
            <div className="h-11/12 overflow-scroll">{props.children}</div>
            <nav className="bg-blue-500 p-5 bottom-0 w-screen h-1/12 fixed text-center">
                <ul>
                    <li value="1" className={"inline p-6" + (index==1 ? selected : "")  }><button onClick={()=>setIndex(1)}>TES</button></li>
                    <li value="2" className={"inline p-6" + (index==2 ? selected : "") }><button onClick={()=>setIndex(2)}>TES</button></li>
                    <li value="3" className={"inline p-6" + (index==3 ? selected : "") }><button onClick={()=>setIndex(3)}>TES</button></li>
                    <li value="4" className={"inline p-6" + (index==4 ? selected : "")  }><button onClick={()=>setIndex(4)}>TES</button></li>
                </ul>
            </nav>
        </div>
    );
};

export default Bottom;