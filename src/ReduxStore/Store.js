import { configureStore } from '@reduxjs/toolkit';
import TaskbarReducer from '../Features/TaskbarSlice/TaskbarSlice';
import AppWindowReducer from '../Features/AppWindowSlice/AppWindowSlice';
import CxtMenuReducer from '../Features/CxtMenuSlice/CxtMenuSlice';
import UtilityReducer from '../Features/UtilitySlice';

export const store = configureStore({
    reducer: {
        taskbar: TaskbarReducer,
        appwindow: AppWindowReducer,
        contextmenu: CxtMenuReducer,
        utility: UtilityReducer
    }
});