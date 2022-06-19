import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import Window from '../Window';
import NameBar from '../WindowComponents/ITagContent/NameBar';
import MainContent from '../WindowComponents/ITagContent/MainContent';

function MyPortfolio() {

    const MyPortfolio = useSelector((state) => state.appwindow["Pokemon Adventures"]);
    const WindowRef = useRef();

    let SRC = "https://pokemonadventure.netlify.app/";

    return (
        <Window
            AppWindow={MyPortfolio}
            showFaqBar={false}
            windowNameBar={<NameBar windowsName={MyPortfolio.name} showExpand={true} ref={WindowRef} windowIcon={MyPortfolio.image} />}
            thispcToolbar={{ show: false, height: "0px" }}
            windowToolbar={{ show: false, height: "-0.4rem" }}
            windowSearchBar={{ show: false, height: "0px" }}
            quickAccessConfig={{ show: false, width: "0px" }}
            MainContent={<MainContent Width="0px" ref={WindowRef} SRC={SRC} />}
            footerConfig={{ show: false, height: "0px" }}
        >
        </Window>
    )
}

export default MyPortfolio;