import React from 'react';
import Window from '../Window';
import WindowNameBar from '../WindowComponents/WindowNameBar';

function ThisPCWindow() {

    let windowBarOptions = ["Computer", "View"];
    let windowIcon="Images/thispc.ico";

    return (
        <>
            <Window 
                windowsName={"This PC"}
                WindowNameBar={ <WindowNameBar windowsName="This PC" windowIcon={windowIcon} windowBarOptions={windowBarOptions} /> }
                showFaqBar={true}
                showThisPCtoolbar={true}
                windowSearchBar={{ show: true, icon: windowIcon }}
            >
            </Window>
        </>
    )
}


export default ThisPCWindow;