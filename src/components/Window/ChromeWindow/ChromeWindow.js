import React from 'react';
import Window from '../Window';
import WindowNameBar from '../WindowComponents/WindowNameBar';

function ChromeWindow() {

    let windowBarOptions = ["Computer", "Refresh"];
    let windowIcon="Images/chrome.png";

    return (
        <Window
            windowsName={"Chrome"}
            WindowNameBar={<WindowNameBar windowsName="Chrome" windowIcon={windowIcon} windowBarOptions={windowBarOptions}/>}
            showFaqBar={false}
            showWindowToolBar={false}
            windowSearchBar={{ show: false, icon: windowIcon }}
        >
        </Window>
    )
}

export default ChromeWindow;