import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import Window from '../Window';
import NameBar from '../WindowComponents/ITagContent/NameBar';
import MainContent from '../WindowComponents/ITagContent/MainContent';

function MyPortfolio() {

    const MyPortfolio = useSelector((state) => state.appwindow.MyPortfolio);

    const WindowRef = useRef();
    let windowIcon = "Images/myportfolio.png";
    let SRC = "https://akash4.netlify.app/";
    let windowsName = "My Portfolio";

    return (
        <Window
            AppWindow={MyPortfolio}
            windowsName={windowsName}
            windowIcon={windowIcon}
            showFaqBar={false}
            windowNameBar={ <NameBar windowsName={windowsName} showExpand={true} ref={WindowRef} windowIcon={windowIcon}/>}
            thispcToolbar={{ show: false, height: "0px" }}
            windowToolbar={{ show: false, height: "-0.4rem" }}
            windowSearchBar={{ show: false, height: "0px" }}
            quickAccessConfig={{ show: false, width: "0px" }}
            MainContent={ <MainContent Width="0px" ref={WindowRef} SRC={SRC}/> }
            footerConfig={{ show: false, height: "0px" }}
        >
        </Window>
    )
}

export default MyPortfolio;