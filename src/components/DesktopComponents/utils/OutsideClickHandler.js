import { useEffect } from 'react';

export default function OutsideClickAlert(ref, inputRef, clickCount) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                ref.current.style.backgroundColor = "";
                ref.current.style.border = "";
                clickCount.current = 0;
            }
            
            if(inputRef.current && !inputRef.current.contains(event.target)) {
                inputRef.current.readOnly = true;
                inputRef.current.blur();
                inputRef.current.style.backgroundColor = "transparent";
                inputRef.current.style.color = "";
            }
            window.getSelection().removeAllRanges();
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [ref, inputRef, clickCount]);
};