import { createSlice } from '@reduxjs/toolkit';
import initialState from './AppWindowdata';

export const AppWindowSlice = createSlice({
    name: "appwindow",
    initialState,
    reducers: {

        setAppWindow: (state, action) => {
            let windowName = action.payload.windowName;
            let windowCount = action.payload.windowCount;

            for (let window in state) {
                if (state[window].name === windowName) {

                    let minimizedShallowCopy = [...state[window].minimized];
                    let newMinimizedArray = new Array(state[window].count + windowCount).fill(false);
                    if(windowCount < 0){
                        minimizedShallowCopy.splice(action.payload.windowIndex, 1);
                    }  
                    for(let i = 0; i < minimizedShallowCopy.length; i++){
                        newMinimizedArray[i] = minimizedShallowCopy[i];
                    }

                    state[window] = {
                        ...state[window],
                        show: true,
                        count: state[window].count + windowCount,
                        minimized: [...newMinimizedArray]
                    };

                    if (!state[window].count) {
                        state[window] = { ...state[window], show: false, count: 0, minimized: [false] };
                    }

                    return;
                }
            }
        },

        minimizeAppWindowDirect: (state, action) => {
            let windowName = action.payload.windowsName;
            let windowIndex = action.payload.windowIndex;

            for (let window in state) {
                if (state[window].name === windowName) {

                    let minimizedShallowCopy = [...state[window].minimized];
                    minimizedShallowCopy[windowIndex] = true;

                    state[window] = { ...state[window], minimized: [...minimizedShallowCopy] }
                    return;
                }
            }
        },

        minimizeAppWindow: (state, action) => {
            let windowName = action.payload.windowName;
            let TaskbarApps = action.payload.TaskbarApps;

            let hasAlternateNames = false;
            if (TaskbarApps) {
                TaskbarApps.forEach(app => {
                    if (app.name === windowName && app.alternateNames) {
                        hasAlternateNames = true;
                        for (let window in state) {
                            app.alternateNames.forEach(Name => {
                                if (state[window].name === Name && state[window].show && state[window].count === 1 && app.windowCount === 1) 
                                {
                                    let minimizedCopy = [...state[window].minimized];
                                    state[window].minimized[0] ? minimizedCopy[0] = false : minimizedCopy[0] = true;
                                    state[window] = { ...state[window], minimized: [ ...minimizedCopy] };
                                    return;
                                }
                            })
                        }
                        return;
                    }
                });
            }

            if (hasAlternateNames) { return; }

            for (let window in state) {
                if (state[window].name === windowName && state[window].count === 1) {
                    let minimizedCopy = [...state[window].minimized]
                    state[window].minimized[0] ? minimizedCopy[0] = false : minimizedCopy[0] = true;
                    state[window] = { ...state[window], minimized: [ ...minimizedCopy] };
                    break;
                }
            }
        }

    }
});

export const { setAppWindow, minimizeAppWindow, minimizeAppWindowDirect } = AppWindowSlice.actions;
export default AppWindowSlice.reducer;