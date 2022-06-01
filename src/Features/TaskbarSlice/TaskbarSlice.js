import { createSlice } from '@reduxjs/toolkit';
import Apps from '../../components/Data/AppData';
import TaskbarApps from './TaskbarApps';

const initialState = {
    taskbarApps: TaskbarApps
};

export const TaskbarSlice = createSlice({
    name:"taskbar",
    initialState,
    reducers:{

        addAppsInTaskbar: ( state, action) => {
            let existsInTaskbar = state.taskbarApps.filter(app => app.name === action.payload);
            let copyTaskBar = state.taskbarApps;
            if(existsInTaskbar.length !== 0){
                copyTaskBar.forEach(app => {
                    app.selected = false;
                    if(app.name === action.payload){
                        app.open = true;
                        app.selected = true;
                        app.windowCount += 1;
                        return;
                    }
                });
                state.taskbarApps = copyTaskBar;
                return;
            }
            
            let appImage;
            Apps.forEach(app => { if(app[1] === action.payload){ appImage = app[0] } })

            copyTaskBar.forEach( app => { app.open ? app.selected = false : app.selected = false });
            copyTaskBar.push({
                name:action.payload,
                image:appImage,
                default:false,
                open:true,
                selected:true,
                windowCount:1,
                windowRef:""
            });
            state.taskbarApps = [ ...state.taskbarApps ];
        },

        removeAppfromTaskbar: ( state, action ) => {
            let copyTaskBar = state.taskbarApps;
            let index, windowCount;

            copyTaskBar.forEach((app, i) => {
                if(app.name === action.payload){
                    app.default ? app.open = false : index = i;
                    app.windowCount -= 1;
                    windowCount = app.windowCount;
                    return;
                }
            });

            if(index && windowCount === 0){ copyTaskBar.splice(index, 1); }
            state.taskbarApps = copyTaskBar;
        },

        focusTaskbarApp: ( state, action ) => {
            let copyTaskBar = state.taskbarApps;
            copyTaskBar.forEach(app => {
                app.selected = false;
                if(app.name === action.payload && app.open){ app.selected = true; }
            });
            state.taskbarApps = copyTaskBar;
        },

        minimizedTaskbarApp: ( state, action ) => {
            let copyTaskBar = state.taskbarApps;
            copyTaskBar.forEach(app => {
                if(app.name === action.payload && app.open){ 
                    app.selected = false;
                }
            });
            state.taskbarApps = copyTaskBar;
        },

        maximizeTaskBarApp: ( state, action ) => {
            // state.taskbarApps.forEach(app => { 
            // })
        }

    }
});

export const { addAppsInTaskbar, removeAppfromTaskbar, focusTaskbarApp, minimizedTaskbarApp, maximizeTaskBarApp } = TaskbarSlice.actions;
export default TaskbarSlice.reducer;