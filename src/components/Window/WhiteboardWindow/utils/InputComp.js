import React, { forwardRef, useState } from 'react'

const InputComp = forwardRef(({ oldtitle }, titleRef) => {

    const [newTitle, setNewTitle] = useState(titleRef.current ? titleRef.current : oldtitle);

    function handleInputChange(e){
        titleRef.current = e.target.value;
        setNewTitle(e.target.value);
    }

    return (
        <input type="text" name="newWhiteboard" placeholder="Untitled"
            autoComplete="off" maxLength="35" onChange={handleInputChange} value={newTitle}/>
    )
});

export default InputComp;