import React from 'react';
import Window from '../Window';
import WindowNameBar from '../WindowComponents/WindowNameBar';

function FileExplorerWindow() {

    let windowBarOptions = ["Home", "Share", "View"];

    return (
        <>
            <Window
                windowsName={"File Explorer"}
                WindowNameBar={<WindowNameBar windowsName="File Explorer" windowIcon="Images/fileexplorer.png" windowBarOptions={windowBarOptions} />}
                showFaqBar={true}
                showWindowToolBar={true}
            >
            </Window>
        </>
    )
}

export default FileExplorerWindow;