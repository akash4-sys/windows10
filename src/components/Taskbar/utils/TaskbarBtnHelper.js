function checkIsSubWindow(App, TaskbarApps) {
    if (App.taskbar.subWindow) {
        TaskbarApps.forEach(app => {
            if (app.name === App.taskbar.mainWindowName) {
                return app;
            }
        })
    }
    return false;
}

export function TaskbarBtnStyle(App, TaskbarApps, TaskbarState) {

    let Window = checkIsSubWindow(App, TaskbarApps) || App;

    let windowCnt = Window.taskbar.subWindowCount ? Window.taskbar.subWindowCount : Window.windowCount;
    if (Window.taskbar.open) {
        if (TaskbarState[Window.name].selected) {
            if (windowCnt > 1) return { background: "var(--multitaskbarAppSelected)" };
            else return { background: "var(--taskbarAppSelected)" };
        }
        return { background: "var(--taskbarAppOpened)" };
    }
    else return null;
}

export function TaskbarBtnMouseEnter(App, TaskbarApps, dispatch, setShowHoverWindow) {
    if (App.taskbar.open) {
        dispatch(setShowHoverWindow(App.name));
        return;
    }
    if(App.taskbar.hasSubWindow){
        for(let key in TaskbarApps){
            if( App.taskbar.hasSubWindow === TaskbarApps[key].name && TaskbarApps[key].taskbar.open ){
                dispatch(setShowHoverWindow(TaskbarApps[key].name));
                return;
            }
        }
    }
}

export function TaskbarBtnMouseLeave(App, TaskbarApps, dispatch, setShowHoverWindow) {
    if (App.taskbar.open) {
        dispatch(setShowHoverWindow(App.name));
        return;
    }
    if (App.taskbar.hasSubWindow) {
        for (let key in TaskbarApps) {
            if (App.taskbar.hasSubWindow === TaskbarApps[key].name && TaskbarApps[key].taskbar.open) {
                dispatch(setShowHoverWindow(TaskbarApps[key].name));
                return;
            }
        }
    }
}