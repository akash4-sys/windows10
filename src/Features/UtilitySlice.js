import { createSlice } from '@reduxjs/toolkit';
import validator from 'validator';

export const UtilitySlice = createSlice({
    name: "utility",
    initialState: {
        whiteboardPointer: { x: 0, y: 0, color: "" },
        userIdentifier: { type: "", payload: "", data: "", resetPassword: false }
    },
    reducers: {
        setWhiteboardPointer: (state, action) => {
            state.whiteboardPointer = action.payload;
        },

        setUserIdentifier: (state, action) => {
            let data = action.payload.data;
            let encodedData = '*'.repeat((data.length) / 2) + action.payload.data.substring((data.length) / 2);

            if (validator.isEmail(data)) state.userIdentifier = {
                type: 'email',
                payload: encodedData,
                data,
                resetPassword: action.payload.resetPassword
            };
            else state.userIdentifier = { type: 'phone number', payload: encodedData, data };
        }
    }
});

export const { setWhiteboardPointer, setUserIdentifier } = UtilitySlice.actions;
export default UtilitySlice.reducer;