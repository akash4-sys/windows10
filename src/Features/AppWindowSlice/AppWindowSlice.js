import { createSlice } from '@reduxjs/toolkit';
import appData from './AppWindowData';

export const AppWindowSlice = createSlice({
    name: "appwindow",
    initialState: appData,
    reducers: {

        setAppWindow: (state, action) => {
            let windowName = action.payload.windowName;
            let windowCount = action.payload.windowCount;

            let minimizedShallowCopy = [...state[windowName].minimized];
            let newMinimizedArray = new Array(state[windowName].windowCount + windowCount).fill(false);
            if (windowCount < 0) minimizedShallowCopy.splice(action.payload.windowIndex, 1);

            for (let i = 0; i < minimizedShallowCopy.length; i++) {
                newMinimizedArray[i] = minimizedShallowCopy[i];
            }

            let mainWindowName = state[windowName].taskbar.mainWindowName;

            if (mainWindowName) state[mainWindowName].taskbar.subWindowCount += windowCount;
            else if (state[windowName].taskbar.hasSubWindow) state[windowName].taskbar.subWindowCount += windowCount;

            let currentKey = mainWindowName ? mainWindowName : windowName;
            state[currentKey].taskbar.open = true;

            state[windowName] = {
                ...state[windowName],
                showWindow: true,
                windowCount: state[windowName].windowCount + windowCount,
                minimized: [...newMinimizedArray],
            };

            if (!state[windowName].windowCount) {
                state[windowName] = { ...state[windowName], showWindow: false, windowCount: 0, minimized: [false] };

                if (!mainWindowName && !state[windowName].taskbar.hasSubWindow) state[windowName].taskbar.open = false;
                else if (state[mainWindowName]?.taskbar?.subWindowCount <= 0) state[mainWindowName].taskbar.open = false;
                else if (state[windowName].taskbar.subWindowCount <= 0) state[windowName].taskbar.open = false;
            }
        },

        minimizeAppWindowDirect: (state, action) => {
            state[action.payload.windowsName].minimized[action.payload.windowIndex] = true;
        },

        minimizeAppWindow: (state, action) => {
            if (state[action.payload].showWindow && state[action.payload].windowCount === 1 && !state[action.payload].taskbar.hasSubWindow) {
                state[action.payload].minimized[0] ? state[action.payload].minimized[0] = false : state[action.payload].minimized[0] = true;
                return;
            }
            else if (state[action.payload].taskbar.hasSubWindow && state[action.payload].taskbar.subWindowCount === 1) {
                let key = state[state[action.payload].taskbar.hasSubWindow].name;
                if (state[key].windowCount === 1) {
                    state[key].minimized[0] ? state[key].minimized[0] = false : state[key].minimized[0] = true;
                    return;
                }
                state[action.payload].minimized[0] ? state[action.payload].minimized[0] = false : state[action.payload].minimized[0] = true;
                return;
            }
        },

        miniWindowClick: (state, action) => {
            let windowName = action.payload.windowName;
            let index = action.payload.windowIndex;
            state[windowName].minimized[index] = false;
        }
    }
});

export const { setAppWindow, minimizeAppWindow, minimizeAppWindowDirect, miniWindowClick } = AppWindowSlice.actions;
export default AppWindowSlice.reducer;