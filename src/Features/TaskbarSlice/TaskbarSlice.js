import { createSlice } from '@reduxjs/toolkit';
import TaskbarApps from './TaskbarApps';
import TaskbarImageData from '../../components/Data/WindowTaskbarImage';

const initialState = {
    taskbarApps: TaskbarApps
};

// TODO: USE TASKBARIMAGEDATA TO SAVE SCREENSHOT OF EACH WINDOW AND USE IT FOR IN ADDAPPSINTASKBAR

function findInTaskbarImgData(appName) {
    for (let image in TaskbarImageData) {
        for (let i = 0; i < TaskbarImageData[image].length; i++) {
            if (TaskbarImageData[image][i] === appName) {
                return image;
            }
        }
    }
}

export const TaskbarSlice = createSlice({
    name: "taskbar",
    initialState,
    reducers: {

        addAppsInTaskbar: (state, action) => {

            let appImage = findInTaskbarImgData(action.payload);
            let TaskBarApp = state.taskbarApps;
            let isDefaultApp = false;

            TaskBarApp.forEach(app => {
                app.selected = false;
                if (app.image === appImage) {
                    isDefaultApp = true;
                    app.open = true;
                    app.selected = true;
                    app.windowCount += 1;
                    app.windowSnapshots.array.push([action.payload,"Images/sample.png"]);
                    return;
                }
            });

            if (isDefaultApp) {
                state.taskbarApps = [...state.taskbarApps];
                return;
            }

            TaskBarApp.push({name: action.payload, image: appImage, default: false, open: true, selected: true,
                windowCount: 1, alternateNames:false, windowSnapshots:{ hovering: false, array:[[action.payload,"Images/sample.png"]]} });
            state.taskbarApps = [...state.taskbarApps];
        },

        removeAppfromTaskbar: (state, action) => {
            let TaskBarApp = state.taskbarApps;
            let index, windowCount;
            let appImage = findInTaskbarImgData(action.payload);

            TaskBarApp.forEach((app, i) => {
                if (app.image === appImage ) {
                    app.windowCount -= 1;
                    app.windowSnapshots.array.splice(i, 1);
                    if (app.default) {
                        if (!app.windowCount) { app.open = false; } return;
                    }
                    else { index = i; }
                    windowCount = app.windowCount;
                }
            });

            if (index && windowCount === 0) { TaskBarApp.splice(index, 1); }
            state.taskbarApps = TaskBarApp;
        },

        focusTaskbarApp: (state, action) => {
            let TaskBarApp = state.taskbarApps;
            let appImage = findInTaskbarImgData(action.payload);

            TaskBarApp.forEach(app => {
                app.selected = false;
                if (app.image === appImage && app.open) { app.selected = true; }
            });
            state.taskbarApps = TaskBarApp;
        },

        minimizedTaskbarApp: (state, action) => {
            let TaskBarApp = state.taskbarApps;
            let windowName = action.payload.windowsName;
            // let windowSnapshot = action.payload.Snapshot;
            let appImage = findInTaskbarImgData(windowName);

            TaskBarApp.forEach(app => {
                if (app.image === appImage && app.open) { 
                    app.selected = false; 
                    // let snapshotArray = [...app.windowSnapshots.array];
                    // snapshotArray.push([windowName, windowSnapshot]);
                    // app.windowSnapshots.array = [...snapshotArray];
                }
            });
            state.taskbarApps = TaskBarApp;
        },

        clickTaskbarApp: (state, action) => {
            let TaskBarApp = state.taskbarApps;
            let appImage = findInTaskbarImgData(action.payload);

            TaskBarApp.forEach(app => {
                if (app.image === appImage && app.open && app.windowCount === 1) {
                    app.selected ? app.selected = false : app.selected = true
                }
            });
            state.taskbarApps = TaskBarApp;
        },

        setShowHoverWindow: (state, action) => {
            if(state.taskbarApps[action.payload].windowSnapshots.hovering) state.taskbarApps[action.payload].windowSnapshots.hovering = false
            else state.taskbarApps[action.payload].windowSnapshots.hovering = true;
        }
    }
});

export const { 
    addAppsInTaskbar,
    removeAppfromTaskbar,
    focusTaskbarApp,
    minimizedTaskbarApp,
    clickTaskbarApp,
    setShowHoverWindow 
} = TaskbarSlice.actions;

export default TaskbarSlice.reducer;