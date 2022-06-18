import { configureStore } from '@reduxjs/toolkit';
import TaskbarReducer from '../Features/TaskbarSlice/TaskbarSlice';
import AppWindowReducer from '../Features/AppWindowSlice/AppWindowSlice';
import CxtMenuReducer from '../Features/CxtMenuSlice/CxtMenuSlice';

export const store = configureStore({
    reducer: {
        taskbar: TaskbarReducer,
        appwindow: AppWindowReducer,
        contextmenu: CxtMenuReducer
    }
});