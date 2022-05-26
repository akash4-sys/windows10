import React from 'react';
import Window from '../Window';
import MainContent from './components/MainContent';

function ThisPCWindow() {

    let windowBarOptions = ["Computer", "View"];
    let windowIcon="Images/thispc.ico";

    return (
        <>
            <Window 
                windowsName={"This PC"}
                windowIcon={windowIcon}
                showFaqBar={true}
                windowNameBar={{ show: true, windowBarOptions }}
                thispcToolbar={{ show:true, height:"var(--windowToolbarHeight)" }}
                windowToolbar={{ show:false, height:"var(--windowToolbarHeight)" }}
                windowSearchBar={{ show: true, height:"var(--windowSearchbarHeight)" }}
                quickAccessConfig={{ show: true, width: "var(--quickAccessWidth)" }}
                MainContent={ <MainContent Width="var(--quickAccessWidth)" /> }
                footerConfig={{ show: true, height: "var(--footerWidth)" }}
            >
            </Window>
        </>
    )
}

export default ThisPCWindow;