import React from 'react';
import Window from '../Window';
import WindowNameBar from '../WindowComponents/WindowNameBar';

function ChromeWindow() {

    let windowBarOptions = ["Computer", "Refresh"];

    return (
        <Window
            windowsName={"Chrome"}
            WindowNameBar={<WindowNameBar windowsName="Chrome" windowIcon="Images/chrome.png" windowBarOptions={windowBarOptions}/>}
            showFaqBar={false}
            showWindowToolBar={false}
        >
        </Window>
    )
}

export default ChromeWindow;