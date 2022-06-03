import { createSlice } from '@reduxjs/toolkit';
import TaskbarApps from './TaskbarApps';
import TaskbarImageData from '../../components/Data/WindowTaskbarImage';

const initialState = {
    taskbarApps: TaskbarApps
};

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
                    return;
                }
            });

            if (isDefaultApp) {
                state.taskbarApps = [...state.taskbarApps];
                return;
            }

            TaskBarApp.push({ name: action.payload, image: appImage, default: false, open: true, selected: true, windowCount: 1, alternateNames:false});
            state.taskbarApps = [...state.taskbarApps];
        },

        removeAppfromTaskbar: (state, action) => {
            let TaskBarApp = state.taskbarApps;
            let index, windowCount;
            let appImage = findInTaskbarImgData(action.payload);

            TaskBarApp.forEach((app, i) => {
                if (app.image === appImage ) {
                    app.windowCount -= 1;
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
            let appImage = findInTaskbarImgData(action.payload);

            TaskBarApp.forEach(app => {
                if (app.image === appImage && app.open) { app.selected = false; }
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
        }
    }
});

export const { addAppsInTaskbar, removeAppfromTaskbar, focusTaskbarApp, minimizedTaskbarApp, clickTaskbarApp } = TaskbarSlice.actions;
export default TaskbarSlice.reducer;