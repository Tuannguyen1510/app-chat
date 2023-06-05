import { createSlice } from '@reduxjs/toolkit'
// import axios from 'axios';

const initialState = {
  sideBarClick: {
    openClick: false,
    type: 'CONTACT', // can be CONTACT, STARRED, SHARED
}
}

const app = createSlice({
  name: 'app', //ten reducer/actioname
  initialState, //giá trị mặc định của reducer (stateDefault)
  reducers: {
      // Toggle Sidebar
      toggleSideBar(state,action) {
        state.sideBarClick.openClick = !state.sideBarClick.openClick;
        // state.sideBar.type === "CONTACT",
        // state.sideBar.type = action.payload.type;
        // state.sideBar.type = action.payload;
      },
      updateSideBarType(state, action) {
        state.sideBarClick.type = action.payload.type;
      },
   
  }
});

export const {toggleSideBar,updateSideBarType} = app.actions

export default app.reducer



export function ToggleSidebar() {
    return async (dispatch, getState) => {
      dispatch(app.actions.toggleSideBar());
    // const action = toggleSideBar();
    // dispatch(action);

    // console.log("aaa" , dispatch(action));
    };
  }


  export function UpdateSidebarType(type) {
    return async (dispatch, getState) => {
      dispatch(app.actions.updateSideBarType({type}));
      // const action = updateSideBarType(type);
      // dispatch(action);
      // console.log("bbbb" , dispatch(action));

    };
  }