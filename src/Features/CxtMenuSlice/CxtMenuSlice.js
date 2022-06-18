import { createSlice } from '@reduxjs/toolkit';

export const CxtMenuSlice = createSlice({
    name: "contextmenu",
    initialState: {
        cxtMenu: {
            show: false,
            contextMenu:"",
            type:"",
            windowName:"",
            anchor:{x:0, y:0}
        },
    },
    reducers: {
        showCxtMenu: (state, action) => {
            state.cxtMenu = {
                show: action.payload.show,
                contextMenu: action.payload.cxtMenu,
                type:action.payload.type,
                windowName:action.payload.windowName,
                anchor:action.payload.anchor,
            }
        }
    }
});

export const { showCxtMenu } = CxtMenuSlice.actions;
export default CxtMenuSlice.reducer;