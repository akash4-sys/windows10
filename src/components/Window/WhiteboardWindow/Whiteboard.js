import React from 'react';
import { useSelector } from 'react-redux';
import Window from '../Window';
import NameBar from './Namebar';
import MainContent from './MainContent';

function MicrosoftWhiteboard() {

    const Whiteboard = useSelector((state) => state.appwindow["Microsoft Whiteboard"]);

    return (
        <Window
            AppWindow={Whiteboard}
            showFaqBar={false}
            windowNameBar={<NameBar windowsName={Whiteboard.name} />}
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

export default MicrosoftWhiteboard;