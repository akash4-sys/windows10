import React from 'react';
import Window from '../Window';
import WindowNameBar from '../WindowComponents/WindowNameBar';

function ChromeWindow() {
    return (
        <Window
            windowsName={"Chrome"}
            WindowNameBar={<WindowNameBar windowsName="Chrome" windowIcon="Images/chrome.png" />}
            showFaqBar={false}
        >
        </Window>
    )
}

export default ChromeWindow;