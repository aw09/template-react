import React, { useState } from 'react';

const Top = () => {
    const [index, setIndex] = useState(1);
    const selected = " bg-white"
    return (
        <nav className="bg-blue-500 p-5">
            <ul className="flex">
                <li value="1" className={"inline px-6" + (index==1 ? selected : "")  }><button onClick={()=>setIndex(1)}>TES</button></li>
                <li value="2" className={"inline px-6" + (index==2 ? selected : "") }><button onClick={()=>setIndex(2)}>TES</button></li>
                <li value="3" className={"inline px-6" + (index==3 ? selected : "") }><button onClick={()=>setIndex(3)}>TES</button></li>
                <li value="4" className={"inline px-6" + (index==4 ? selected : "")  }><button onClick={()=>setIndex(4)}>TES</button></li>
            </ul>
        </nav>
    );
};

export default Top;