import React, { useState } from 'react'

const GridName = (({ value, currKey }) => {

    const [inputVal, setInputVal] = useState(value);

    function handleKey(e) {
        if (e.key === 'Enter') { e.target.blur(); }
    }

    return (
        <>
            <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} name={currKey} onKeyPress={handleKey} />
            <i className="fa-solid fa-xmark" onClick={(() => setInputVal(""))}></i>
        </>
    )
});

export default GridName;