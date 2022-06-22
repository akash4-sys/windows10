import { createSlice } from '@reduxjs/toolkit';

export const UtilitySlice = createSlice({
    name:"utility",
    initialState:{
        whiteboardPointer:{ x: 0, y: 0, color:"" }
    },
    reducers:{
        setWhiteboardPointer:(state, action) => {
            state.whiteboardPointer = action.payload;
        }
    }
});

export const { setWhiteboardPointer } = UtilitySlice.actions;
export default UtilitySlice.reducer;