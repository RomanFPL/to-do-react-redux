import { configureStore } from "@reduxjs/toolkit";
import reduceItemList from "./starterList"
import statusApp from "./statusApp";

export default configureStore({
    reducer: {
        itemList: reduceItemList,
        statusApp: statusApp,
    }
})