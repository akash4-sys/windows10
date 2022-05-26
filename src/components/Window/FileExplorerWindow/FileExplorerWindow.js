import React from 'react';
import Window from '../Window';

function FileExplorerWindow() {

    let windowBarOptions = ["Home", "Share", "View"];
    let windowIcon="Images/fileexplorer.png";

    return (
        <>
            <Window
                windowsName={"File Explorer"}
                windowIcon={windowIcon}
                showFaqBar={true}
                windowNameBar={{ show: true, windowBarOptions }}
                thispcToolbar={{ show:false, height:"0" }}
                windowToolbar={{ show:true, height:"var(--windowToolbarHeight)" }}
                windowSearchBar={{ show: true, height:"var(--windowSearchbarHeight)" }}
                quickAccessConfig={{ show: true, width: "var(--quickAccessWidth)" }}
                MainContent={""}
                footerConfig={{ show: true, height: "var(--footerWidth)" }}
            >
            </Window>
        </>
    )
}

export default FileExplorerWindow;