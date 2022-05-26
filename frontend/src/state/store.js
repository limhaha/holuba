import { configureStore } from '@reduxjs/toolkit';
import tabIndexReducer from "./tabIndexSlice";
import userReducer from './userSlice';
import assetsReducer from './assetsSlice';
import filterReducer from './filterSlice'
import activitiesReducer from './activitiesSlice';
export const store = configureStore({
  reducer: {
    tabIndex : tabIndexReducer,
    user : userReducer,
    assets : assetsReducer,
    filter: filterReducer,
    activities: activitiesReducer,
  },
});
