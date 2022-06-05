import React from 'react';
import { useSelector } from 'react-redux';
import Window from '../Window';
import WindowNameBar from '../WindowComponents/WindowNameBar';

function FileExplorerWindow() {

    const FileExplorer = useSelector((state) => state.appwindow.FileExplorer);
    let windowBarOptions = ["Home", "Share", "View"];

    return (
        <>
            <Window
                AppWindow={FileExplorer}
                showFaqBar={true}
                windowNameBar={ <WindowNameBar windowsName="File Explorer" windowIcon={FileExplorer.image} windowBarOptions={windowBarOptions} />}
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