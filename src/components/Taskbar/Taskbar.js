import {
    React, useState, useEffect, useRef, useSelector, useDispatch,
    StartMenu, SearchBar, Battery, Showtime, Showdate, OutsideClickAlert, setWindowSnapshots, clickTaskbarApp, setShowHoverWindow, setAppWindow,
    minimizeAppWindow, showCxtMenu, HoverWindow, TaskbarBtnStyle, TaskbarBtnMouseEnter, TaskbarBtnMouseLeave
} from './index.js';
import {
    Container, LeftSection, RightSection, WindowsButton, TaskbarButton, UtilityIcons, Breaker, Tooltip, DateAndTime,
} from './utils/Styled/TaskbarStyle';

function Taskbar() {

    const dispatch = useDispatch();
    const [displayStartMenu, setDisplayStartMenu] = useState(false);
    const wrapperRef = useRef(null);
    OutsideClickAlert(wrapperRef, setDisplayStartMenu);

    const Apps = useSelector((state) => state.appwindow);
    const TaskbarState = useSelector((state) => state.taskbar.taskbarApps);

    const TaskbarAppsRef = useRef([]);
    let defaultAppsArray = [], remAppsArray = [];
    Object.keys(Apps).forEach(key => {
        if (Apps[key].taskbar.default) defaultAppsArray.push(Apps[key]);
        else remAppsArray.push(Apps[key]);
    });
    TaskbarAppsRef.current = [...defaultAppsArray, ...remAppsArray];
    let TaskbarApps = TaskbarAppsRef.current;

    function startMenu() {
        if (displayStartMenu) setTimeout(() => { setDisplayStartMenu(false); }, 10);
        else setDisplayStartMenu(true);
    }

    useEffect(() => {
        Showtime();
        Showdate();
        Battery();
    }, []);

    function TaskbarButtonClick(windowName, windowCount) {
        if (!windowCount) {
            dispatch(setAppWindow({ windowName, windowCount: 1 }));
            dispatch(setWindowSnapshots(windowName));
            return;
        }
        dispatch(minimizeAppWindow(windowName));
        dispatch(clickTaskbarApp({ windowName, windowCount, Apps }));
    }

    return (
        <Container ref={wrapperRef} id="taskbar"
            onContextMenu={(e) => dispatch(showCxtMenu({ show: true, cxtMenu: "taskbarMenu", type: "taskbar", anchor: { x: e.pageX, y: e.pageY } }))}>
            <LeftSection>
                <StartMenu displayStartMenu={displayStartMenu} setDisplayStartMenu={setDisplayStartMenu} />
                <WindowsButton onClick={startMenu} id="windowsButton">
                    <i className="fa-brands fa-windows"></i>
                    <Tooltip>Start</Tooltip>
                </WindowsButton>
                <SearchBar> <div className="gcse-search" ></div> </SearchBar>
                <TaskbarButton>
                    <i className="fa-solid fa-bars"></i>
                    <Tooltip style={{ fontSize: "12.5px" }}>Task View</Tooltip>
                </TaskbarButton>
                <Breaker><div></div><span></span></Breaker>
                {
                    TaskbarApps.map((App, i) => (

                        (App.taskbar.default || App.taskbar.open) ?
                            <TaskbarButton key={i}
                                onClick={() => TaskbarButtonClick(App.name, (App.taskbar.hasSubWindow ? App.taskbar.subWindowCount : App.windowCount))}
                                style={TaskbarBtnStyle(App, TaskbarApps, TaskbarState)}
                                onMouseEnter={() => { setTimeout(() => TaskbarBtnMouseEnter(App, TaskbarApps, dispatch, setShowHoverWindow), 500) }}
                                onMouseLeave={() => { setTimeout(() => TaskbarBtnMouseLeave(App, TaskbarApps, dispatch, setShowHoverWindow), 500) }}
                            >
                                <HoverWindow
                                    showHoverWindow={App.taskbar.mainWindowName ? TaskbarState[App.taskbar.mainWindowName].hovering :
                                        TaskbarState[App.name].hovering}
                                    SnapshotArray={App.taskbar.mainWindowName ? TaskbarState[App.taskbar.mainWindowName].windowSnapshots :
                                        TaskbarState[App.name].windowSnapshots}
                                    windowImg={App.image}
                                />

                                <img src={App.image} alt="app" />
                            </TaskbarButton>
                            : null
                    ))
                }
            </LeftSection>
            <RightSection>
                <UtilityIcons>
                    <i className="fa-solid fa-chevron-up"></i>
                    <Tooltip >Show hidden icons</Tooltip>
                </UtilityIcons>
                <UtilityIcons
                    onClick={() => document.fullscreenElement ? document.exitFullscreen() : document.getElementById('root').requestFullscreen()}>
                    <i className="fa-solid fa-expand"></i>
                    <Tooltip >Immersive Mode</Tooltip>
                </UtilityIcons>
                <UtilityIcons>
                    <i className="fa-solid fa-volume-high"></i>
                    <Tooltip >Speaker/Headphone: 80%</Tooltip>
                </UtilityIcons>
                <UtilityIcons id="batteryicon">
                    <Tooltip id="batterytip"></Tooltip>
                    <i className='fas fa-battery-empty'></i>
                </UtilityIcons>
                <UtilityIcons>
                    <i className="fa-solid fa-wifi"></i>
                    <Tooltip >Internet Access</Tooltip>
                </UtilityIcons>
                <UtilityIcons id="eng">
                    ENG
                    <Tooltip >Keyboard</Tooltip>
                </UtilityIcons>
                <DateAndTime>
                    <div id="ClockDisplay"></div>
                    <div id="DateDisplay"></div>
                    <Tooltip id="Datetooltip"></Tooltip>
                </DateAndTime>
                <TaskbarButton>
                    <img src="./Images/notificationb.png" alt="notification" style={{ width: '22px', paddingTop: '4px' }} />
                    <Tooltip className="Notificationtooltip">No new notifications</Tooltip>
                </TaskbarButton>
            </RightSection>
        </Container>
    )
}

export default Taskbar;