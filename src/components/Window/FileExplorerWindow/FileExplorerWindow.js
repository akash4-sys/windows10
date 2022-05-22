import React from 'react';
import Window from '../Window';
import WindowNameBar from '../WindowComponents/WindowNameBar';
import WindowToolBar from '../WindowComponents/WindowToolBar';

function FileExplorerWindow() {

    let windowBarOptions = ["Home", "Share", "View"];

    return (
        <>
            <Window
                windowsName={"File Explorer"}
                WindowNameBar={<WindowNameBar windowsName="File Explorer" windowIcon="Images/fileexplorer.png" windowBarOptions={windowBarOptions} />}
                showFaqBar={true}
                WindowToolBar={<WindowToolBar />}
            >
            </Window>
        </>
    )
}

export default FileExplorerWindow;