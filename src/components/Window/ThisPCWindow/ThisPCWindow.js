import React from 'react';
import { useSelector } from 'react-redux';
import Window from '../Window';
import WindowNameBar from '../WindowComponents/WindowNameBar';
import MainContent from './components/MainContent';

function ThisPCWindow() {

    const ThisPC = useSelector((state) => state.appwindow.ThisPC);
    let windowBarOptions = ["Computer", "View"];

    return (
        <>
            <Window 
                AppWindow={ThisPC}
                showFaqBar={true}
                windowNameBar={ <WindowNameBar windowsName={ThisPC.name} windowIcon={ThisPC.image} windowBarOptions={windowBarOptions} />}
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