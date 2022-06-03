import { configureStore } from '@reduxjs/toolkit';
import TaskbarReducer from '../Features/TaskbarSlice/TaskbarSlice';
import AppWindowReducer from '../Features/AppWindowSlice/AppWindowSlice';

export const store = configureStore({
    reducer: {
        taskbar: TaskbarReducer,
        appwindow: AppWindowReducer
    }
});