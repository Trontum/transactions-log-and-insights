import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./OrderSlice";
import dayReportSlice from "./DayReportSlice";

const appStore = configureStore({
  reducer: {
    dayReport:dayReportSlice,
    order: orderSlice,
  },
});

export default appStore;