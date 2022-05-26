import React from 'react';
import Window from '../Window';
import MainContent from '../ThisPCWindow/components/MainContent';

function ChromeWindow() {

    let windowBarOptions = ["Computer", "Refresh"];
    let windowIcon = "Images/chrome.png";

    return (
        <Window
            windowsName={"Chrome"}
            windowIcon={windowIcon}
            showFaqBar={false}
            windowNameBar={{ show: false, windowBarOptions }}
            thispcToolbar={{ show: false, height: "0px" }}
            windowToolbar={{ show: false, height: "-0.4rem" }}
            windowSearchBar={{ show: false, height: "0px" }}
            quickAccessConfig={{ show: false, width: "0px" }}
            MainContent={<MainContent Width="0px" />}
            footerConfig={{ show: false, height: "0px" }}
        >
        </Window>
    )
}

export default ChromeWindow;