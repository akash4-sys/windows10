import { configureStore } from '@reduxjs/toolkit';
import TaskbarReducer from '../Features/TaskbarSlice/TaskbarSlice';

export const store = configureStore({
    reducer: {
        taskbar: TaskbarReducer
    }
});