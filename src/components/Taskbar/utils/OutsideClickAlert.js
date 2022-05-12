import { useEffect } from 'react';

export default function OutsideClickAlert(ref, setDisplayStartMenu) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setTimeout(() => { setDisplayStartMenu(false); }, 10);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [ref]);
};