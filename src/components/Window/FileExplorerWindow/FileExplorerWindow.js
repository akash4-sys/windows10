import React from 'react';
import Window from '../Window';
import WindowNameBar from '../WindowComponents/WindowNameBar';

function FileExplorerWindow() {

    let windowBarOptions = ["Home", "Share", "View"];
    let windowIcon="Images/thispc.ico";

    return (
        <>
            <Window
                windowsName={"File Explorer"}
                WindowNameBar={<WindowNameBar windowsName="File Explorer" windowIcon={windowIcon} windowBarOptions={windowBarOptions} />}
                showFaqBar={true}
                showWindowToolBar={true}
                windowSearchBar={{ show: true, icon: windowIcon }}
            >
            </Window>
        </>
    )
}

export default FileExplorerWindow;