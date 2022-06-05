import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Window from '../Window';
import Namebar from './Namebar';
import MainContent from './MainContent';

function Notepad() {

    const Notepad = useSelector((state) => state.appwindow.Notepad);

    const mainContentRefs = useRef([]);
    const nameBarRefs = useRef([]);
    const autoSave = useRef([]);
    const iterator = useRef(0);
    const refsArray = useRef({ nameBarRefs, mainContentRefs, autoSave, iterator });

    let numberOfWindow = Notepad.count;

    useEffect(() => {
        mainContentRefs.current = mainContentRefs.current.slice(numberOfWindow-1, mainContentRefs.current.length);
        nameBarRefs.current = nameBarRefs.current.slice(numberOfWindow-1, nameBarRefs.current.length);
        autoSave.current = autoSave.current.slice(0, numberOfWindow);
        iterator.current = 0;
    }, [numberOfWindow])

    return (
        <Window
            AppWindow={Notepad}
            showFaqBar={false}
            windowNameBar={<Namebar windowsName={Notepad.name} windowIcon={Notepad.image} ref={refsArray} />}
            thispcToolbar={{ show: false, height: "0px" }}
            windowToolbar={{ show: false, height: "-0.4rem" }}
            windowSearchBar={{ show: false, height: "0px" }}
            quickAccessConfig={{ show: false, width: "0px" }}
            MainContent={ <MainContent Width="0px" ref={refsArray} /> }
            footerConfig={{ show: false, height: "0px" }}
        >
        </Window>
    )
}

export default Notepad;