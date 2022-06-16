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
            let key = Object.keys(appData).find(key => appData[key].name === action.payload);
            if (appData[key].taskbar.subWindow) {
                state.taskbarApps[appData[key].taskbar.mainWindowName].selected = true;
                state.taskbarApps[appData[key].taskbar.mainWindowName].windowSnapshots.push([action.payload, appData[key].taskbar.defaultSnap]);
                return;
            }
            state.taskbarApps[action.payload].windowSnapshots.push([action.payload, appData[key].taskbar.defaultSnap]);
            state.taskbarApps[action.payload].selected = true;
        },

        focusTaskbarApp: (state, action) => {
            for (let name in state.taskbarApps) { state.taskbarApps[name].selected = false; }
            let key = Object.keys(appData).find(key => appData[key].name === action.payload);
            if (appData[key].taskbar.subWindow) {
                state.taskbarApps[appData[key].taskbar.mainWindowName].selected = true;
                return;
            }
            state.taskbarApps[action.payload].selected = true;
        },

        minimizedTaskbarApp: (state, action) => {
            let key = Object.keys(appData).find(key => appData[key].name === action.payload.windowsName);
            let taskBarKey = appData[key].taskbar.subWindow ? appData[key].taskbar.mainWindowName : action.payload.windowsName;
            state.taskbarApps[taskBarKey].windowSnapshots[action.payload.windowIndex][1] = action.payload.latestSnap;

            if(action.payload.minimizedData.windowCount > 1){
                let numOfMini = action.payload.minimizedData.minimizedArr.filter(x => x === true).length + 1;
                if(action.payload.minimizedData.windowCount !== numOfMini) return;
            }
            state.taskbarApps[taskBarKey].selected = false;
        },

        clickTaskbarApp: (state, action) => {
            let Apps = action.payload.Apps;
            if(action.payload.windowCount !== 1) return;
            let key = Object.keys(Apps).find(key => Apps[key].name === action.payload.windowName);
            if(Apps[key].windowCount !== 1) key = Object.keys(Apps).find(ele => Apps[ele].name === Apps[key].taskbar.hasSubWindow);
            if (Apps[key].minimized[0]) state.taskbarApps[action.payload.windowName].selected = true;
            else state.taskbarApps[action.payload.windowName].selected = false;
        },

        deSelectTaskbarApp: ( state, action ) => {
            let key = Object.keys(appData).find(key => appData[key].name === action.payload.windowName);
            if (appData[key].taskbar.subWindow) {
                state.taskbarApps[appData[key].taskbar.mainWindowName].selected = false;
                state.taskbarApps[appData[key].taskbar.mainWindowName].windowSnapshots.splice(action.payload.windowIndex, 1);
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