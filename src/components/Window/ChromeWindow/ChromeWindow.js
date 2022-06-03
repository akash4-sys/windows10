import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import Window from '../Window';
import NameBar from '../WindowComponents/ITagContent/NameBar';
import MainContent from '../WindowComponents/ITagContent/MainContent';

function ChromeWindow() {

    const Chrome = useSelector((state) => state.appwindow.Chrome);
    let EmptyRef = useRef();
    let windowIcon = "Images/chrome.png";
    let SRC = "https://www.google.com/webhp?igu=1";
    let windowsName = "Chrome";

    return (
        <Window
            AppWindow={Chrome}
            windowsName={windowsName}
            windowIcon={windowIcon}
            showFaqBar={false}
            windowNameBar={<NameBar windowsName={windowsName} showExpand={false} ref={EmptyRef} windowIcon={windowIcon}/>}
            thispcToolbar={{ show: false, height: "0px" }}
            windowToolbar={{ show: false, height: "-0.4rem" }}
            windowSearchBar={{ show: false, height: "0px" }}
            quickAccessConfig={{ show: false, width: "0px" }}
            MainContent={<MainContent Width="0px" ref={EmptyRef} SRC={SRC}/>}
            footerConfig={{ show: false, height: "0px" }}
        >
        </Window>
    )
}

export default ChromeWindow;