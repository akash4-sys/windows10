import React, { useState } from 'react'

function AddressbarInput({ windowName, Input }) {

    const [ addressBarInput, setAddressBarInput ] = useState(windowName);

    function handleChange(e){
        setAddressBarInput(e.currentTarget.value);
    }

    return <Input type="text" value={addressBarInput} onChange={handleChange}/>
    
}

export default AddressbarInput;