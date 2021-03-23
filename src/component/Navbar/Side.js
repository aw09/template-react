import React, { useState } from 'react';


// !  -----USE CHILD FOR THIS NAVBAR----------

const Side = (props) => {
    const [index, setIndex] = useState(1);
    const selected = " text-white"
    return (
        <div className="flex">
            <nav className="bg-black w-3/12 h-screen text-gray-400 overflow-x-hidden flex-shrink-0">
                <ul>
                    <li value="1" className={"p-6" + (index==1 ? selected : "")  }><button onClick={()=>setIndex(1)}>TES</button></li>
                    <li value="2" className={"p-6" + (index==2 ? selected : "") }><button onClick={()=>setIndex(2)}>TES</button></li>
                    <li value="3" className={"p-6" + (index==3 ? selected : "") }><button onClick={()=>setIndex(3)}>TES</button></li>
                    <li value="4" className={"p-6" + (index==4 ? selected : "")  }><button onClick={()=>setIndex(4)}>TES</button></li>
                </ul>
            </nav>
            <div className="flex-initial p-5">{props.children}</div>
        </div>
    );
};

export default Side;