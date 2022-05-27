import React, { useRef } from 'react';
import Window from '../Window';
import MyPortfolioNameBar from './MyPortfolioNameBar';
import MainContent from './MainContent';

function MyPortfolio() {

    const WindowRef = useRef();
    let windowBarOptions = [];
    let windowIcon = "Images/myportfolio.png";

    return (
        <Window
            windowsName={"My Portfolio"}
            windowIcon={windowIcon}
            showFaqBar={false}
            windowNameBar={ <MyPortfolioNameBar windowsName="This PC" windowIcon={windowIcon} windowBarOptions={windowBarOptions} ref={WindowRef} />}
            thispcToolbar={{ show: false, height: "0px" }}
            windowToolbar={{ show: false, height: "-0.4rem" }}
            windowSearchBar={{ show: false, height: "0px" }}
            quickAccessConfig={{ show: false, width: "0px" }}
            MainContent={ <MainContent Width="0px" ref={WindowRef} /> }
            footerConfig={{ show: false, height: "0px" }}
        >
        </Window>
    )
}

export default MyPortfolio;