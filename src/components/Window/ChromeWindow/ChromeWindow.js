import React from 'react';
import Window from '../Window';
function ChromeWindow() {

    let windowIcon = "Images/chrome.png";

    return (
        <Window
            windowsName={"Chrome"}
            windowIcon={windowIcon}
            showFaqBar={false}
            windowNameBar={""}
            thispcToolbar={{ show: false, height: "0px" }}
            windowToolbar={{ show: false, height: "-0.4rem" }}
            windowSearchBar={{ show: false, height: "0px" }}
            quickAccessConfig={{ show: false, width: "0px" }}
            MainContent={""}
            footerConfig={{ show: false, height: "0px" }}
        >
        </Window>
    )
}

export default ChromeWindow;