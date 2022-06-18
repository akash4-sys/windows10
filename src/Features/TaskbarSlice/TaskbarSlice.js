import { createSlice } from '@reduxjs/toolkit';
import TaskbarApps from './TaskbarApps';
import appData from '../AppWindowSlice/AppWindowData';

const initialState = {
    taskbarApps: TaskbarApps
};

export const TaskbarSlice = createSlice({
    name: "taskbar",
    initialState,
    reducers: {
        setWindowSnapshots: (state, action) => {
            for (let name in state.taskbarApps) { state.taskbarApps[name].selected = false; }
            if (appData[action.payload].taskbar.subWindow) {
                let mainWindowName = appData[action.payload].taskbar.mainWindowName;
                state.taskbarApps[mainWindowName].selected = true;
                state.taskbarApps[mainWindowName].windowSnapshots.push([action.payload, appData[action.payload].taskbar.defaultSnap]);
                return;
            }
            state.taskbarApps[action.payload].windowSnapshots.push([action.payload, appData[action.payload].taskbar.defaultSnap]);
            state.taskbarApps[action.payload].selected = true;
        },

        focusTaskbarApp: (state, action) => {
            for (let name in state.taskbarApps) { state.taskbarApps[name].selected = false; }
            if (appData[action.payload].taskbar.subWindow) {
                state.taskbarApps[appData[action.payload].taskbar.mainWindowName].selected = true;
                return;
            }
            state.taskbarApps[action.payload].selected = true;
        },

        minimizedTaskbarApp: (state, action) => {
            let taskBarKey = appData[action.payload.windowsName].taskbar.subWindow ? 
                appData[action.payload.windowsName].taskbar.mainWindowName : action.payload.windowsName;

            state.taskbarApps[taskBarKey].windowSnapshots[action.payload.windowIndex][1] = action.payload.latestSnap;
            if(action.payload.minimizedData.windowCount > 1){
                let numOfMini = action.payload.minimizedData.minimizedArr.filter(x => x === true).length + 1;
                if(action.payload.minimizedData.windowCount !== numOfMini) return;
            }
            state.taskbarApps[taskBarKey].selected = false;
        },

        clickTaskbarApp: (state, action) => {
            for (let name in state.taskbarApps) { state.taskbarApps[name].selected = false; }
            let Apps = action.payload.Apps;
            let windowName = action.payload.windowName;
            if(action.payload.windowCount !== 1) return;
            if(Apps[windowName].windowCount !== 1) windowName = Apps[windowName].taskbar.hasSubWindow;
            if (Apps[windowName].minimized[0]) state.taskbarApps[action.payload.windowName].selected = true;
            else state.taskbarApps[action.payload.windowName].selected = false;
        },

        deSelectTaskbarApp: ( state, action ) => {
            if (appData[action.payload.windowName].taskbar.subWindow) {
                state.taskbarApps[appData[action.payload.windowName].taskbar.mainWindowName].selected = false;
                state.taskbarApps[appData[action.payload.windowName].taskbar.mainWindowName].windowSnapshots.splice(action.payload.windowIndex, 1);
                return;
            }
            state.taskbarApps[action.payload.windowName].windowSnapshots.splice(action.payload.windowIndex, 1);
            state.taskbarApps[action.payload.windowName].selected = false;
        },

        setShowHoverWindow: (state, action) => {
            if (state.taskbarApps[action.payload].hovering) state.taskbarApps[action.payload].hovering = false
            else state.taskbarApps[action.payload].hovering = true;
        },
    }
});

export const {
    setWindowSnapshots,
    focusTaskbarApp,
    minimizedTaskbarApp,
    clickTaskbarApp,
    setShowHoverWindow,
    deSelectTaskbarApp
} = TaskbarSlice.actions;

export default TaskbarSlice.reducer;