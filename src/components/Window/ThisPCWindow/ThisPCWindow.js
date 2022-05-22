import React from 'react';
import Window from '../Window';
import WindowNameBar from '../WindowComponents/WindowNameBar';
import WindowToolBar from '../WindowComponents/WindowToolBar';

function ThisPCWindow() {

    let windowBarOptions = ["Computer", "View"];

    return (
        <>
            <Window 
                windowsName={"This PC"} 
                WindowNameBar={ <WindowNameBar windowsName="This PC" windowIcon="Images/thispc.ico" windowBarOptions={windowBarOptions}/> }
                showFaqBar={true}
                WindowToolBar={<WindowToolBar/>}
            >
            </Window>
        </>
    )
}


export default ThisPCWindow;