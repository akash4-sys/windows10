import { createSlice } from '@reduxjs/toolkit';
import appData from './AppWindowData';

export const AppWindowSlice = createSlice({
    name: "appwindow",
    initialState: appData,
    reducers: {

        setAppWindow: (state, action) => {
            let windowName = action.payload.windowName;
            let windowCount = action.payload.windowCount;

            for (let window in state) {
                if (state[window].name === windowName) {

                    let minimizedShallowCopy = [...state[window].minimized];
                    let newMinimizedArray = new Array(state[window].windowCount + windowCount).fill(false);
                    if (windowCount < 0) minimizedShallowCopy.splice(action.payload.windowIndex, 1);
                    
                    for (let i = 0; i < minimizedShallowCopy.length; i++) {
                        newMinimizedArray[i] = minimizedShallowCopy[i];
                    }

                    let mainWindowKey = null;
                    if (state[window].taskbar.subWindow) {
                        for (let key in state) {
                            if (state[key].name === state[window].taskbar.mainWindowName) mainWindowKey = key;
                        }
                    }

                    if (mainWindowKey) state[mainWindowKey].taskbar.subWindowCount += windowCount;
                    if (state[window].taskbar.hasSubWindow) state[window].taskbar.subWindowCount += windowCount;

                    let currentKey = mainWindowKey ? mainWindowKey : window;
                    state[currentKey].taskbar.open = true;

                    state[window] = {
                        ...state[window],
                        showWindow: true,
                        windowCount: state[window].windowCount + windowCount,
                        minimized: [...newMinimizedArray],
                    };

                    if (!state[window].windowCount) {
                        state[window] = { ...state[window], showWindow: false, windowCount: 0, minimized: [false] };
                        
                        if(!mainWindowKey && !state[window].taskbar.hasSubWindow) state[window].taskbar.open = false;
                        else if(state[mainWindowKey]?.taskbar?.subWindowCount <= 0) state[mainWindowKey].taskbar.open = false;
                        else if (state[window].taskbar.subWindowCount <= 0) state[window].taskbar.open = false;

                        break;
                    }
                    break;
                }
            }
        },

        minimizeAppWindowDirect: (state, action) => {
            for (let window in state) {
                if (state[window].name === action.payload.windowsName) {
                    state[window].minimized[action.payload.windowIndex] = true;
                    return;
                }
            }
        },

        minimizeAppWindow: (state, action) => {
            for (let window in state) {
                if (state[window].name === action.payload) {
                    if (state[window].showWindow && state[window].windowCount === 1 && !state[window].taskbar.hasSubWindow) {
                        state[window].minimized[0] ? state[window].minimized[0] = false : state[window].minimized[0] = true;
                        return;
                    }
                    else if (state[window].taskbar.hasSubWindow && state[window].taskbar.subWindowCount === 1) {
                        let key = Object.keys(state).find(key => state[key].name === state[window].taskbar.hasSubWindow);
                        if (state[key].windowCount === 1) {
                            state[key].minimized[0] ? state[key].minimized[0] = false : state[key].minimized[0] = true;
                            return;
                        }
                        state[window].minimized[0] ? state[window].minimized[0] = false : state[window].minimized[0] = true;
                        return;
                    }
                    return;
                }
            }
        }
    }
});

export const { setAppWindow, minimizeAppWindow, minimizeAppWindowDirect } = AppWindowSlice.actions;
export default AppWindowSlice.reducer;